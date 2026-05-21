import Link from "next/link";
import type { Tab } from "./filter-tabs";

interface Project {
  name: string;
  type: string;
  industry: Tab;
  accentColor: string;
  gradient: string;
  liveUrl: string;
  stack: string[];
  problem: string;
  solution: string;
  result: string;
  features: string[];
}

const projects: Project[] = [
  {
    name: "Smile Care Studio",
    type: "Premium Dental Clinic Website",
    industry: "Healthcare",
    accentColor: "#3B82F6",
    gradient: "from-blue-500/20 via-cyan-400/10 to-sky-300/5",
    liveUrl: "https://smile-care-studio.vercel.app/",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    problem:
      "The clinic had no online presence and was losing patients to competitors who already had websites.",
    solution:
      "Built a full 6-page site with a multi-step appointment booking form, team profiles, and a services breakdown that builds patient trust before they even walk in.",
    result:
      "Clinic reports a measurable uptick in online appointment requests within the first month of launch.",
    features: [
      "Dark / light mode toggle",
      "Scroll-triggered animations",
      "6-page layout — Home, About, Services, Team, Gallery, Contact",
      "Multi-step appointment booking system",
      "Patient testimonials section",
    ],
  },
  {
    name: "Velour Studios",
    type: "Luxury Beauty & Salon Website",
    industry: "Beauty & Wellness",
    accentColor: "#A855F7",
    gradient: "from-purple-500/20 via-pink-400/10 to-rose-300/5",
    liveUrl: "https://velourstudios.vercel.app/",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    problem:
      "The salon had a dated website that didn't reflect the premium experience they offered in person.",
    solution:
      "Designed a luxury-feel site with a curated gallery, service menu, and a sleek multi-step booking form that matches the brand's high-end positioning.",
    result:
      "Instagram following grew as customers started sharing the website link, and booking enquiries shifted from phone to online.",
    features: [
      "Dark / light theme toggle",
      "Gallery with lightbox",
      "8-page layout — Home, Services, Team, Gallery, Pricing, Blog, Booking, Contact",
      "Multi-step booking form",
      "Service menu with pricing & team profiles",
    ],
  },
];

export function ProjectCards({ filter }: { filter: Tab }) {
  const visible = filter === "All" ? projects : projects.filter((p) => p.industry === filter);

  if (visible.length === 0) {
    return (
      <p className="py-16 text-center text-muted-foreground text-sm">
        No projects in this category yet — check back soon.
      </p>
    );
  }

  return (
    <>
      <div className="grid gap-10 lg:grid-cols-2 pb-8">
        {visible.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      {/* Bottom CTA */}
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
            {/* WhatsApp icon */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 60px ${project.accentColor}18` }}
      />

      {/* Browser mockup header */}
      <div className={`p-5 pb-0 bg-gradient-to-br ${project.gradient}`}>
        <div className="rounded-t-xl border border-border/60 bg-card/80 backdrop-blur-sm overflow-hidden">
          {/* Chrome bar */}
          <div className="flex items-center gap-1.5 border-b border-border/40 bg-muted/40 px-3 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <div className="mx-2 flex-1 rounded-md bg-background/60 px-3 py-1 text-[10px] text-muted-foreground/60 font-mono truncate">
              {project.liveUrl.replace("https://", "")}
            </div>
          </div>
          {/* Fake content area */}
          <div className="h-32 flex flex-col items-center justify-center gap-2 px-6">
            <div className="h-3 w-2/3 rounded-full opacity-30" style={{ backgroundColor: project.accentColor }} />
            <div className="h-2 w-1/2 rounded-full bg-muted-foreground/20" />
            <div className="h-2 w-2/5 rounded-full bg-muted-foreground/15" />
            <div className="mt-2 h-7 w-28 rounded-lg opacity-25" style={{ backgroundColor: project.accentColor }} />
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-5 p-6">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span
              className="mb-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
              style={{ backgroundColor: `${project.accentColor}18`, color: project.accentColor }}
            >
              {project.industry}
            </span>
            <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-brand transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground">{project.type}</p>
          </div>
          <div className="mt-1 h-3 w-3 rounded-full flex-shrink-0" style={{ backgroundColor: project.accentColor }} />
        </div>

        {/* Case study */}
        <dl className="flex flex-col gap-3 rounded-xl border border-border bg-muted/30 p-4 text-sm">
          {(
            [
              ["Problem", project.problem],
              ["Solution", project.solution],
              ["Result", project.result],
            ] as [string, string][]
          ).map(([label, text]) => (
            <div key={label}>
              <dt className="mb-0.5 font-semibold text-foreground">{label}</dt>
              <dd className="text-muted-foreground leading-relaxed">{text}</dd>
            </div>
          ))}
        </dl>

        {/* Features */}
        <ul className="flex flex-col gap-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {f}
            </li>
          ))}
        </ul>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2 border-t border-border">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105 active:scale-95"
            style={{ backgroundColor: project.accentColor }}
          >
            View Live
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
          </a>
        </div>
      </div>
    </article>
  );
}
