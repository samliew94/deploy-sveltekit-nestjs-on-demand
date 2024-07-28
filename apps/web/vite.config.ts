import { sveltekit } from "@sveltejs/kit/vite";
import fs from "fs";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        https: {
            key: fs.readFileSync(`C:/Users/UF-Sam.Liew/self-ssl/private.key`),
            cert: fs.readFileSync(
                `C:/Users/UF-Sam.Liew/self-ssl/certificate.crt`
            ),
        },
        proxy: {},
    },
});
