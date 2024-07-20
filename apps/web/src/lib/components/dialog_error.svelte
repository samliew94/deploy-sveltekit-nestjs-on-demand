<script lang="ts">
    import { onMount } from "svelte";

    let dialog: any;
    export let error = "";

    onMount(() => dialog?.showModal());
</script>

<dialog
    bind:this={dialog}
    class="backdrop:bg-black/35 backdrop:bg-blur-sm outline-none rounded-md"
>
    <div
        class="flex flex-col justify-center items-center p-4 gap-4 bg-gold3 rounded-md text-center"
    >
        <p class="font-[700] text-4xl text-white uppercase">{error}</p>
        <div>
            <button on:click={() => dialog.close()} class="btn-primary"
                >close</button
            >
        </div>
    </div>
</dialog>
