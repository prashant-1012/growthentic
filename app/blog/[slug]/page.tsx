import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/data/blog-posts";
import { FaqList } from "@/components/faq-list";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `https://growthentic.in/blog/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["Prashant Kumar"],
      images: [{ url: "/ogImage.jpeg", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/ogImage.jpeg"],
    },
  };
}

const categoryColors: Record<string, string> = {
  "Business Growth": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "Pricing & Planning": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "Tech Advice": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const url = `https://growthentic.in/blog/${post.slug}`;

  const graph: object[] = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: post.title,
      description: post.excerpt,
      image: "https://growthentic.in/ogImage.jpeg",
      datePublished: post.isoDate,
      dateModified: post.isoDate,
      author: { "@id": "https://growthentic.in/#founder" },
      publisher: { "@id": "https://growthentic.in/#business" },
      mainEntityOfPage: url,
    },
  ];

  if (post.faqs && post.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-brand/6 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/blog" className="hover:text-brand transition-colors">Blog</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
            <span className="truncate text-foreground">{post.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${
                categoryColors[post.category] ?? "bg-muted text-muted-foreground border-border"
              }`}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              {post.readTime} read
            </span>
            <span className="text-xs text-muted-foreground">{post.date}</span>
          </div>

          <h1 className="font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          {/* Author */}
          <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/15 text-brand font-heading font-extrabold text-sm select-none">
              PK
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Prashant Kumar</p>
              <p className="text-xs text-muted-foreground">Founder, Growthentic · Pune, India</p>
            </div>
          </div>

          {/* Quick Answer */}
          <div className="mt-6 rounded-2xl border border-brand/30 bg-brand/6 px-6 py-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-brand">
              Quick Answer
            </p>
            <p className="text-base font-medium text-foreground leading-relaxed">
              {post.quickAnswer}
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto w-full max-w-3xl px-5 md:px-8 pb-16">
        <div className="prose-content flex flex-col gap-5">
          {post.content.map((section, i) => {
            if (section.type === "h2") {
              return (
                <h2 key={i} className="font-heading text-xl font-bold text-foreground mt-4 first:mt-0">
                  {section.text}
                </h2>
              );
            }
            if (section.type === "h3") {
              return (
                <h3 key={i} className="font-heading text-base font-bold text-foreground">
                  {section.text}
                </h3>
              );
            }
            if (section.type === "p") {
              return (
                <p key={i} className="text-base text-muted-foreground leading-relaxed">
                  {section.text}
                </p>
              );
            }
            if (section.type === "ul") {
              return (
                <ul key={i} className="flex flex-col gap-2">
                  {section.items?.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            if (section.type === "table" && section.headers && section.rows) {
              return (
                <div key={i} className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full min-w-[480px] text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        {section.headers.map((h) => (
                          <th key={h} className="px-4 py-3 text-left font-semibold text-foreground">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {section.rows.map((row, ri) => (
                        <tr key={ri} className="bg-card hover:bg-muted/30 transition-colors">
                          {row.map((cell, ci) => (
                            <td key={ci} className="px-4 py-3 text-muted-foreground">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* FAQ */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-12">
            <h2 className="font-heading text-xl font-bold text-foreground mb-5">
              Frequently Asked Questions
            </h2>
            <FaqList faqs={post.faqs} />
          </div>
        )}

        {/* CTA inside post */}
        <div className="mt-12 rounded-2xl border border-brand/30 bg-brand/6 p-6 flex flex-col sm:flex-row items-center gap-5">
          <div className="flex-1">
            <p className="font-heading font-bold text-foreground mb-1">Ready to build your website?</p>
            <p className="text-sm text-muted-foreground">Get a free quote — we reply within 2 hours.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground hover:opacity-90 transition-opacity"
          >
            Get a Free Quote
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section
          aria-labelledby="related-heading"
          className="border-t border-border py-16 mx-auto w-full max-w-7xl px-5 md:px-8"
        >
          <h2 id="related-heading" className="font-heading text-xl font-bold text-foreground mb-8">
            More from the Blog
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
              >
                <span
                  className={`mb-3 inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${
                    categoryColors[p.category] ?? "bg-muted text-muted-foreground border-border"
                  }`}
                >
                  {p.category}
                </span>
                <h3 className="font-heading text-base font-bold text-foreground leading-snug mb-2 group-hover:text-brand transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                  Read More
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
