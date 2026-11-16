import { z } from "zod";

/** Contact form rules — these limits match the database constraints. */
export const contactSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name must be 100 characters or fewer."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address.")
    .max(255, "Email must be 255 characters or fewer."),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(150, "Subject must be 150 characters or fewer."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be 2000 characters or fewer."),
});

export type ContactInput = z.infer<typeof contactSchema>;
