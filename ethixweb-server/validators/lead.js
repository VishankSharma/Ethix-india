import { z } from 'zod';

export const EnquirySchema = z.object({
  name: z.string().trim().min(2, 'Name is too short').max(80),
  email: z.string().trim().toLowerCase().email('Invalid email').max(120),
  phone: z.string().trim().regex(/^(\+91[- ]?)?[6-9]\d{9}$/, 'Enter a valid Indian mobile number'),
  company: z.string().trim().max(120).optional().or(z.literal('')),
  service: z.enum(['web', 'mobile', 'seo', 'branding', 'other']),
  budget: z.enum(['<50k', '50k-1L', '1L-5L', '5L+', 'unsure']),
  message: z.string().trim().min(10, 'Tell us a bit more').max(2000),
  website: z.string().max(0).optional().or(z.literal('')),
  renderedAt: z.coerce.number(),
});

export const LoginSchema = z.object({
  password: z.string().min(1, 'Password is required'),
});

export const LeadUpdateSchema = z.object({
  status: z.enum(['new', 'contacted', 'won', 'lost']).optional(),
  notes: z.string().max(2000).optional(),
});