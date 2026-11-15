const faqs = [
  { q: "What types of projects do you take on?", a: "Business websites, full stack web applications, dashboards and REST APIs, built with Java, Spring Boot, React, Next.js and PostgreSQL." },
  { q: "How long does a typical project take?", a: "It depends on the scope. A business website usually takes a few weeks, while a full stack application takes longer. I share a realistic timeline after our first discussion." },
  { q: "How will we communicate during the project?", a: "Through your preferred channel, whether email, WhatsApp or video calls, with regular progress updates and access to the code on GitHub." },
  { q: "Do you provide support after launch?", a: "Yes. I assist with deployment and remain available for fixes and improvements after delivery." },
  { q: "How do I get a quote?", a: "Send your requirements through the contact form. I will review them and reply with an estimate and timeline, usually within 24 hours." },
];

const schema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-border">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container-width section-spacing">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Frequently asked questions.</h2>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-2xl text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-2xl leading-8 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
