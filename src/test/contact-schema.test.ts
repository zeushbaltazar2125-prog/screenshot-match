import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

const valid = {
  full_name: "Jane Client",
  email: "jane@example.com",
  subject: "Need VA support",
  message: "Hi, I'd like help with my inbox.",
};

describe("contact form validation", () => {
  it("accepts a complete, valid message", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects an invalid email address", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("requires a name of at least 2 characters", () => {
    expect(contactSchema.safeParse({ ...valid, full_name: "J" }).success).toBe(false);
  });

  it("requires a subject of at least 3 characters", () => {
    expect(contactSchema.safeParse({ ...valid, subject: "Hi" }).success).toBe(false);
  });

  it("requires a message of at least 10 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "Too short" }).success).toBe(false);
  });

  it("rejects messages longer than 2000 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "a".repeat(2001) }).success).toBe(false);
  });
});
