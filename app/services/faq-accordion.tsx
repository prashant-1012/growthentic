"use client";

import { useState } from "react";
import { faqs } from "./faq-data";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="faq-heading"
      className="py-20 md:py-28 mx-auto w-full max-w-3xl px-5 md:px-8"
    >
      {/* Heading */}
      <div data-fade className="mb-12 flex flex-col items-center gap-4 text-center">
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
