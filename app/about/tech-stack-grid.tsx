import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siNodedotjs,
  siMongodb,
  siWordpress,
  siShopify,
  siGit,
  siVercel,
} from "simple-icons";

interface Tech {
  name: string;
  icon: { path: string; hex: string };
  colorOverride?: string;
}

const stack: Tech[] = [
  { name: "HTML5",        icon: siHtml5 },
  { name: "CSS3",         icon: siCss },
  { name: "JavaScript",   icon: siJavascript },
  { name: "TypeScript",   icon: siTypescript },
  { name: "React",        icon: siReact },
  { name: "Next.js",      icon: siNextdotjs,    colorOverride: "#888888" },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "Node.js",      icon: siNodedotjs },
  { name: "MongoDB",      icon: siMongodb },
  { name: "WordPress",    icon: siWordpress },
  { name: "Shopify",      icon: siShopify },
  { name: "Git",          icon: siGit },
  { name: "Vercel",       icon: siVercel,        colorOverride: "#888888" },
];

export function TechStackGrid() {
  return (
    <section
      aria-labelledby="tech-stack-heading"
      className="py-20 md:py-28 mx-auto w-full max-w-7xl px-5 md:px-8"
    >
      <div data-fade className="mb-14 flex flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
          Tech Stack
        </span>
        <h2
          id="tech-stack-heading"
          className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
        >
          Tools We Build{" "}
          <span className="text-brand">With</span>
        </h2>
        <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
          Modern, proven, and chosen for performance — every tool in our stack earns its place.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 min-[480px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {stack.map((tech) => {
          const color = `#${tech.colorOverride ? tech.colorOverride.replace("#", "") : tech.icon.hex}`;
          return (
            <div
              key={tech.name}
              title={tech.name}
              className="group flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md cursor-default"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
                style={{
                  backgroundColor: `${color}22`,
                  border: `1.5px solid ${color}44`,
                }}
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  style={{ fill: color }}
                  aria-label={tech.name}
                >
                  <path d={tech.icon.path} />
                </svg>
              </div>
              <span className="text-center text-[11px] font-medium text-muted-foreground leading-tight group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
