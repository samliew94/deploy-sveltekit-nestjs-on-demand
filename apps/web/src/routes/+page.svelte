<script>
    import { goto } from "$app/navigation";
</script>

<div
    class="grid justify-center items-center h-full p-4 gap-4 md:gap-12 text-lg md:text-3xl text-center overflow-y-auto"
>
    <p>This web app is built with SvelteKit-Typescript</p>
    <p>Notable packages used:</p>
    <div class="flex flex-col gap-4 p-4 justify-center text-base md:text-2xl">
        <p>1. SvelteKit Superforms + Zod</p>
        <p>2. Tailwind</p>
        <p>3. Iconify</p>
    </div>
    <p>This web app is deployed as a NodeJS Docker Container in Cloud.</p>
    <p>
        This web app also communicates with a NestJS app (also executed as a
        Docker Container).
    </p>
    <p>Click here to see it in action:</p>
    <div class="grid justify-center">
        <button class="btn-primary" on:click={() => goto("/login")}>
            start
        </button>
    </div>
</div>
