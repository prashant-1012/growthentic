const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Speed",
    body: "Fast delivery, fast websites. We respect your time — and your customers' time.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Craft",
    body: "Every pixel is intentional. Good enough isn't good enough — ever.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Transparency",
    body: "Clear pricing, honest timelines, no surprises. What you see is what you get.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Partnership",
    body: "We succeed when your business succeeds. That's not a tagline — that's the deal.",
  },
];

export function ValuesSection() {
  return (
    <section
      aria-labelledby="values-heading"
      className="py-20 md:py-28 bg-secondary/30"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
            What We Stand For
          </span>
          <h2
            id="values-heading"
            className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            The Four Things We{" "}
            <span className="text-brand">Never Compromise On</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl"
            >
              {/* Number accent */}
              <span className="absolute top-5 right-5 font-heading text-5xl font-extrabold text-foreground/4 select-none group-hover:text-brand/8 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/8 text-brand group-hover:bg-brand/15 transition-colors">
                {v.icon}
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1.5 group-hover:text-brand transition-colors">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
