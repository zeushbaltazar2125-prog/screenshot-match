import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
  inverse?: boolean;
};

export function SectionHeading({ index, label, title, intro, className, inverse }: Props) {
  return (
    <Reveal className={cn("grid gap-6 md:grid-cols-12 md:gap-10", className)}>
      <p className={cn("eyebrow md:col-span-3 md:pt-3", inverse && "text-ink-muted")}>
        {index} — {label}
      </p>
      <div className="md:col-span-9">
        <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-balance">{title}</h2>
        {intro ? (
          <p
            className={cn(
              "mt-5 max-w-2xl text-base sm:text-lg leading-relaxed",
              inverse ? "text-ink-muted" : "text-muted-foreground",
            )}
          >
            {intro}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
