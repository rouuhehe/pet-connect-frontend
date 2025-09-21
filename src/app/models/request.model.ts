import { z } from 'zod';

export const RequestSchema = z.object({
    id: z.uuid(),
    userId: z.uuid(),
    petId: z.uuid(),
    requestDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format"
    }),
    status: z.enum(['pending', 'approved', 'rejected']).default('pending'),
    statusDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format"
    }).optional(),
});