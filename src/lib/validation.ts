import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  subject: z.string().min(2, "Please select or enter a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website_honeypot: z.string().max(0, "Spam detected").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
