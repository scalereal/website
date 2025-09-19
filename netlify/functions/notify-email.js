import nodemailer from "nodemailer";

export async function handler(event) {
  try {
    const data = JSON.parse(event.body);

    // Create transporter using Gmail (works with App Password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email HTML template
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
        <h2>New form submission</h2>
        <p>Someone just submitted a form on <a href="https://scalereal.com" target="_blank">scalereal.com</a>. Here's what they had to say:</p>
        
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${
      data.email
    }</a></p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-line; background:#f9f9f9; padding:10px; border:1px solid #ddd;">${
          data.requirement
        }</p>
        
        <p style="font-size:12px; color:#888;">Submitted ${new Date().toLocaleString()}</p>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"ScaleReal Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: data.subject || "New ScaleReal Contact Form Submission",
      html: htmlBody,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
