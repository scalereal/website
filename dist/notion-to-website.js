"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@notionhq/client");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var gray_matter_1 = __importDefault(require("gray-matter"));
var notion_to_md_1 = require("notion-to-md");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var notion = new client_1.Client({ auth: process.env.NOTION_API_KEY });
var DATABASE_ID = process.env.NOTION_DB_ID;
var BLOGS_CONTENT_PATH = "content/blogs/all";
// 🔧 Helper to safely get property values
function getPropertyValue(page, propertyName) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    var prop = (_a = page.properties) === null || _a === void 0 ? void 0 : _a[propertyName];
    if (!prop)
        return null;
    switch (prop.type) {
        case "title":
            return ((_c = (_b = prop.title) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.plain_text) || "";
        case "rich_text":
            return ((_d = prop.rich_text) === null || _d === void 0 ? void 0 : _d.map(function (t) { return t.plain_text; }).join(" ")) || "";
        case "select":
            return ((_e = prop.select) === null || _e === void 0 ? void 0 : _e.name) || "";
        case "multi_select":
            return ((_f = prop.multi_select) === null || _f === void 0 ? void 0 : _f.map(function (t) { return t.name; })) || [];
        case "date":
            return ((_g = prop.date) === null || _g === void 0 ? void 0 : _g.start) || "";
        case "files":
            return ((_k = (_j = (_h = prop.files) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.file) === null || _k === void 0 ? void 0 : _k.url) || ((_o = (_m = (_l = prop.files) === null || _l === void 0 ? void 0 : _l[0]) === null || _m === void 0 ? void 0 : _m.external) === null || _o === void 0 ? void 0 : _o.url) || "";
        case "url":
            return prop.url || "";
        case "people":
            return ((_q = (_p = prop.people) === null || _p === void 0 ? void 0 : _p[0]) === null || _q === void 0 ? void 0 : _q.name) || "";
        case "checkbox":
            return prop.checkbox;
        default:
            return "";
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var today, startOfDay, endOfDay, response, n2m, _i, _a, page, id, title, slug, mdBlocks, markdown, frontmatter, filePath, fileContent;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("🚀 Starting Notion → Website sync...");
                    today = new Date();
                    startOfDay = new Date(today.setHours(0, 0, 0, 0)).toISOString();
                    endOfDay = new Date(today.setHours(23, 59, 59, 999)).toISOString();
                    return [4 /*yield*/, notion.databases.query({
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
                        })];
                case 1:
                    response = _b.sent();
                    if (!response.results.length) {
                        console.log("ℹ️ No pages found with Status = Ready to Publish.");
                        return [2 /*return*/];
                    }
                    n2m = new notion_to_md_1.NotionToMarkdown({ notionClient: notion });
                    _i = 0, _a = response.results;
                    _b.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    page = _a[_i];
                    id = page.id;
                    title = getPropertyValue(page, "Name") || "Untitled";
                    slug = getPropertyValue(page, "Slug") ||
                        title
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/[^\w-]+/g, "");
                    console.log("\uD83D\uDCDD Processing: ".concat(title));
                    return [4 /*yield*/, n2m.pageToMarkdown(id)];
                case 3:
                    mdBlocks = _b.sent();
                    markdown = n2m.toMarkdownString(mdBlocks).parent;
                    frontmatter = {
                        title: title,
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
                    fs_1.default.mkdirSync(BLOGS_CONTENT_PATH, { recursive: true });
                    filePath = path_1.default.join(BLOGS_CONTENT_PATH, "".concat(slug, ".md"));
                    fileContent = gray_matter_1.default.stringify(markdown, frontmatter);
                    fs_1.default.writeFileSync(filePath, fileContent);
                    console.log("\u2705 Created/Updated: ".concat(filePath));
                    _b.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
                    console.log("🎉 All ready-to-publish blogs synced successfully!");
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(function (err) {
    console.error("❌ Error syncing Notion → Website:", err);
});
