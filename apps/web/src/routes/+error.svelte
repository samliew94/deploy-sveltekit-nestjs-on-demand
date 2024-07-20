<script lang="ts">
    import { page } from "$app/stores";
</script>

<div
    class="flex flex-col justify-center items-center gap-4 h-full text-4xl p-4 uppercase text-center"
>
    <p class="text-8xl font-[700]">whoops!</p>
    <p class="">error <span class="font-[700]">{$page?.status}</span></p>
    <p class="font-[700]">{$page?.error?.message}</p>
    <div>
        <button class="btn-primary" on:click={() => window.history.back()}
            >go back</button
        >
    </div>
</div>
