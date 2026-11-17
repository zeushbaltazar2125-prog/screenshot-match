import { useMemo, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { portfolioCategories, projects, type PortfolioCategory, type Project } from "@/content/site";
import { cn } from "@/lib/utils";

type Filter = "All" | PortfolioCategory;

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filters: Filter[] = useMemo(
    () => ["All", ...portfolioCategories.filter((c) => projects.some((p) => p.category === c))],
    [],
  );
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          label="Portfolio"
          title={
            <>
              Sample works <em className="text-muted-foreground">&amp;</em> projects.
            </>
          }
          intro="A selection of design, admin, data and web work. Click any project to see the details."
        />

        <div role="tablist" aria-label="Filter projects by category" className="mt-14 flex flex-wrap gap-2">
          {filters.map((f) => {
            const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
            const selected = filter === f;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(f)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300",
                  selected
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
                )}
              >
                {f}
                <span className={cn("font-mono text-[0.7rem]", selected ? "text-background/60" : "text-muted-foreground")}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal as="li" key={project.id} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setActive(project)}
                className="group block w-full text-left focus-visible:outline-none"
                aria-label={`View details for ${project.title}`}
              >
                <div className="relative overflow-hidden rounded-lg border border-border bg-muted group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={912}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-top grayscale transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <span className="absolute right-3 top-3 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full bg-background text-foreground opacity-0 shadow-soft transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow">{project.category}</p>
                    <h3 className="mt-2 text-xl font-medium">{project.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                    {project.disclaimer ? (
                      <p className="mt-2 text-xs italic text-muted-foreground">Fictional sample data.</p>
                    ) : null}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[92vh] max-w-5xl gap-0 overflow-y-auto p-0 sm:rounded-lg">
          {active ? (
            <div className="grid md:grid-cols-5">
              <ProjectGallery project={active} />
              <div className="flex flex-col p-7 sm:p-9 md:col-span-2">
                <p className="eyebrow">{active.category}</p>
                <DialogTitle className="display mt-3 text-4xl font-normal">{active.title}</DialogTitle>
                <DialogDescription className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {active.description}
                </DialogDescription>

                {active.disclaimer ? (
                  <p role="note" className="mt-6 rounded-md border border-border bg-muted px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">Disclaimer: </span>
                    {active.disclaimer}
                  </p>
                ) : null}

                <div className="mt-8">
                  <p className="eyebrow">Deliverables</p>
                  <ul className="mt-3 space-y-2">
                    {active.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <p className="eyebrow">Tools used</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {active.tools.map((t) => (
                      <li key={t} className="rounded-full border border-border px-3 py-1 text-xs">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild variant="hero" size="xl" className="mt-10">
                  <a href="#contact" onClick={() => setActive(null)}>
                    Start a similar project
                  </a>
                </Button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ProjectGallery({ project }: { project: Project }) {
  const images = project.gallery?.length ? project.gallery : [project.image];
  const [index, setIndex] = useState(0);
  const current = images[index] ?? project.image;
  return (
    <div className="flex flex-col bg-muted md:col-span-3">
      <div className="flex flex-1 items-center justify-center">
        <img
          src={current}
          alt={`${project.title} — image ${index + 1} of ${images.length}`}
          className="max-h-[70vh] w-full object-contain"
        />
      </div>
      {images.length > 1 ? (
        <div className="flex gap-2 border-t border-border p-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index}
              className={cn(
                "h-16 w-16 overflow-hidden rounded-md border-2 transition-all",
                i === index ? "border-foreground" : "border-transparent opacity-60 hover:opacity-100",
              )}
            >
              <img src={src} alt="" className="h-full w-full object-cover object-top" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
