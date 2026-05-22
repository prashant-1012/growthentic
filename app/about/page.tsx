import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TechStackGrid } from "./tech-stack-grid";
import { ValuesSection } from "./values-section";
import { JourneyTimeline } from "./journey-timeline";
import { AboutCta } from "./about-cta";

export const metadata: Metadata = {
  title: "About Growthentic | Freelance Web Studio, Pune India",
  description:
    "Meet the team behind Growthentic — a freelance web studio helping Indian small businesses grow online.",
  alternates: { canonical: "https://growthentic.in/about" },
  openGraph: {
    url: "https://growthentic.in/about",
    title: "About Growthentic | Freelance Web Studio, Pune India",
    description:
      "Meet the team behind Growthentic — a freelance web studio helping Indian small businesses grow online.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "About Growthentic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Growthentic | Freelance Web Studio, Pune India",
    description:
      "Meet the team behind Growthentic — a freelance web studio helping Indian small businesses grow online.",
    images: ["/og-default.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <AboutHero />
      <StorySection />
      <TechStackGrid />
      <ValuesSection />
      <JourneyTimeline />
      <AboutCta />
    </main>
  );
}

/* ── Hero ── */
function AboutHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-[-10%] right-[-5%] h-[520px] w-[520px] rounded-full bg-brand/8 blur-[120px] animate-pulse-slow" />
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
            About Us
          </span>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            We&apos;re Growthentic —{" "}
            <span className="text-brand">A Small Studio With Big Results</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A freelance web studio based in Pune, India. We build websites that work as hard
            as the businesses behind them.
          </p>

          {/* Quick facts strip */}
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {[
              "📍 Baner, Pune",
              "🇮🇳 Serving India-wide",
              "⚡ 7–14 day delivery",
              "💬 Replies within 2 hrs",
            ].map((fact) => (
              <span
                key={fact}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {fact}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Story ── */
function StorySection() {
  return (
    <section
      aria-labelledby="story-heading"
      className="py-20 md:py-28 bg-secondary/30"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left — text */}
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
                Our Story
              </span>
              <h2
                id="story-heading"
                className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
              >
                Built for Businesses That{" "}
                <span className="text-brand">Deserve Better</span>
              </h2>
            </div>

            <div className="flex flex-col gap-5 text-base text-muted-foreground leading-relaxed">
              <p>
                I started Growthentic because I saw a gap — talented, hardworking small business
                owners in India who deserved a strong online presence, but were either priced out
                of agencies or let down by freelancers who overpromised and underdelivered.
              </p>
              <p>
                I've always believed that a great website isn't just about looks. It's about what
                it does for your business — how many people it brings in, how much trust it builds,
                how many enquiries it generates. That's the standard I hold every project to.
              </p>
              <p>
                Working with clinics, salons, restaurants, and boutiques has taught me that every
                business has a story worth telling. My job is to tell it well — clearly, beautifully,
                and in a way that your customers can't ignore.
              </p>
              <p>
                When I'm not building websites, I'm staying current with the latest in Next.js,
                performance optimisation, and design trends — so every project gets the best of
                what's possible today.
              </p>
            </div>

            {/* Founder sig */}
            <div className="flex items-center gap-4 pt-2">
              <Image
                src="/portfolio_img.jpg"
                alt="Prashant Kumar"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover object-top ring-2 ring-brand/30"
              />
              <div>
                <p className="font-heading font-bold text-foreground">Prashant Kumar</p>
                <p className="text-sm text-muted-foreground">Founder, Growthentic · Pune, India</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground hover:opacity-90 transition-opacity"
            >
              Work With Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Right — photo + stats */}
          <div className="relative flex items-center justify-center">
            {/* Ambient glow */}
            <div aria-hidden="true" className="absolute h-80 w-80 rounded-full bg-brand/12 blur-[90px]" />

            <div className="relative w-full max-w-sm">
              {/* Photo frame */}
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl aspect-[4/5]">
                <Image
                  src="/portfolio_img.jpg"
                  alt="Prashant Kumar — Founder, Growthentic"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Subtle gradient at bottom for card legibility */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Floating name tag at bottom */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="font-heading text-sm font-bold text-white">Prashant Kumar</span>
                    <span className="text-xs text-white/70">Founder, Growthentic · Pune, India</span>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-brand/90 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    Available
                  </span>
                </div>
              </div>

              {/* Stats card overlapping bottom-right */}
              <div className="absolute -bottom-6 -right-10 w-52 rounded-2xl border border-border bg-card/95 backdrop-blur-sm p-4 shadow-xl">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "5+", label: "Projects" },
                    { value: "100%", label: "On-Time" },
                    { value: "4.9★", label: "Rating" },
                    { value: "2 hrs", label: "Response" },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col gap-0.5">
                      <span className="font-heading text-lg font-extrabold text-brand leading-none">{s.value}</span>
                      <span className="text-[11px] text-muted-foreground">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote card overlapping top-left */}
              <div className="absolute -top-5 -left-16 w-48 rounded-xl border border-border bg-card/95 backdrop-blur-sm p-3.5 shadow-lg">
                <svg className="mb-2 h-5 w-5 text-brand/50" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  "Every project gets the best of what's possible today."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
