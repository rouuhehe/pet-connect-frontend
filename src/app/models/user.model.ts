import { z } from 'zod';

export const UserSchema = z.object({
    id: z.uuid(),
    name: z.string().min(1, "Name is required"),
    age: z.number().min(0, "Age must be a positive number"),
    city: z.string().min(1, "City is required"),
    email: z.email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    password: z.string().min(6, "Password must be at least 6 characters long")
});