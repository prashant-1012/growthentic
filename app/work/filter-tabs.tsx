"use client";

import { useState } from "react";
import { ProjectCards } from "./project-cards";

const TABS = ["All", "Healthcare", "Beauty & Wellness"] as const;
export type Tab = (typeof TABS)[number];

export function FilterTabs() {
  const [active, setActive] = useState<Tab>("All");

  return (
    <section className="mx-auto w-full max-w-7xl px-5 md:px-8">
      {/* Tab row */}
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-10">
        {TABS.map((tab) => {
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

      {/* Cards driven by active filter */}
      <ProjectCards filter={active} />
    </section>
  );
}
