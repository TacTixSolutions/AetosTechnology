"use server";

import nodemailer from "nodemailer";
import type { SendMailOptions } from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(formData: {
  type: "client" | "partner" | "join";
  data: Record<string, string>;
  cvFile?: File;
}) {
  const fromEmail = process.env.FROM_EMAIL || "devtest@tactix.tn";

  try {
    const { type, data, cvFile } = formData;
    let subject = "";
    let htmlContent = "";

    // Build email content based on form type
    if (type === "client") {
      subject = `New Client Inquiry from ${data.firstName} ${data.lastName}`;
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
            .header { background-color: #024E63; padding: 40px 20px; text-align: center; }
            .header img { max-width: 180px; height: auto; }
            .content { padding: 40px 30px; }
            .title { color: #024E63; font-size: 24px; font-weight: 600; margin: 0 0 10px 0; }
            .subtitle { color: #666; font-size: 14px; margin: 0 0 30px 0; }
            .info-card { background-color: #f8f9fa; border-left: 4px solid #024E63; padding: 20px; margin-bottom: 20px; border-radius: 4px; }
            .info-row { display: flex; padding: 12px 0; border-bottom: 1px solid #e0e0e0; }
            .info-row:last-child { border-bottom: none; }
            .info-label { font-weight: 600; color: #024E63; min-width: 180px; }
            .info-value { color: #333; }
            .footer { background-color: #f8f9fa; padding: 30px; text-align: center; color: #666; font-size: 12px; }
            .footer a { color: #024E63; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://aetos-technology.com/logoWithText.png" alt="AETOS Technology" />
            </div>
            <div class="content">
              <h1 class="title">New Client Inquiry</h1>
              <p class="subtitle">You have received a new contact form submission from a potential client.</p>
              
              <div class="info-card">
                <div class="info-row">
                  <span class="info-label">Name</span>
                  <span class="info-value">${data.firstName} ${data.lastName}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Job Title</span>
                  <span class="info-value">${data.jobTitle}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Email</span>
                  <span class="info-value"><a href="mailto:${data.email}" style="color: #024E63;">${data.email}</a></span>
                </div>
                <div class="info-row">
                  <span class="info-label">Phone</span>
                  <span class="info-value">${data.countryCode ? data.countryCode + " " : ""}${data.phone}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Company</span>
                  <span class="info-value">${data.company}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Number of Locations</span>
                  <span class="info-value">${data.locations}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Frontline Employees</span>
                  <span class="info-value">${data.employees}</span>
                </div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the AETOS Technology contact form.</p>
              <p>&copy; ${new Date().getFullYear()} AETOS Technology. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `;
    } else if (type === "partner") {
      subject = `New Partner Inquiry from ${data.prenom} ${data.nom}`;
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
            .header { background-color: #024E63; padding: 40px 20px; text-align: center; }
            .header img { max-width: 180px; height: auto; }
            .content { padding: 40px 30px; }
            .title { color: #024E63; font-size: 24px; font-weight: 600; margin: 0 0 10px 0; }
            .subtitle { color: #666; font-size: 14px; margin: 0 0 30px 0; }
            .info-card { background-color: #f8f9fa; border-left: 4px solid #024E63; padding: 20px; margin-bottom: 20px; border-radius: 4px; }
            .info-row { display: flex; padding: 12px 0; border-bottom: 1px solid #e0e0e0; }
            .info-row:last-child { border-bottom: none; }
            .info-label { font-weight: 600; color: #024E63; min-width: 180px; }
            .info-value { color: #333; }
            .footer { background-color: #f8f9fa; padding: 30px; text-align: center; color: #666; font-size: 12px; }
            .footer a { color: #024E63; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://aetos-technology.com/logoWithText.png" alt="AETOS Technology" />
            </div>
            <div class="content">
              <h1 class="title">New Partner Inquiry</h1>
              <p class="subtitle">You have received a new partnership inquiry.</p>
              
              <div class="info-card">
                <div class="info-row">
                  <span class="info-label">Nom</span>
                  <span class="info-value">${data.nom}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Prénom</span>
                  <span class="info-value">${data.prenom}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Entreprise</span>
                  <span class="info-value">${data.entreprise}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Pays</span>
                  <span class="info-value">${data.pays}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Téléphone</span>
                  <span class="info-value">${data.countryCode ? data.countryCode + " " : ""}${data.phone}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Email</span>
                  <span class="info-value"><a href="mailto:${data.email}" style="color: #024E63;">${data.email}</a></span>
                </div>
                <div class="info-row">
                  <span class="info-label">Site web</span>
                  <span class="info-value">${data.website ? `<a href="${data.website}" style="color: #024E63;">${data.website}</a>` : "N/A"}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Secteur d'activité</span>
                  <span class="info-value">${data.secteur}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Clients intéressés</span>
                  <span class="info-value">${data.hasClients || "N/A"}</span>
                </div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the AETOS Technology contact form.</p>
              <p>&copy; ${new Date().getFullYear()} AETOS Technology. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `;
    } else if (type === "join") {
      subject = `New Job Application from ${data.prenom} ${data.nom}`;
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
            .header { background-color: #024E63; padding: 40px 20px; text-align: center; }
            .header img { max-width: 180px; height: auto; }
            .content { padding: 40px 30px; }
            .title { color: #024E63; font-size: 24px; font-weight: 600; margin: 0 0 10px 0; }
            .subtitle { color: #666; font-size: 14px; margin: 0 0 30px 0; }
            .info-card { background-color: #f8f9fa; border-left: 4px solid #024E63; padding: 20px; margin-bottom: 20px; border-radius: 4px; }
            .info-row { display: flex; padding: 12px 0; border-bottom: 1px solid #e0e0e0; }
            .info-row:last-child { border-bottom: none; }
            .info-label { font-weight: 600; color: #024E63; min-width: 180px; }
            .info-value { color: #333; }
            .attachment-badge { display: inline-block; background-color: #024E63; color: white; padding: 8px 16px; border-radius: 20px; font-size: 12px; margin-top: 10px; }
            .footer { background-color: #f8f9fa; padding: 30px; text-align: center; color: #666; font-size: 12px; }
            .footer a { color: #024E63; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://aetos-technology.com/logoWithText.png" alt="AETOS Technology" />
            </div>
            <div class="content">
              <h1 class="title">New Job Application</h1>
              <p class="subtitle">You have received a new job application.</p>
              
              <div class="info-card">
                <div class="info-row">
                  <span class="info-label">Nom</span>
                  <span class="info-value">${data.nom}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Prénom</span>
                  <span class="info-value">${data.prenom}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Email</span>
                  <span class="info-value"><a href="mailto:${data.email}" style="color: #024E63;">${data.email}</a></span>
                </div>
                <div class="info-row">
                  <span class="info-label">Téléphone</span>
                  <span class="info-value">${data.countryCode ? data.countryCode + " " : ""}${data.phone}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Poste souhaité</span>
                  <span class="info-value">${data.poste}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">LinkedIn</span>
                  <span class="info-value">${data.linkedin ? `<a href="${data.linkedin}" style="color: #024E63;">${data.linkedin}</a>` : "N/A"}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">CV</span>
                  <span class="info-value">
                    ${cvFile ? `<span class="attachment-badge">${cvFile.name}</span>` : "Not uploaded"}
                  </span>
                </div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the AETOS Technology contact form.</p>
              <p>&copy; ${new Date().getFullYear()} AETOS Technology. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `;
    }

    const mailOptions: SendMailOptions = {
      from: `"AETOS Contact Form" <${fromEmail}>`,
      to: fromEmail,
      subject: subject,
      html: htmlContent,
    };

    if (cvFile) {
      const buffer = Buffer.from(await cvFile.arrayBuffer());
      mailOptions.attachments = [
        {
          filename: cvFile.name,
          content: buffer,
        },
      ];
    }

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.messageId);

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again.",
    };
  }
}
