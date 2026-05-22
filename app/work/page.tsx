import type { Metadata } from "next";
import Link from "next/link";
import { FilterTabs } from "./filter-tabs";
import { PersonalProjectCards } from "./project-cards";

export const metadata: Metadata = {
  title: "Portfolio | Web Projects for Indian Businesses | Growthentic",
  description:
    "See how we've helped Indian small businesses launch stunning, high-performance websites.",
  alternates: { canonical: "https://growthentic.in/work" },
  openGraph: {
    url: "https://growthentic.in/work",
    title: "Portfolio | Web Projects for Indian Businesses | Growthentic",
    description:
      "See how we've helped Indian small businesses launch stunning, high-performance websites.",
    images: [{ url: "/ogImage.jpeg", width: 1200, height: 630, alt: "Growthentic Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Web Projects for Indian Businesses | Growthentic",
    description: "See how we've helped Indian small businesses launch stunning, high-performance websites.",
    images: ["/ogImage.jpeg"],
  },
};

export default function WorkPage() {
  return (
    <main className="flex flex-col">
      <WorkHero />

      {/* ── Client work ── */}
      <FilterTabs />

      {/* ── Divider ── */}
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="relative my-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/50 whitespace-nowrap">
            Also Built
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>

      {/* ── Personal / open-source projects ── */}
      <PersonalProjectsSection />

      {/* ── Bottom CTA ── */}
      <BottomCTA />
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
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            Our Work
          </span>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Real Websites.{" "}
            <span className="text-brand">Real Results.</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Every project here started with a business that needed a stronger online presence.
            Here's how we built it — and what happened next.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-8">
            {[
              { value: "5+", label: "Projects Shipped" },
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

function PersonalProjectsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 md:px-8 py-8">
      {/* Section header */}
      <div className="mb-8 flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand">Personal Projects</span>
        <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
          Built to Push the Limits
        </h2>
        <p className="mt-1 max-w-xl text-sm text-muted-foreground leading-relaxed">
          Open-source and personal builds exploring complex UI patterns, SaaS architecture, and real-time systems — the engineering depth behind every client project.
        </p>
      </div>

      <PersonalProjectCards />
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 md:px-8 pb-24">
      <div className="py-16 flex flex-col items-center gap-5 text-center border-t border-border">
        <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
          Want a Website Like These?
        </h2>
        <p className="max-w-md text-muted-foreground text-base leading-relaxed">
          Tell us about your business and we'll build something your customers won't forget.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground hover:opacity-90 transition-opacity"
          >
            Start Your Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <a
            href="https://wa.me/917972052896"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-brand/40 hover:text-brand transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
