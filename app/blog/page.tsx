import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Web Tips for Small Business Owners | Growthentic",
  description:
    "Honest, practical web advice for Indian small business owners. Guides on pricing, platforms, and online growth.",
  alternates: { canonical: "https://growthentic.in/blog" },
  openGraph: {
    url: "https://growthentic.in/blog",
    title: "Blog — Web Tips for Small Business Owners | Growthentic",
    description:
      "Honest, practical web advice for Indian small business owners. Guides on pricing, platforms, and online growth.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Growthentic Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Web Tips for Small Business Owners | Growthentic",
    description:
      "Honest, practical web advice for Indian small business owners. Guides on pricing, platforms, and online growth.",
    images: ["/og-default.png"],
  },
};

const categoryColors: Record<string, string> = {
  "Business Growth": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "Pricing & Planning": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "Tech Advice": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
};

export default function BlogPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute top-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-brand/8 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-brand/6 blur-[100px] animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
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
              The Blog
            </span>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Web Advice That{" "}
              <span className="text-brand">Actually Helps</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Honest, practical guides for Indian small business owners on websites, pricing, and growing online — no fluff.
            </p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section
        aria-labelledby="posts-heading"
        className="mx-auto w-full max-w-7xl px-5 md:px-8 pb-24"
      >
        <h2 id="posts-heading" className="sr-only">All Posts</h2>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand/30"
            >
              {/* Colour band */}
              <div className="h-1.5 w-full bg-brand" />

              <div className="flex flex-col gap-4 p-6 flex-1">
                {/* Category + read time */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${
                      categoryColors[post.category] ?? "bg-muted text-muted-foreground border-border"
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    {post.readTime} read
                  </span>
                </div>

                <h2 className="font-heading text-lg font-bold text-foreground leading-snug group-hover:text-brand transition-colors flex-1">
                  {post.title}
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand">
                    Read More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
