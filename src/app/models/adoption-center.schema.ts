import { z } from "zod";

export const AdoptionCenterSchema = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  city: z.string(),
  lat: z.number(),
  lon: z.number(),
});

export type AdoptionCenter = z.infer<typeof AdoptionCenterSchema>;
