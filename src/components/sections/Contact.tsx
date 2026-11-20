
"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAIL = "tanwarnaveen522@gmail.com";
const WHATSAPP = "https://wa.me/919518657342";

const SERVICES = [
  "Full Stack Web App",
  "Business Website",
  "Backend / REST API",
  "Other",
];

const BUDGETS = [
  "Not decided",
  "Under ₹10,000",
  "₹10,000 – ₹50,000",
  "₹50,000+",
];

const field =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/10";

type FormStatus = "idle" | "sending" | "done" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function validateForm(data: Record<string, string>) {
    const name = data.name?.trim() ?? "";
    const email = data.email?.trim() ?? "";
    const phone = data.phone?.trim() ?? "";
    const message = data.message?.trim() ?? "";

    // Name: letters, spaces, apostrophes, dots and hyphens only.
    const namePattern =
      /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]{1,59}$/u;

    if (name.length < 2 || name.length > 60 || !namePattern.test(name)) {
      return "Please enter a valid name using 2–60 characters. Numbers and special symbols are not allowed.";
    }

    // Basic email format validation.
    const emailPattern =
      /^(?!.*\.\.)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

    if (
      email.length > 150 ||
      !emailPattern.test(email) ||
      email.split("@")[1]?.split(".").some(
        (part) => !part || part.startsWith("-") || part.endsWith("-")
      )
    ) {
      return "Please enter a valid email address.";
    }

    // Phone is optional, but must be valid if provided.
    if (phone) {
      const phonePattern = /^\+?[0-9\s()-]+$/;
      const digits = phone.replace(/\D/g, "");

      if (
        !phonePattern.test(phone) ||
        digits.length < 7 ||
        digits.length > 15
      ) {
        return "Please enter a valid phone number, including country code if applicable.";
      }
    }

    if (message.length < 20) {
      return "Please provide more details about your project (at least 20 characters).";
    }

    if (message.length > 2000) {
      return "Your message must not exceed 2,000 characters.";
    }

    if (!SERVICES.includes(data.service)) {
      return "Please select a valid service.";
    }

    if (!BUDGETS.includes(data.budget)) {
      return "Please select a valid project budget.";
    }

    return null;
  }

 
async function submit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  if (status === "sending") return;

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = Object.fromEntries(
    formData.entries()
  ) as Record<string, string>;

  // Honeypot protection
  if (data.website?.trim()) {
    form.reset();
    setStatus("done");
    setStatusMessage("Thank you. Your inquiry has been received.");
    return;
  }

  // Validation
  const validationError = validateForm(data);

  if (validationError) {
    setStatus("idle");
    setStatusMessage(validationError);
    return;
  }

  // Normalize input
  const name = data.name.trim().replace(/\s+/g, " ");
  const email = data.email.trim().toLowerCase();
  const phone = data.phone.trim();
  const message = data.message.trim();
  const service = data.service;
  const budget = data.budget;

  // EmailJS configuration
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  setStatus("sending");
  setStatusMessage("");

  try {
    if (!serviceId || !templateId || !publicKey) {
      throw new Error("EmailJS configuration is missing.");
    }

    await emailjs.send(
      serviceId,
      templateId,
      {
        name,
        email,
        phone: phone || "Not provided",
        service,
        budget,
        message,
      },
      publicKey
    );

    setStatus("done");
    setStatusMessage(
      "Thank you for your inquiry! Your message has been received. I will get back to you shortly."
    );

    form.reset();
  } catch (error) {
    console.error("Contact form submission failed:", error);

    setStatus("error");
    setStatusMessage(
      "Unable to submit your inquiry. Please try again or contact me directly at tanwarnaveen522@gmail.com."
    );
  }
}


  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#0a0f1c] px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-sky-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
            Get in Touch
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s Build Your Project{" "}
            <span className="text-sky-300">Together.</span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            Share your project requirements, goals, and expectations.
            I typically respond within 24 hours, and the initial
            consultation is completely free.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <div className="space-y-4">
            {[
              {
                label: "Email",
                value: EMAIL,
                href: `mailto:${EMAIL}`,
              },
              {
                label: "WhatsApp",
                value: "+91 95186 57342",
                href: WHATSAPP,
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/naveen-tanwar-422325251",
                href: "https://www.linkedin.com/in/naveen-tanwar-422325251/",
              },
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={
                  contact.label === "Email" ? undefined : "_blank"
                }
                rel={
                  contact.label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-sky-400/50"
              >
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {contact.label}
                </p>

                <p className="mt-2 break-all text-white">
                  {contact.value}
                </p>
              </a>
            ))}

            <p className="flex items-center gap-2 pt-2 text-sm text-gray-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for Freelance and Remote Opportunities
            </p>
          </div>

          {/* Secure Contact Form */}
          <form
            onSubmit={submit}
            className="relative grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={60}
                autoComplete="name"
                placeholder="Your Full Name"
                aria-label="Your Full Name"
                className={field}
              />

              <input
                name="email"
                type="email"
                required
                maxLength={150}
                autoComplete="email"
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                className={field}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="phone"
                type="tel"
                maxLength={20}
                autoComplete="tel"
                placeholder="Phone / WhatsApp (Optional)"
                aria-label="Phone or WhatsApp Number"
                className={field}
              />

              <select
                name="budget"
                aria-label="Project Budget"
                className={field}
                defaultValue="Not decided"
              >
                {BUDGETS.map((budget) => (
                  <option key={budget} value={budget} className="text-black">
                    {budget}
                  </option>
                ))}
              </select>
            </div>

            <select
              name="service"
              aria-label="Service Required"
              className={field}
              defaultValue="Full Stack Web App"
            >
              {SERVICES.map((service) => (
                <option key={service} value={service} className="text-black">
                  {service}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              required
              minLength={20}
              maxLength={2000}
              rows={5}
              aria-label="Project Details"
              placeholder="Describe your project, key requirements, expected features, and timeline..."
              className={field}
            />

            {/* Honeypot: hidden from genuine visitors */}
            <div
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
            >
              <label htmlFor="contact-website">
                Leave this field empty
              </label>

              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending"
                ? "Submitting Your Inquiry..."
                : "Send Project Inquiry ↗"}
            </button>

            {/* Submission feedback */}
            {statusMessage && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm leading-6 ${status === "done"
                    ? "text-emerald-400"
                    : status === "error"
                      ? "text-amber-300"
                      : "text-rose-400"
                  }`}
              >
                {statusMessage}
              </p>
            )}

            <p className="text-xs leading-5 text-gray-500">
              Your contact information will only be used to respond
              to your project inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
