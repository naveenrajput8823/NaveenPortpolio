
"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("Your message is ready. Backend integration is pending.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080b14] px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Get In Touch
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Let&apos;s Work <span className="text-indigo-400">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Have a project in mind or looking for a developer? Feel free to
            contact me. I&apos;d love to discuss your ideas and work together.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <h3 className="text-2xl font-semibold">Let&apos;s Connect</h3>

            <p className="mt-4 leading-7 text-gray-400">
              I&apos;m open to Java Full Stack Developer opportunities,
              freelance projects and collaboration.
            </p>

            <div className="mt-10 space-y-7">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:your-email@example.com"
                  className="mt-2 inline-block text-base text-white transition hover:text-indigo-400"
                >
                  your-email@example.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="mt-2 text-base text-white">India</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Availability</p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Open to Opportunities
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="mb-5 text-sm font-medium text-gray-400">
                Connect with me
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/naveen-tanwar-422325251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 px-4 py-3 text-sm transition hover:border-indigo-400 hover:text-indigo-400"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://www.instagram.com/_naveen_tanwar__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 px-4 py-3 text-sm transition hover:border-indigo-400 hover:text-indigo-400"
                >
                  Instagram ↗
                </a>

                <a
                  href="https://stackoverflow.com/users/33113943/naveen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 px-4 py-3 text-sm transition hover:border-indigo-400 hover:text-indigo-400"
                >
                  Stack Overflow ↗
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <h3 className="text-2xl font-semibold">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-white/10 bg-[#080b14] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-white/10 bg-[#080b14] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="w-full rounded-lg border border-white/10 bg-[#080b14] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-[#080b14] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-500 px-6 py-4 font-semibold text-white transition hover:bg-indigo-400"
              >
                Send Message →
              </button>

              {status && (
                <p className="text-center text-sm text-amber-400">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
