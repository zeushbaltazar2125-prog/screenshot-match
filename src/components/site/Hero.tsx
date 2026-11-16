import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import heroMain from "@/assets/work-website.jpg";
import heroSecondary from "@/assets/work-canva-posts.jpg";

const qualities = ["Dedicated", "Organised", "Adaptable", "Remote-ready"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      <div aria-hidden className="paper-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="eyebrow animate-fade-up">
            <span className="mr-3 inline-block h-2 w-2 translate-y-[-1px] rounded-full bg-foreground align-middle" />
            {site.role}
          </p>
          <h1
            className="display mt-6 text-[clamp(2.9rem,7.5vw,6.4rem)] text-balance animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Reliable remote support, <em className="text-muted-foreground">so you can focus</em> on growing your business.
          </h1>
          <p
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Hi, I'm {site.name} — a Virtual Assistant who helps business owners stay organised and on
            schedule. I bring dedication, structure and adaptability to every task, wherever you're
            based.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <Button asChild variant="hero" size="xl">
              <a href="#portfolio">
                View My Portfolio <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="ink" size="xl">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <ul
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2 animate-fade-up"
            style={{ animationDelay: "320ms" }}
            aria-label="Core qualities"
          >
            {qualities.map((q) => (
              <li key={q} className="eyebrow flex items-center gap-2 text-foreground">
                <span className="h-px w-4 bg-foreground" aria-hidden />
                {q}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-lift">
              <img
                src={heroMain}
                alt="Sample website project shown on a laptop and tablet"
                width={1200}
                height={912}
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-6 hidden w-48 overflow-hidden rounded-lg border-4 border-background shadow-lift sm:block lg:-left-12 lg:w-56">
              <img
                src={heroSecondary}
                alt="Sample Canva social post designs"
                width={1200}
                height={912}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
            <a
              href="#portfolio"
              className="absolute -right-2 -bottom-6 flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2.5 text-sm shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background">
                <ArrowDown className="h-3.5 w-3.5" />
              </span>
              See sample works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
