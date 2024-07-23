<script>
    import { goto } from "$app/navigation";
</script>

<div
    class="grid justify-center items-center h-full p-4 gap-4 md:gap-12 text-lg md:text-3xl text-center overflow-y-auto"
>
    <p>Built with SvelteKit-TS</p>
    <p>This web app is deployed as a NodeJS Docker Container in Cloud.</p>
    <p>Click here to see it in action:</p>
    <div class="grid justify-center">
        <button class="btn-primary" on:click={() => goto("/login")}>
            start
        </button>
    </div>
</div>
