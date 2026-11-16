import {
  BriefcaseBusiness,
  CalendarClock,
  Database,
  FolderKanban,
  Headset,
  LayoutTemplate,
  Megaphone,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { services, type ServiceIcon } from "@/content/site";

const icons: Record<ServiceIcon, LucideIcon> = {
  assistant: BriefcaseBusiness,
  admin: FolderKanban,
  data: Database,
  calendar: CalendarClock,
  support: Headset,
  social: Megaphone,
  design: Palette,
  website: LayoutTemplate,
};

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          label="Services"
          title="How I can help your business."
          intro="Flexible support across admin, communication, content and the web — pick one service or combine several."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal
                key={service.title}
                delay={(i % 4) * 70}
                className="group relative flex flex-col bg-card p-7 transition-colors duration-300 hover:bg-foreground hover:text-background"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md border border-border transition-colors duration-300 group-hover:border-background/30">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <span className="eyebrow transition-colors group-hover:text-background/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-10 text-lg font-medium leading-snug">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-background/70">
                  {service.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
