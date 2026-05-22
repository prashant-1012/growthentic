import Link from "next/link";
import type { ClientTab } from "./filter-tabs";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ClientProject {
  name: string;
  type: string;
  industry: ClientTab;
  accentColor: string;
  gradient: string;
  darkBg: string;
  mockupType: "dental" | "salon";
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
  darkBg: string;
  mockupType: "dashboard" | "crm" | "directory";
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
    accentColor: "#38BDF8",
    gradient: "from-blue-500/20 via-cyan-400/10 to-sky-300/5",
    darkBg: "#040e1a",
    mockupType: "dental",
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
    accentColor: "#D946EF",
    gradient: "from-purple-500/20 via-pink-400/10 to-rose-300/5",
    darkBg: "#0d0414",
    mockupType: "salon",
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
    darkBg: "#0a1f18",
    mockupType: "dashboard",
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
    darkBg: "#1a1400",
    mockupType: "crm",
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
    darkBg: "#0d0a1a",
    mockupType: "directory",
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

// ─── Client mockups ───────────────────────────────────────────────────────────

function DentalMockup({ accentColor, darkBg }: { accentColor: string; darkBg: string }) {
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: darkBg }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: accentColor + "80" }} />
          <div className="h-1.5 w-20 rounded-full bg-white/25" />
        </div>
        <div className="flex items-center gap-3">
          {["Home","Services","Team","Contact"].map((item, i) => (
            <div key={item} className="text-[7px]" style={{ color: i === 0 ? accentColor : "rgba(255,255,255,0.3)" }}>{item}</div>
          ))}
          <div className="h-5 w-16 rounded-lg text-[7px] font-semibold flex items-center justify-center" style={{ backgroundColor: accentColor, color: "#000" }}>
            Book Now
          </div>
        </div>
      </div>
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center gap-2.5 px-6 py-4" style={{ background: `radial-gradient(ellipse at 60% 40%, ${accentColor}18 0%, transparent 70%)` }}>
        <div className="text-[7px] uppercase tracking-[0.2em] font-semibold" style={{ color: accentColor }}>Premium Dental Care</div>
        <div className="text-center">
          <div className="h-3 w-48 rounded-full bg-white/80 mx-auto mb-1.5" />
          <div className="h-2 w-36 rounded-full bg-white/30 mx-auto mb-0.5" />
          <div className="h-2 w-28 rounded-full bg-white/20 mx-auto" />
        </div>
        <div className="flex gap-2 mt-1">
          <div className="h-6 w-24 rounded-lg flex items-center justify-center text-[7px] font-bold" style={{ backgroundColor: accentColor, color: "#000" }}>
            Book Appointment
          </div>
          <div className="h-6 w-20 rounded-lg flex items-center justify-center text-[7px]" style={{ border: `1px solid ${accentColor}50`, color: accentColor }}>
            Our Services
          </div>
        </div>
      </div>
      {/* Services strip */}
      <div className="grid grid-cols-3 border-t border-white/5">
        {[["🦷","Implants"],["✨","Whitening"],["🔬","Checkup"]].map(([icon, label]) => (
          <div key={label} className="flex flex-col items-center gap-1 py-2 border-r border-white/5 last:border-r-0" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
            <div className="text-[10px]">{icon}</div>
            <div className="text-[6px] text-white/40">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SalonMockup({ accentColor, darkBg }: { accentColor: string; darkBg: string }) {
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: darkBg }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-24 rounded-full bg-white/30" />
        </div>
        <div className="flex items-center gap-3">
          {["Services","Gallery","Pricing","Book"].map((item, i) => (
            <div key={item} className="text-[7px]" style={{ color: i === 3 ? accentColor : "rgba(255,255,255,0.3)" }}>{item}</div>
          ))}
        </div>
      </div>
      {/* Hero — Ken Burns feel */}
      <div className="relative flex-1 flex flex-col items-center justify-center gap-2 px-6 py-2 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${darkBg} 0%, #1a0628 50%, #0d0414 100%)` }}>
        {/* Decorative circles */}
        <div className="absolute top-2 right-4 h-16 w-16 rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${accentColor}, transparent)` }} />
        <div className="absolute bottom-2 left-2 h-10 w-10 rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${accentColor}, transparent)` }} />
        <div className="text-[6px] uppercase tracking-[0.25em] font-semibold mb-1" style={{ color: accentColor }}>Luxury Beauty Studio</div>
        <div className="text-center z-10">
          <div className="h-2.5 w-44 rounded-full bg-white/80 mx-auto mb-1" />
          <div className="h-1.5 w-32 rounded-full bg-white/25 mx-auto" />
        </div>
        <div className="flex gap-2 mt-1 z-10">
          <div className="h-6 w-20 rounded-full flex items-center justify-center text-[7px] font-bold" style={{ backgroundColor: accentColor, color: "#fff" }}>
            Book Now
          </div>
          <div className="h-6 w-16 rounded-full flex items-center justify-center text-[7px]" style={{ border: `1px solid ${accentColor}50`, color: accentColor }}>
            View Work
          </div>
        </div>
      </div>
      {/* Gallery strip */}
      <div className="grid grid-cols-4 gap-px p-2 border-t border-white/5" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
        {[accentColor + "40", accentColor + "25", accentColor + "35", accentColor + "20"].map((bg, i) => (
          <div key={i} className="h-8 rounded-md" style={{ backgroundColor: bg }} />
        ))}
      </div>
    </div>
  );
}

function ClientBrowserMockup({ project }: { project: ClientProject }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-white/10 shadow-xl h-52">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 flex-shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <div className="ml-2 flex-1 rounded-md px-2.5 py-1 flex items-center gap-1.5" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
            {project.liveUrl.replace("https://", "")}
          </span>
        </div>
      </div>
      {/* App preview */}
      <div className="flex-1 overflow-hidden">
        {project.mockupType === "dental" && <DentalMockup accentColor={project.accentColor} darkBg={project.darkBg} />}
        {project.mockupType === "salon"  && <SalonMockup  accentColor={project.accentColor} darkBg={project.darkBg} />}
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

// ─── Personal project mockups ─────────────────────────────────────────────────

function DashboardMockup({ accentColor, darkBg }: { accentColor: string; darkBg: string }) {
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: darkBg }}>
      {/* Top nav */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded" style={{ backgroundColor: accentColor + "60" }} />
          <div className="h-2 w-16 rounded-full bg-white/20" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-10 rounded-full bg-white/10" />
          <div className="h-5 w-5 rounded-full bg-white/15" />
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-10 border-r border-white/5 flex flex-col items-center gap-3 py-3">
          {[1,2,3,4].map((i) => (
            <div key={i} className="h-4 w-4 rounded" style={{ backgroundColor: i === 1 ? accentColor + "80" : "rgba(255,255,255,0.08)" }} />
          ))}
        </div>
        {/* Main */}
        <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2">
            {["24.8K", "1,204", "89%"].map((val, i) => (
              <div key={i} className="rounded-lg p-2" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-[8px] font-bold" style={{ color: accentColor }}>{val}</div>
                <div className="h-1 w-8 rounded-full bg-white/10 mt-1" />
              </div>
            ))}
          </div>
          {/* Chart area */}
          <div className="flex-1 rounded-lg p-2.5 flex flex-col gap-1.5" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="h-1.5 w-16 rounded-full bg-white/15" />
            <div className="flex-1 flex items-end gap-1 px-1 pt-2">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i === 10 ? accentColor : accentColor + "30",
                  }}
                />
              ))}
            </div>
          </div>
          {/* Bottom row */}
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg p-2" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="h-1.5 w-10 rounded-full bg-white/15 mb-1.5" />
              <div className="flex items-center gap-1">
                <div className="h-6 w-6 rounded-full" style={{ background: `conic-gradient(${accentColor} 0% 68%, rgba(255,255,255,0.1) 68% 100%)` }} />
                <div className="text-[7px] font-bold text-white/60">68%</div>
              </div>
            </div>
            <div className="rounded-lg p-2" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="h-1.5 w-12 rounded-full bg-white/15 mb-1.5" />
              {[70, 45, 85].map((w, i) => (
                <div key={i} className="flex items-center gap-1 mb-1">
                  <div className="h-1 rounded-full" style={{ width: `${w}%`, backgroundColor: accentColor + "70" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CRMMockup({ accentColor, darkBg }: { accentColor: string; darkBg: string }) {
  const rows = [
    { name: "Priya S.", status: "New", score: 92 },
    { name: "Rahul M.", status: "Active", score: 78 },
    { name: "Anika D.", status: "Closed", score: 55 },
    { name: "Sanjay K.", status: "Active", score: 88 },
  ];
  const statusColor: Record<string, string> = { New: "#10B981", Active: accentColor, Closed: "#6B7280" };

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: darkBg }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="h-2 w-16 rounded-full bg-white/25" />
          <div className="flex gap-2">
            {["Leads", "Pipeline", "Reports"].map((t, i) => (
              <div key={t} className="px-2 py-0.5 rounded text-[7px]" style={{ backgroundColor: i === 0 ? accentColor + "30" : "transparent", color: i === 0 ? accentColor : "rgba(255,255,255,0.3)" }}>
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="h-5 w-14 rounded-md" style={{ backgroundColor: accentColor + "40" }} />
      </div>
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-10 border-r border-white/5 flex flex-col items-center gap-3 py-3">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="h-4 w-4 rounded" style={{ backgroundColor: i === 1 ? accentColor + "60" : "rgba(255,255,255,0.06)" }} />
          ))}
        </div>
        {/* Table area */}
        <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
          {/* KPI strip */}
          <div className="grid grid-cols-3 gap-1.5">
            {[["142", "Total Leads"], ["38", "Active"], ["94%", "Close Rate"]].map(([v, l]) => (
              <div key={l} className="rounded p-1.5" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-[9px] font-bold" style={{ color: accentColor }}>{v}</div>
                <div className="h-1 w-7 rounded-full bg-white/10 mt-0.5" />
              </div>
            ))}
          </div>
          {/* Table */}
          <div className="flex-1 rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            {/* Table header */}
            <div className="grid grid-cols-3 px-2 py-1.5" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
              {["Name", "Status", "Score"].map((h) => (
                <div key={h} className="text-[7px] text-white/30 font-semibold uppercase">{h}</div>
              ))}
            </div>
            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.name}
                className="grid grid-cols-3 items-center px-2 py-1.5 border-t border-white/[0.04]"
                style={{ backgroundColor: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}
              >
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-white/15" />
                  <div className="text-[7px] text-white/50">{row.name}</div>
                </div>
                <div className="px-1.5 py-0.5 rounded-full text-[6px] font-semibold w-fit" style={{ backgroundColor: statusColor[row.status] + "25", color: statusColor[row.status] }}>
                  {row.status}
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-1 rounded-full flex-1" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                    <div className="h-full rounded-full" style={{ width: `${row.score}%`, backgroundColor: accentColor }} />
                  </div>
                  <div className="text-[7px]" style={{ color: accentColor }}>{row.score}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DirectoryMockup({ accentColor, darkBg }: { accentColor: string; darkBg: string }) {
  const tools = ["ChatGPT", "Midjourney", "Notion AI", "Runway", "Perplexity", "Claude"];
  const categories = ["All", "Writing", "Image", "Video", "Code"];

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: darkBg }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full" style={{ backgroundColor: accentColor + "60" }} />
          <div className="h-2 w-14 rounded-full bg-white/20" />
        </div>
        {/* Search bar */}
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <div className="text-[7px] text-white/25">⌘K Search tools...</div>
        </div>
        <div className="h-5 w-5 rounded-full bg-white/10" />
      </div>
      {/* Filter tabs */}
      <div className="flex items-center gap-1.5 px-4 py-2 border-b border-white/5 overflow-hidden">
        {categories.map((c, i) => (
          <div key={c} className="px-2 py-0.5 rounded-full text-[7px] whitespace-nowrap" style={{ backgroundColor: i === 0 ? accentColor + "30" : "rgba(255,255,255,0.05)", color: i === 0 ? accentColor : "rgba(255,255,255,0.3)", border: i === 0 ? `1px solid ${accentColor}40` : "1px solid transparent" }}>
            {c}
          </div>
        ))}
      </div>
      {/* Grid */}
      <div className="flex-1 p-3 grid grid-cols-3 gap-2 overflow-hidden content-start">
        {tools.map((tool, i) => (
          <div
            key={tool}
            className="rounded-lg p-2 flex flex-col gap-1.5"
            style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-center justify-between">
              <div className="h-5 w-5 rounded-md" style={{ backgroundColor: accentColor + (i % 2 === 0 ? "40" : "20") }} />
              <div className="h-3 w-3 rounded-full bg-white/5 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: i < 2 ? accentColor : "rgba(255,255,255,0.2)" }} />
              </div>
            </div>
            <div className="text-[7px] font-semibold text-white/60">{tool}</div>
            <div className="h-1 w-full rounded-full bg-white/10" />
            <div className="h-1 w-3/4 rounded-full bg-white/5" />
          </div>
        ))}
      </div>
    </div>
  );
}

function PersonalMockup({ project }: { project: PersonalProject }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-white/10 shadow-xl h-44">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 flex-shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-green-400/70" />
        <div className="ml-2 flex-1 rounded-md px-2 py-0.5 flex items-center gap-1.5" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
            {project.liveUrl.replace("https://", "")}
          </span>
        </div>
      </div>
      {/* App preview */}
      <div className="flex-1 overflow-hidden">
        {project.mockupType === "dashboard" && <DashboardMockup accentColor={project.accentColor} darkBg={project.darkBg} />}
        {project.mockupType === "crm"       && <CRMMockup       accentColor={project.accentColor} darkBg={project.darkBg} />}
        {project.mockupType === "directory" && <DirectoryMockup accentColor={project.accentColor} darkBg={project.darkBg} />}
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
