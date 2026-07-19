"use client";

import { useState } from "react";
import { ProjectCards } from "./project-cards";

const CLIENT_TABS = ["All", "Healthcare", "Beauty & Wellness", "Food & Export"] as const;
export type ClientTab = (typeof CLIENT_TABS)[number];

export function FilterTabs() {
  const [active, setActive] = useState<ClientTab>("All");

  return (
    <section className="mx-auto w-full max-w-7xl px-5 md:px-8 pb-8">
      {/* ── Section header ── */}
      <div className="mb-8 flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand">Client Work</span>
        <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
          Delivered for Real Businesses
        </h2>
        <p className="mt-1 max-w-xl text-sm text-muted-foreground leading-relaxed">
          Production websites built for clients — each one solving a real business problem.
        </p>
      </div>

      {/* Tab row */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CLIENT_TABS.map((tab) => {
          const isActive = tab === active;
          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={[
                "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
                isActive
                  ? "bg-brand text-brand-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-brand/15 hover:text-brand",
              ].join(" ")}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Client project cards */}
      <ProjectCards filter={active} />
    </section>
  );
}
