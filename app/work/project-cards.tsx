import Link from "next/link";
import type { ClientTab } from "./filter-tabs";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ClientProject {
  name: string;
  type: string;
  industry: ClientTab;
  accentColor: string;
  gradient: string;
  liveUrl: string;
  stack: string[];
  problem: string;
  solution: string;
  result: string;
  features: string[];
}

interface PersonalProject {
  name: string;
  tagline: string;
  about: string;
  category: string;
  accentColor: string;
  gradient: string;
  liveUrl: string;
  githubUrl?: string;
  stack: string[];
  highlights: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const clientProjects: ClientProject[] = [
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

const personalProjects: PersonalProject[] = [
  {
    name: "Analytiq",
    tagline: "Multi-Tenant SaaS Analytics Dashboard",
    about:
      "Production-grade analytics platform built to demonstrate the full complexity of a real SaaS product — multi-tenancy, role-based access, per-tenant branding, and live data polling.",
    category: "SaaS / Dashboard",
    accentColor: "#10B981",
    gradient: "from-emerald-500/20 via-teal-400/10 to-cyan-300/5",
    liveUrl: "https://analytiq-dashboard.vercel.app",
    stack: ["Next.js 16", "TypeScript", "Redux Toolkit", "TanStack Query", "Recharts", "NextAuth.js", "shadcn/ui", "Tailwind CSS"],
    highlights: [
      "Multi-tenant architecture with org-scoped data isolation",
      "RBAC with 4 roles — Admin, Manager, Analyst, Viewer",
      "Per-tenant branding & white-labelling",
      "KPI cards with sparklines + drill-down event explorer",
      "30-second live polling with optimistic UI updates",
      "Feature usage analytics & cohort tracking",
    ],
  },
  {
    name: "Mini CRM Dashboard",
    tagline: "Lead Management & Analytics Platform",
    about:
      "A clean, feature-based CRM dashboard built to prove out the kind of architecture we use when building custom web apps for clients — scalable, testable, and fast.",
    category: "CRM / Web App",
    accentColor: "#F59E0B",
    gradient: "from-amber-500/20 via-orange-400/10 to-yellow-300/5",
    liveUrl: "https://mini-crm-dashboard-one.vercel.app",
    stack: ["React", "TypeScript", "Redux Toolkit", "TanStack Table", "Recharts", "Axios", "Tailwind CSS"],
    highlights: [
      "Lead management with dynamic data tables & sorting",
      "KPI analytics with interactive charts",
      "Persistent state across sessions",
      "Clean feature-based architecture (UI / logic / API layers)",
      "Fully responsive across all breakpoints",
    ],
  },
  {
    name: "Cognivoya",
    tagline: "AI Tools Discovery Platform",
    about:
      "A curated directory of 60+ AI tools with a focus on UX polish — command palette search, animated transitions, skeleton loaders, and PWA support for a native-app feel.",
    category: "Directory / PWA",
    accentColor: "#8B5CF6",
    gradient: "from-violet-500/20 via-purple-400/10 to-indigo-300/5",
    liveUrl: "https://cognivoya.vercel.app",
    stack: ["React 19", "Redux Toolkit", "RTK Query", "React Router v6", "Framer Motion", "Radix UI", "Tailwind CSS v4", "PWA"],
    highlights: [
      "60+ curated AI tools with category filtering",
      "⌘K command palette for instant search",
      "Bookmark favourites with persistent state",
      "Smooth page transitions + skeleton loaders",
      "Full PWA support — installable on any device",
      "Detailed tool pages with external links",
    ],
  },
];

// ─── Client project cards ─────────────────────────────────────────────────────

export function ProjectCards({ filter }: { filter: ClientTab }) {
  const visible =
    filter === "All"
      ? clientProjects
      : clientProjects.filter((p) => p.industry === filter);

  if (visible.length === 0) {
    return (
      <p className="py-16 text-center text-muted-foreground text-sm">
        No projects in this category yet — check back soon.
      </p>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {visible.map((project) => (
        <ClientProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}

function ClientProjectCard({ project }: { project: ClientProject }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 60px ${project.accentColor}18` }}
      />

      {/* Browser mockup */}
      <div className={`p-5 pb-0 bg-gradient-to-br ${project.gradient}`}>
        <div className="rounded-t-xl border border-border/60 bg-card/80 backdrop-blur-sm overflow-hidden">
          <div className="flex items-center gap-1.5 border-b border-border/40 bg-muted/40 px-3 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <div className="mx-2 flex-1 rounded-md bg-background/60 px-3 py-1 text-[10px] text-muted-foreground/60 font-mono truncate">
              {project.liveUrl.replace("https://", "")}
            </div>
          </div>
          <div className="h-32 flex flex-col items-center justify-center gap-2 px-6">
            <div className="h-3 w-2/3 rounded-full opacity-30" style={{ backgroundColor: project.accentColor }} />
            <div className="h-2 w-1/2 rounded-full bg-muted-foreground/20" />
            <div className="h-2 w-2/5 rounded-full bg-muted-foreground/15" />
            <div className="mt-2 h-7 w-28 rounded-lg opacity-25" style={{ backgroundColor: project.accentColor }} />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-5 p-6">
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

        <ul className="flex flex-col gap-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
              <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>

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

// ─── Personal project cards ───────────────────────────────────────────────────

export function PersonalProjectCards() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {personalProjects.map((project) => (
        <PersonalProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}

function PersonalProjectCard({ project }: { project: PersonalProject }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-border/80">
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 50px ${project.accentColor}15` }}
      />

      {/* Top accent bar + icon area */}
      <div className={`relative h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        {/* Decorative grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Glow orb */}
        <div
          aria-hidden="true"
          className="absolute h-24 w-24 rounded-full blur-2xl opacity-40"
          style={{ backgroundColor: project.accentColor }}
        />
        {/* Category pill */}
        <span
          className="relative z-10 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-sm"
          style={{
            borderColor: `${project.accentColor}40`,
            backgroundColor: `${project.accentColor}18`,
            color: project.accentColor,
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: project.accentColor }} />
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-5 flex-1">
        {/* Title */}
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-brand transition-colors leading-tight">
            {project.name}
          </h3>
          <p className="mt-0.5 text-xs text-muted-foreground font-medium">{project.tagline}</p>
        </div>

        {/* About */}
        <p className="text-sm text-muted-foreground leading-relaxed">{project.about}</p>

        {/* Highlights */}
        <ul className="flex flex-col gap-1.5 flex-1">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span
                className="mt-1.5 h-1 w-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: project.accentColor }}
              />
              {h}
            </li>
          ))}
        </ul>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-3 border-t border-border">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold text-white transition-all hover:opacity-90 hover:scale-105 active:scale-95"
            style={{ backgroundColor: project.accentColor }}
          >
            Live Demo
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3.5 py-2 text-xs font-semibold text-foreground hover:border-brand/40 hover:text-brand transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
