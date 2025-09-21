import { z } from "zod";



export const AdoptionStatusSchema = z.object({
  id: z.uuid(),
  petId: z.uuid(),
  status: z.enum(["available", "in_progress", "adopted"]),
  updatedAt: z.iso.datetime(),
});

export type AdoptionStatus = z.infer<typeof AdoptionStatusSchema>;
