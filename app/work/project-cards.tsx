import Link from "next/link";
import Image from "next/image";
import type { ClientTab } from "./filter-tabs";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ClientProject {
  name: string;
  type: string;
  industry: ClientTab;
  accentColor: string;
  image: string;
  liveUrl: string;
  stack: string[];
  impact: string;
  tags: string[];
}

interface PersonalProject {
  name: string;
  tagline: string;
  about: string;
  category: string;
  accentColor: string;
  image: string;
  liveUrl: string;
  githubUrl?: string;
  stack: string[];
  tags: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const clientProjects: ClientProject[] = [
  {
    name: "Smile Care Studio",
    type: "Premium Dental Clinic Website",
    industry: "Healthcare",
    accentColor: "#38BDF8",
    image: "/work/smile-care-studio.webp",
    liveUrl: "https://smile-care-studio.vercel.app/",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    impact:
      "No website meant losing patients to competitors — we built a 6-page site with multi-step booking and team profiles, and online appointment requests rose within the first month.",
    tags: ["Dark / Light Mode", "Online Booking", "6 Pages", "Scroll Animations"],
  },
  {
    name: "Velour Studios",
    type: "Luxury Beauty & Salon Website",
    industry: "Beauty & Wellness",
    accentColor: "#D946EF",
    image: "/work/velour-studios.webp",
    liveUrl: "https://velourstudios.vercel.app/",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    impact:
      "Their old site undersold the in-person experience — we built a gallery-driven, luxury-feel site with online booking, and enquiries shifted from phone calls to the web.",
    tags: ["Gallery Lightbox", "Online Booking", "8 Pages", "Team Profiles"],
  },
  {
    name: "Malabar Reserve",
    type: "Premium Spice Export Website",
    industry: "Food & Export",
    accentColor: "#C9A227",
    image: "/work/malabar-reserve.webp",
    liveUrl: "https://www.malabarreserve.co/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    impact:
      "No online presence matched their export credibility — we built a heritage-driven site with product showcases and a quote funnel, replacing trade fairs and PDF catalogues as their first touchpoint.",
    tags: ["Product Showcase", "Export Process", "Quote Funnel", "6 Pages"],
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
    image: "/work/analytiq.webp",
    liveUrl: "https://analytiq-dashboard.vercel.app",
    stack: ["Next.js 16", "TypeScript", "Redux Toolkit", "TanStack Query", "Recharts", "NextAuth.js", "shadcn/ui", "Tailwind CSS"],
    tags: ["Multi-Tenant", "RBAC — 4 Roles", "Live Polling", "Cohort Analytics"],
  },
  {
    name: "Mini CRM Dashboard",
    tagline: "Lead Management & Analytics Platform",
    about:
      "A clean, feature-based CRM dashboard built to prove out the kind of architecture we use when building custom web apps for clients — scalable, testable, and fast.",
    category: "CRM / Web App",
    accentColor: "#F59E0B",
    image: "/work/mini-crm.webp",
    liveUrl: "https://mini-crm-dashboard-one.vercel.app",
    stack: ["React", "TypeScript", "Redux Toolkit", "TanStack Table", "Recharts", "Axios", "Tailwind CSS"],
    tags: ["Lead Management", "KPI Analytics", "Persistent State", "Fully Responsive"],
  },
  {
    name: "Cognivoya",
    tagline: "AI Tools Discovery Platform",
    about:
      "A curated directory of 60+ AI tools with a focus on UX polish — command palette search, animated transitions, skeleton loaders, and PWA support for a native-app feel.",
    category: "Directory / PWA",
    accentColor: "#8B5CF6",
    image: "/work/cognivoya.webp",
    liveUrl: "https://cognivoya.vercel.app",
    stack: ["React 19", "Redux Toolkit", "RTK Query", "React Router v6", "Framer Motion", "Radix UI", "Tailwind CSS v4", "PWA"],
    tags: ["60+ AI Tools", "⌘K Search", "PWA Support", "Bookmarking"],
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

// ─── Client browser mockup — real screenshot ──────────────────────────────────

function ClientBrowserMockup({ project }: { project: ClientProject }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-border shadow-xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 bg-muted px-3 py-2 border-b border-border flex-shrink-0">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <div className="ml-2 flex-1 rounded-md bg-background/60 border border-border px-2.5 py-1 flex items-center gap-1.5">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500 flex-shrink-0" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span className="text-[9px] font-mono text-muted-foreground truncate">
            {project.liveUrl.replace("https://", "")}
          </span>
        </div>
      </div>
      {/* App preview — real screenshot, sized to actually show the design */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={`${project.name} — ${project.type} homepage`}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

function ClientProjectCard({ project }: { project: ClientProject }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 60px ${project.accentColor}18` }}
      />

      {/* Browser mockup */}
      <div className="p-5 pb-0">
        <ClientBrowserMockup project={project} />
      </div>

      <div className="flex flex-col gap-4 p-6">
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

        <p className="text-sm text-muted-foreground leading-relaxed">{project.impact}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
              style={{ backgroundColor: `${project.accentColor}12`, color: project.accentColor }}
            >
              {tag}
            </span>
          ))}
        </div>

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

// ─── Personal project mockup — real screenshot ────────────────────────────────

function PersonalMockup({ project }: { project: PersonalProject }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-border shadow-xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 bg-muted px-3 py-2 border-b border-border flex-shrink-0">
        <span className="h-2 w-2 rounded-full bg-red-400/80" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
        <span className="h-2 w-2 rounded-full bg-green-400/80" />
        <div className="ml-2 flex-1 rounded-md bg-background/60 border border-border px-2 py-0.5 flex items-center gap-1.5">
          <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500 flex-shrink-0"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span className="text-[9px] font-mono text-muted-foreground truncate">
            {project.liveUrl.replace("https://", "")}
          </span>
        </div>
      </div>
      {/* App preview — real screenshot, sized to actually show the design */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={`${project.name} — ${project.tagline} screenshot`}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-contain"
        />
      </div>
    </div>
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

      {/* Browser mockup preview */}
      <div className="p-4 pb-0">
        <PersonalMockup project={project} />
      </div>

      {/* Category pill */}
      <div className="px-5 pt-4">
        <span
          className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold"
          style={{
            borderColor: `${project.accentColor}40`,
            backgroundColor: `${project.accentColor}12`,
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

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 flex-1 content-start">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
              style={{ backgroundColor: `${project.accentColor}12`, color: project.accentColor }}
            >
              {tag}
            </span>
          ))}
        </div>

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
