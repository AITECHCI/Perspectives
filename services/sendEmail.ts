"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  subject,
  to,
  react,
  userName,
  userEmail,
}: {
  subject: string;
  to: string | string[];
  react: JSX.Element | React.ReactNode;
  userName: string; // Ex. "Kouakou Alexis"
  userEmail: string; // Ex. "kouakoualexis@gmail.com"
}) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set");
    }

    // Valider les adresses e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const toArray = Array.isArray(to) ? to : [to];
    for (const email of toArray) {
      if (!emailRegex.test(email)) {
        throw new Error(`Invalid email address: ${email}`);
      }
    }

    // Valider l'e-mail de l'utilisateur
    if (!emailRegex.test(userEmail)) {
      throw new Error(`Invalid user email address: ${userEmail}`);
    }

    console.log("Sending email to:", to, "with subject:", subject);
    console.log("From address:", `${userName} <no-reply@perspectivesci.com>`);
    console.log("Reply-To address:", userEmail);

    const data = await resend.emails.send({
      from: "Perspectives CI <no-reply@perspectivesci.com>", // Affiche toujours le nom de l'entreprise
      to: toArray,
      subject,
      reply_to: userEmail, // Les réponses vont à l'email du client
      react,
      
    });

    console.log("Email sent successfully:", data);
    return data;
  } catch (error: any) {
    console.error("Error sending email:", error.message, error.stack);
    throw new Error(`Failed to send email: ${error.message}`);
  }
}