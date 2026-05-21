const milestones = [
  {
    year: "2023",
    title: "The Beginning",
    body: "Started freelancing, landed the first client project, and discovered a genuine love for building websites for small businesses.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      </svg>
    ),
  },
  {
    year: "2024",
    title: "Defining the Standard",
    body: "Built Smile Care Studio and Velour Studios — two projects that define what Growthentic quality looks like.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    year: "2025",
    title: "Growthentic Launches",
    body: "Growthentic officially launched as a studio brand — a name, an identity, and a promise to small businesses across India.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    year: "Future",
    title: "Growing Together",
    body: "Growing alongside our clients, one website at a time — more industries, more impact, same commitment to craft.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    future: true,
  },
];

export function JourneyTimeline() {
  return (
    <section
      aria-labelledby="journey-heading"
      className="py-20 md:py-28 mx-auto w-full max-w-7xl px-5 md:px-8"
    >
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
          Our Journey
        </span>
        <h2
          id="journey-heading"
          className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
        >
          How We Got{" "}
          <span className="text-brand">Here</span>
        </h2>
      </div>

      {/* Desktop: horizontal — Mobile: vertical */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-0 relative">
        {/* Connector line */}
        <div
          aria-hidden="true"
          className="absolute top-[2.375rem] left-[calc(100%/8)] right-[calc(100%/8)] h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />

        {milestones.map((m) => (
          <div key={m.year} className="group flex flex-col items-center gap-4 px-6 text-center">
            {/* Node */}
            <div
              className={[
                "relative z-10 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-110",
                m.future
                  ? "border-brand/30 bg-brand/8 text-brand border-dashed"
                  : "border-brand bg-brand text-brand-foreground",
              ].join(" ")}
            >
              {m.icon}
            </div>

            <span
              className={[
                "font-heading text-sm font-extrabold",
                m.future ? "text-brand/60" : "text-brand",
              ].join(" ")}
            >
              {m.year}
            </span>

            <div>
              <h3 className="font-heading text-base font-bold text-foreground mb-1.5 group-hover:text-brand transition-colors">
                {m.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="flex flex-col gap-0 lg:hidden">
        {milestones.map((m, i) => (
          <div key={m.year} className="group flex gap-5">
            {/* Line + node column */}
            <div className="flex flex-col items-center">
              <div
                className={[
                  "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300",
                  m.future
                    ? "border-brand/30 bg-brand/8 text-brand border-dashed"
                    : "border-brand bg-brand text-brand-foreground",
                ].join(" ")}
              >
                {m.icon}
              </div>
              {i < milestones.length - 1 && (
                <div className="mt-1 w-px flex-1 bg-border min-h-[2rem]" aria-hidden="true" />
              )}
            </div>

            {/* Content */}
            <div className="pb-8">
              <span
                className={[
                  "font-heading text-xs font-extrabold mb-1 block",
                  m.future ? "text-brand/60" : "text-brand",
                ].join(" ")}
              >
                {m.year}
              </span>
              <h3 className="font-heading text-base font-bold text-foreground mb-1 group-hover:text-brand transition-colors">
                {m.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
