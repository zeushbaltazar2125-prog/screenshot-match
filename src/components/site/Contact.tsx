import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { contact } from "@/content/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Status = { kind: "idle" } | { kind: "success"; name: string } | { kind: "error"; message: string };

export function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { full_name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: ContactInput) => {
    setStatus({ kind: "idle" });
    const { error } = await supabase.from("contact_messages").insert(values);
    if (error) {
      setStatus({
        kind: "error",
        message: `Your message couldn't be sent right now. Please try again, or email me directly at ${contact.email}.`,
      });
      return;
    }
    setStatus({ kind: "success", name: values.full_name.split(" ")[0] });
    reset();
  };

  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          label="Contact"
          title={
            <>
              Let's work <em className="text-muted-foreground">together.</em>
            </>
          }
          intro="Tell me a little about your business and what you need help with. I'll get back to you as soon as I can."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Reach me directly</p>
            <ul className="mt-5 border-t border-border">
              {contact.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between gap-4 border-b border-border py-5 transition-colors hover:bg-muted/60"
                  >
                    <span>
                      <span className="eyebrow block">{link.label}</span>
                      <span className="mt-1 block break-all text-base">{link.value}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-8">
            <div className="rounded-lg border border-border bg-card p-6 shadow-soft sm:p-10">
              {status.kind === "success" ? (
                <div role="status" className="flex flex-col items-start py-10">
                  <CheckCircle2 className="h-10 w-10" strokeWidth={1.4} aria-hidden />
                  <h3 className="display mt-6 text-4xl">Thank you, {status.name}.</h3>
                  <p className="mt-4 max-w-md text-muted-foreground">
                    Your message has been received. I'll review it and reply to the email address you
                    provided.
                  </p>
                  <Button variant="ink" size="lg" className="mt-8" onClick={() => setStatus({ kind: "idle" })}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-6 sm:grid-cols-2">
                  <Field id="full_name" label="Full name" error={errors.full_name?.message}>
                    <Input
                      id="full_name"
                      autoComplete="name"
                      placeholder="Your full name"
                      aria-invalid={!!errors.full_name}
                      aria-describedby={errors.full_name ? "full_name-error" : undefined}
                      className="h-12"
                      {...register("full_name")}
                    />
                  </Field>
                  <Field id="email" label="Email address" error={errors.email?.message}>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className="h-12"
                      {...register("email")}
                    />
                  </Field>
                  <Field id="subject" label="Subject" error={errors.subject?.message} className="sm:col-span-2">
                    <Input
                      id="subject"
                      placeholder="What can I help you with?"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      className="h-12"
                      {...register("subject")}
                    />
                  </Field>
                  <Field id="message" label="Message" error={errors.message?.message} className="sm:col-span-2">
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="A few details about your business, the tasks you need help with, and your timeline."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      {...register("message")}
                    />
                  </Field>

                  {status.kind === "error" ? (
                    <p role="alert" className="text-sm text-destructive sm:col-span-2">
                      {status.message}
                    </p>
                  ) : null}

                  <div className="flex flex-col-reverse items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">All fields are required.</p>
                    <Button type="submit" variant="hero" size="xl" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          Send message <ArrowRight />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="eyebrow mb-2.5 block text-foreground">
        {label}
      </Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
