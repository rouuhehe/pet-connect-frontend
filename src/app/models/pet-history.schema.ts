import { z } from "zod";

const HistoryEventSchema = z.object({
  date: z.iso.datetime(),
  event: z.string(),
});

const ImageSchema = z.string().url();

const MetaSchema = z.object({
  weight: z.number().optional(),
  notes: z.string().optional(),
});

export const PetHistorySchema = z.object({
  id: z.uuid(),
  petId: z.uuid(),
  history: z.array(HistoryEventSchema),
  images: z.array(ImageSchema).optional(),
  details: z.string().optional(),
  userId: z.uuid(),
  meta: MetaSchema.optional(),
});

export type PetHistory = z.infer<typeof PetHistorySchema>;
