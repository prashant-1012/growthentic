const items = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Static Websites",
    body: "Fast, reliable, beautifully designed pages for businesses that need a strong online presence without the complexity.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    title: "Dynamic Websites",
    body: "Content-managed, database-driven sites that grow with your business and stay easy to update.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    title: "E-Commerce Stores",
    body: "Full shopping experiences with product pages, cart, checkout, and payment — built to sell.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Landing Pages",
    body: "Focused, conversion-optimized single pages for ads, product launches, or lead capture campaigns.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    title: "Portfolio Sites",
    body: "Clean, elegant showcases for creatives, photographers, consultants, and personal brands.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Custom Web Apps",
    body: "Booking systems, dashboards, portals — whatever your workflow needs, built from the ground up.",
  },
];

export function WhatWeBuild() {
  return (
    <section
      aria-labelledby="what-we-build-heading"
      className="py-20 md:py-28 bg-secondary/30"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div data-fade className="mb-14 flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
            What We Build
          </span>
          <h2
            id="what-we-build-heading"
            className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Six Types of Websites.{" "}
            <span className="text-brand">One Studio.</span>
          </h2>
          <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
            Whether you need something simple and fast or complex and custom — we've done it
            before and we'll get it right.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
            >
              <div className="mt-0.5 flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand/8 text-brand group-hover:bg-brand/12 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground mb-1 group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
