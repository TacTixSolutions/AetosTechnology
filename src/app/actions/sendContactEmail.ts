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
        <h2>New Client Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Job Title:</strong> ${data.jobTitle}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.countryCode} ${data.phone}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Number of Locations:</strong> ${data.locations}</p>
        <p><strong>Number of Frontline Employees:</strong> ${data.employees}</p>
      `;
    } else if (type === "partner") {
      subject = `New Partner Inquiry from ${data.prenom} ${data.nom}`;
      htmlContent = `
        <h2>New Partner Contact Form Submission</h2>
        <p><strong>Nom:</strong> ${data.nom}</p>
        <p><strong>Prénom:</strong> ${data.prenom}</p>
        <p><strong>Entreprise:</strong> ${data.entreprise}</p>
        <p><strong>Pays:</strong> ${data.pays}</p>
        <p><strong>Téléphone:</strong> ${data.countryCode} ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Site web:</strong> ${data.website || "N/A"}</p>
        <p><strong>Secteur d'activité:</strong> ${data.secteur}</p>
        <p><strong>Clients intéressés:</strong> ${data.hasClients || "N/A"}</p>
      `;
    } else if (type === "join") {
      subject = `New Job Application from ${data.prenom} ${data.nom}`;
      htmlContent = `
        <h2>New Job Application Submission</h2>
        <p><strong>Nom:</strong> ${data.nom}</p>
        <p><strong>Prénom:</strong> ${data.prenom}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Téléphone:</strong> ${data.countryCode} ${data.phone}</p>
        <p><strong>Poste souhaité:</strong> ${data.poste}</p>
        <p><strong>LinkedIn:</strong> ${data.linkedin || "N/A"}</p>
        <p><strong>CV:</strong> ${cvFile ? cvFile.name : "Not uploaded"}</p>
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
