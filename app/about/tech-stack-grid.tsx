const stack = [
  { name: "HTML5", color: "#E34F26", initial: "H5" },
  { name: "CSS3", color: "#1572B6", initial: "CS" },
  { name: "JavaScript", color: "#F7DF1E", initial: "JS", dark: true },
  { name: "TypeScript", color: "#3178C6", initial: "TS" },
  { name: "React", color: "#61DAFB", initial: "Re", dark: true },
  { name: "Next.js", color: "#888", initial: "Nx" },
  { name: "Tailwind CSS", color: "#06B6D4", initial: "TW" },
  { name: "Node.js", color: "#339933", initial: "No" },
  { name: "MongoDB", color: "#47A248", initial: "Mg" },
  { name: "WordPress", color: "#21759B", initial: "WP" },
  { name: "Shopify", color: "#96BF48", initial: "Sh" },
  { name: "Git", color: "#F05032", initial: "Gt" },
  { name: "Vercel", color: "#888", initial: "Vc" },
];

export function TechStackGrid() {
  return (
    <section
      aria-labelledby="tech-stack-heading"
      className="py-20 md:py-28 mx-auto w-full max-w-7xl px-5 md:px-8"
    >
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
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

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {stack.map((tech) => (
          <div
            key={tech.name}
            title={tech.name}
            className="group flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md cursor-default"
          >
            {/* Colour swatch avatar */}
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold transition-transform duration-200 group-hover:scale-110"
              style={{
                backgroundColor: `${tech.color}22`,
                color: tech.color,
                border: `1.5px solid ${tech.color}44`,
              }}
            >
              {tech.initial}
            </div>
            <span className="text-center text-[11px] font-medium text-muted-foreground leading-tight group-hover:text-foreground transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
