import { UserRound } from "lucide-react";
import { Reveal } from "./Reveal";
import { site, strengths } from "@/content/site";

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">01 — About me</p>
          <div className="mt-8 overflow-hidden rounded-lg border border-border bg-muted">
            {site.profilePhoto ? (
              <img
                src={site.profilePhoto}
                alt={`Portrait of ${site.name}`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover grayscale"
              />
            ) : (
              <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 text-muted-foreground">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-input">
                  <UserRound className="h-7 w-7" aria-hidden />
                </span>
                <span className="eyebrow">Profile photo</span>
              </div>
            )}
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          <Reveal>
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-balance">
              Organised, dependable support — built around how <em className="text-muted-foreground">you</em> work.
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-8 grid gap-6 text-lg leading-relaxed text-muted-foreground sm:grid-cols-2">
            <p>
              I'm {site.name}, a Virtual Assistant and freelance service provider. I help busy
              entrepreneurs and small teams hand off the tasks that keep them from their most
              important work.
            </p>
            <p>
              My approach is simple: understand your goals, learn your systems, communicate clearly
              and deliver on time. Every client gets the same care and attention to detail.
            </p>
          </Reveal>

          <ul className="mt-14 border-t border-border">
            {strengths.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 60}
                className="group grid gap-2 border-b border-border py-6 sm:grid-cols-12 sm:gap-6"
              >
                <span className="eyebrow sm:col-span-1 sm:pt-1.5">0{i + 1}</span>
                <h3 className="text-xl font-medium sm:col-span-4">{item.title}</h3>
                <p className="text-muted-foreground sm:col-span-7">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
