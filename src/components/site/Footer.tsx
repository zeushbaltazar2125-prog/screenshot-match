import { ArrowUp } from "lucide-react";
import { contact, navLinks, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="display text-5xl sm:text-6xl">{site.name}</p>
            <p className="mt-4 max-w-sm text-ink-muted">{site.role}. Available for remote, freelance work.</p>
            <a
              href={`mailto:${contact.email}`}
              className="link-underline mt-8 inline-block text-lg"
            >
              {contact.email}
            </a>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="eyebrow text-ink-muted">Navigate</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-underline text-ink-foreground/90 hover:text-ink-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="eyebrow text-ink-muted">Connect</p>
            <ul className="mt-5 space-y-3">
              {contact.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="link-underline text-ink-foreground/90 hover:text-ink-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-ink-border pt-8 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-ink-foreground">
            Back to top <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
