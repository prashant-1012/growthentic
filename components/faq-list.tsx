"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export function FaqList({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
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
  );
}
