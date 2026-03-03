import { NextResponse } from "next/server";
import { sendEmail } from "@/services/sendEmail";
import ContactEmail from "@/emails/contact-email";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("Données reçues dans POST /contact :", body);
  const { name, email, subject, message, to } = body;

  if (!name || !email || !subject || !message || !to) {
    console.error("Champs manquants :", { name, email, subject, message, to });
    return NextResponse.json(
      { error: "Tous les champs (name, email, subject, message, to) sont requis" },
      { status: 400 }
    );
  }

  try {
    await sendEmail({
      to,
      subject: `Nouveau message de contact de ${name}`,
      react: ContactEmail({ name, email, subject, message }),
      userName: name,
      userEmail: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
}