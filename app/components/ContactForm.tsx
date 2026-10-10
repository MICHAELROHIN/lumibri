"use client";

import type { FormEvent } from "react";
import { FORM_RECIPIENT, gmailCompose } from "../lib/mail";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const name = get("Full Name");
    const email = get("Email Address");
    const phone = get("Phone Number");
    const message = get("Message");

    const subject = `New message from ${name} - Lumibri ABA website`;
    const body = [
      `Full Name: ${name}`,
      `Email Address: ${email}`,
      `Phone Number: ${phone || "Not provided"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.open(
      gmailCompose({ to: FORM_RECIPIENT, subject, body }),
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form
      id="message"
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-10"
    >
      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-navy">
        Send a message
      </h2>
      <p className="mt-3 leading-7 text-muted">
        Tell us a little about how we can support your child.
      </p>
      <div className="mt-8 space-y-5">
        <label className="block">
          <span className="text-sm font-semibold text-navy">Full Name</span>
          <input name="Full Name" type="text" placeholder="Jane Doe" required className="mt-2 w-full rounded-xl border border-navy/15 bg-[#fffaf5] px-4 py-3 text-navy outline-none transition placeholder:text-muted/60 focus:border-[#d46d42]" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-navy">Email Address</span>
          <input name="Email Address" type="email" placeholder="jane@example.com" required className="mt-2 w-full rounded-xl border border-navy/15 bg-[#fffaf5] px-4 py-3 text-navy outline-none transition placeholder:text-muted/60 focus:border-[#d46d42]" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-navy">Phone Number</span>
          <input name="Phone Number" type="tel" placeholder="5550000000" className="mt-2 w-full rounded-xl border border-navy/15 bg-[#fffaf5] px-4 py-3 text-navy outline-none transition placeholder:text-muted/60 focus:border-[#d46d42]" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-navy">Your Message</span>
          <textarea name="Message" rows={5} placeholder="How can we support your child's developmental goals?" required className="mt-2 w-full resize-none rounded-xl border border-navy/15 bg-[#fffaf5] px-4 py-3 text-navy outline-none transition placeholder:text-muted/60 focus:border-[#d46d42]" />
        </label>
      </div>
      <button type="submit" className="mt-7 w-full rounded-full bg-navy px-7 py-4 font-semibold text-white transition hover:bg-[#1a2f72]">
        Send Message <span className="ml-2" aria-hidden>→</span>
      </button>
    </form>
  );
}