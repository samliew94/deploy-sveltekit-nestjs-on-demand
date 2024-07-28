import userZodSchema from "$lib/schemas/zod/user.zod.schema";
import { fail } from "@sveltejs/kit";
import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { login } from "../../server/auth.server.js";

export const load = async () => {
    const form = await superValidate(zod(userZodSchema));

    // Always return { form } in load functions
    return { form };
};
export const actions = {
    default: async ({ request, cookies }) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const form = await superValidate(request, zod(userZodSchema));
        console.log(form);

        if (!form.valid) {
            // Again, return { form } and things will just work.
            return fail(400, { form });
        }

        // TODO: Do something with the validated form.data
        const { username } = form.data;

        const token = login(username);
        cookies.set("token", token, {
            path: "/",
            maxAge: 31536000,
            secure: true,
        });

        // Display a success status message
        return message(form, { success: true });
    },
};
