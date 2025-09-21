import { z } from "zod";

export const VaccineSchema = z.object({
  id: z.number(),
  petId: z.number(),
  type: z.string(), 
  date: z.iso.datetime(), 
});

export type Vaccine = z.infer<typeof VaccineSchema>;
