"use client";

import { useState } from "react";
import { sendMessage } from "../app/actions";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(formData: FormData) {
    const res = await sendMessage(formData);
    setStatus(res?.message || "");
  }

  return (
    <div className="w-md max-w-full">

      <form action={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border rounded bg-(--accent-lightgreen) text-(--background) drop-shadow-sm/50"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded bg-(--accent-lightgreen) text-(--background) drop-shadow-sm/50"
          required
        />
        <textarea
          name="message"
          autoComplete="false"
          placeholder="Message"
          className="w-full p-2 border rounded h-32 bg-(--accent-lightgreen) text-(--background) drop-shadow-sm/50"
          required
        />

        <button
          type="submit"
          className="bg-(--background) text-white px-4 py-2 rounded hover:bg-(--accent-tangerine) drop-shadow-sm/50"
        >
          Send
        </button>
      </form>

      {status && <p className="mt-4 text-green-600">{status}</p>}
    </div>
  );
}
