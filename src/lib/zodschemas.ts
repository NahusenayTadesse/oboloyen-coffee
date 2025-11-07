// lib/validation/contactMessage.ts
import { z } from 'zod';

export const contactMessageSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .max(255),
  email: z
    .email('Invalid email address')
    .max(255),
  company: z
    .string()
    .max(255)
    .optional()
    .or(z.literal('')),
  phone: z
    .string('Phone is required')
    .max(15, 'Maximum is 15 numbers'),
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters long')
    .max(255),
  message: z
    .string()
    .min(5, 'Message must be at least 5 characters long'),
});
