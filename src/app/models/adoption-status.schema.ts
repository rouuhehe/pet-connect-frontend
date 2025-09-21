import { z } from "zod";

export const AdoptionStatusSchema = z.object({
  id: z.number(),
  petId: z.number(),
  status: z.enum(["available", "in_progress", "adopted"]),
  updatedAt: z.iso.datetime(),
});

export type AdoptionStatus = z.infer<typeof AdoptionStatusSchema>;
