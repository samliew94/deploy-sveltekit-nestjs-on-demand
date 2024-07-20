import { z } from "zod";

export default z.object({
    username: z
        .string()
        .min(3, { message: "Username must be at least 3 characters long" })
        .max(10, { message: "Username must be at most 10 characters long" })
        .regex(/^[a-zA-Z0-9]+$/, {
            message: "Username can only contain letters and numbers",
        })
        .transform((x) => x.toUpperCase()),
    password: z
        .string()
        .min(3, { message: "Password must be at least 3 characters long" })
        .max(10, { message: "Password must be at most 10 characters long" })
        .regex(/^[a-zA-Z0-9]+$/, {
            message: "Password can only contain letters and numbers",
        }),
});
