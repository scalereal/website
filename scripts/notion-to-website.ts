import { Client } from "@notionhq/client";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NotionToMarkdown } from "notion-to-md";
import dotenv from "dotenv";

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY as string });
const DATABASE_ID = process.env.NOTION_DB_ID as string;
const BLOGS_CONTENT_PATH = "content/blogs/all";

// 🔧 Helper to safely get property values
function getPropertyValue(page: any, propertyName: string): any {
  const prop = page.properties?.[propertyName];
  if (!prop) return null;

  switch (prop.type) {
    case "title":
      return prop.title?.[0]?.plain_text || "";
    case "rich_text":
      return prop.rich_text?.map((t: any) => t.plain_text).join(" ") || "";
    case "select":
      return prop.select?.name || "";
    case "multi_select":
      return prop.multi_select?.map((t: any) => t.name) || [];
    case "date":
      return prop.date?.start || "";
    case "files":
      return prop.files?.[0]?.file?.url || prop.files?.[0]?.external?.url || "";
    case "url":
      return prop.url || "";
    case "people":
      return prop.people?.[0]?.name || "";
    case "checkbox":
      return prop.checkbox;
    default:
      return "";
  }
}

async function main() {
  console.log("🚀 Starting Notion → Website sync...");

  // --- 🧭 Fetch all pages ---
  const today = new Date();
  const startOfDay = new Date(today.setHours(0, 0, 0, 0)).toISOString();
  const endOfDay = new Date(today.setHours(23, 59, 59, 999)).toISOString();

  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      and: [
        {
          property: "Status",
          status: { equals: "Ready to Publish" },
        },
        {
          property: "Publish Date",
          date: {
            on_or_after: startOfDay,
            on_or_before: endOfDay,
          },
        },
      ],
    },
  });

  console.log(
    `📄 Found ${response.results.length} pages ready to publish`,
    response.results
  );

  if (!response.results.length) {
    console.log("ℹ️ No pages found with Status = Ready to Publish.");
    return;
  }

  const n2m = new NotionToMarkdown({ notionClient: notion });

  // --- 🧩 Process each page ---
  for (const page of response.results) {
    const id = page.id;
    const title = getPropertyValue(page, "Name") || "Untitled";
    const slug =
      getPropertyValue(page, "Slug") ||
      title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

    console.log(`📝 Processing: ${title}`);

    // --- 🪄 Convert page content to Markdown ---
    const mdBlocks = await n2m.pageToMarkdown(id);
    const markdown = n2m.toMarkdownString(mdBlocks).parent;

    // --- ✍️ Frontmatter for Blog ---
    const frontmatter = {
      title,
      description: getPropertyValue(page, "Description") || "",
      categories: getPropertyValue(page, "Categories") || [],
      date: getPropertyValue(page, "Publish Date") || new Date().toISOString(),
      tags: getPropertyValue(page, "Tags") || [],
      author: getPropertyValue(page, "Author") || "Unknown",
      image: getPropertyValue(page, "Image") || "",
      url: getPropertyValue(page, "URL") || "",
      draft: false,
    };

    // --- 🗂️ Save ---
    fs.mkdirSync(BLOGS_CONTENT_PATH, { recursive: true });
    const filePath = path.join(BLOGS_CONTENT_PATH, `${slug}.md`);
    const fileContent = matter.stringify(markdown, frontmatter);
    fs.writeFileSync(filePath, fileContent);

    console.log(`✅ Created/Updated: ${filePath}`);
  }

  console.log("🎉 All ready-to-publish blogs synced successfully!");
}

main().catch((err) => {
  console.error("❌ Error syncing Notion → Website:", err);
});
