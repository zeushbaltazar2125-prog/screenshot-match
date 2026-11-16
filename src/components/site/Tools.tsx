import {
  Blocks,
  Bot,
  FileSpreadsheet,
  LayoutGrid,
  Palette,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { tools, type ToolIcon } from "@/content/site";

const icons: Record<ToolIcon, LucideIcon> = {
  canva: Palette,
  google: LayoutGrid,
  office: FileSpreadsheet,
  chatgpt: Bot,
  lovable: Sparkles,
  other: Blocks,
};

export function Tools() {
  return (
    <section id="tools" className="bg-ink py-24 text-ink-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          inverse
          index="04"
          label="Tools & skills"
          title="The tools I work with every day."
          intro="Comfortable with the platforms most businesses already use — and quick to learn the ones you prefer."
        />

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => {
            const Icon = icons[tool.icon];
            return (
              <Reveal
                as="li"
                key={tool.name}
                delay={(i % 3) * 70}
                className="group rounded-lg border border-ink-border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink-foreground/40"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-ink-foreground text-ink transition-transform duration-300 group-hover:rotate-[-6deg]">
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                  </span>
                  <ul className="flex flex-wrap justify-end gap-1.5">
                    {tool.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-ink-border px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-ink-muted">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <h3 className="mt-8 text-xl font-medium">{tool.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{tool.text}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
