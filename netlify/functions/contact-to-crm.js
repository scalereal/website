export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { email, subject, requirement } = JSON.parse(event.body);

    const CRM_API = "https://crm.scalereal.com/rest/contactUsFormSubmissions";
    const TOKEN = process.env.CRM_API_TOKEN;
    const payload = { email, subject, requirement };

    const response = await fetch(CRM_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error sending to CRM:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
}
