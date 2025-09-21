import { z } from "zod";

export const VaccineSchema = z.object({
  id: z.uuid(),
  petId: z.uuid(),
  type: z.string(), 
  date: z.iso.datetime(), 
});

export type Vaccine = z.infer<typeof VaccineSchema>;
