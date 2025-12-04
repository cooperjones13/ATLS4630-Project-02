"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { message: "All fields are required." };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "cooper@arbdesk.net",
      subject: `New Contact Form: ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
`.trim(),
    });

    return { message: "Message sent successfully!" };
  } catch (error) {
    console.error(error);
    return { message: "Something went wrong sending the message." };
  }
}
