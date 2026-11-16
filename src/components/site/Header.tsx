import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-baseline gap-2" aria-label={`${site.name} — back to top`}>
          <span className="display text-2xl">{site.shortName}</span>
          <span className="eyebrow hidden sm:inline">VA</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Let's talk</a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] max-w-sm bg-background">
              <SheetTitle className="display text-3xl font-normal">{site.shortName}</SheetTitle>
              <nav aria-label="Mobile" className="mt-10 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-border py-4 text-lg"
                  >
                    <span className="eyebrow">0{i + 1}</span>
                    {link.label}
                  </a>
                ))}
              </nav>
              <Button asChild variant="hero" size="xl" className="mt-8 w-full">
                <a href="#contact" onClick={() => setOpen(false)}>
                  Contact me
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
