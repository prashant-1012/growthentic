"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does a project take?",
    a: "It depends on the scope. A landing page can be ready in 3–5 days. A full business website typically takes 7–14 days. E-commerce and custom web apps take 3–6 weeks. We always share a clear timeline before we start.",
  },
  {
    q: "Do you provide hosting and domain support?",
    a: "Yes. We help you set up hosting (typically Vercel or a shared host) and register your domain. Ongoing hosting costs are usually minimal and we'll walk you through everything.",
  },
  {
    q: "Can I update the site myself after launch?",
    a: "Absolutely. If you want a CMS (like WordPress or Sanity), we'll build it in from the start. For simpler sites, we provide clear documentation and offer affordable monthly maintenance if you'd prefer we handle updates.",
  },
  {
    q: "Do you work with businesses outside Pune?",
    a: "Yes, we work with clients across India — fully remote. All communication happens over WhatsApp and video calls, and it works seamlessly.",
  },
  {
    q: "What happens if I need changes after the website launches?",
    a: "Every project includes a post-launch support window. Beyond that, we offer affordable maintenance packages or one-off change requests — no nickel-and-diming.",
  },
  {
    q: "Do you offer EMI or payment in installments?",
    a: "Yes. We typically work on a 50% advance / 50% on delivery structure. For larger projects, we can discuss a milestone-based payment plan that works for both sides.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="faq-heading"
      className="py-20 md:py-28 mx-auto w-full max-w-3xl px-5 md:px-8"
    >
      {/* Heading */}
      <div className="mb-12 flex flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
          FAQ
        </span>
        <h2
          id="faq-heading"
          className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
        >
          Questions We Hear{" "}
          <span className="text-brand">All the Time</span>
        </h2>
        <p className="max-w-md text-base text-muted-foreground leading-relaxed">
          Straight answers — no fluff.
        </p>
      </div>

      {/* Accordion */}
      <dl className="flex flex-col divide-y divide-border rounded-2xl border border-border overflow-hidden">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="bg-card">
              <dt>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-foreground hover:text-brand transition-colors"
                >
                  {faq.q}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={`flex-shrink-0 text-brand transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </dt>
              {isOpen && (
                <dd className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </dd>
              )}
            </div>
          );
        })}
      </dl>
    </section>
  );
}
