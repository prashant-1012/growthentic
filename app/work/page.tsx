import type { Metadata } from "next";
import { FilterTabs } from "./filter-tabs";

export const metadata: Metadata = {
  title: "Portfolio | Web Projects for Indian Businesses | Growthentic",
  description:
    "See how we've helped Indian small businesses launch stunning, high-performance websites.",
};

export default function WorkPage() {
  return (
    <main className="flex flex-col">
      <WorkHero />
      <FilterTabs />
    </main>
  );
}

function WorkHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background blobs */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-brand/8 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-brand/6 blur-[100px] animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            Our Work
          </span>

          {/* Headline */}
          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Real Websites.{" "}
            <span className="text-brand">Real Results.</span>
          </h1>

          {/* Sub */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Every project here started with a business that needed a stronger online presence.
            Here's how we built it — and what happened next.
          </p>

          {/* Stats strip */}
          <div className="mt-4 flex flex-wrap justify-center gap-8">
            {[
              { value: "2+", label: "Live Projects" },
              { value: "100%", label: "On-Time Delivery" },
              { value: "4.9★", label: "Client Rating" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="font-heading text-3xl font-extrabold text-brand">{stat.value}</span>
                <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
