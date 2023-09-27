import { z } from "zod"

export const validationSchema = z.object({
    Email: z.string({
        required_error: "Email is required",
    }),
});