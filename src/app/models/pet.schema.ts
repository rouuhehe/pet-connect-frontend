import { z } from 'zod';

export const PetSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1).max(100),
  species: z.string().min(1).max(50),
  breed: z.string().min(1).max(50),
  age: z.number().int().nonnegative(),
  adoptionCenterId: z.number().int().positive(),
  createdAt: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
});

export type Pet = z.infer<typeof PetSchema>;