<script lang="ts">
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";

    let dialog: any;

    onMount(() => dialog?.showModal());
</script>

<dialog
    bind:this={dialog}
    class="bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur-sm outline-none rounded-md"
>
    <div class="flex flex-col justify-center items-center p-12 gap-4">
        <p class="text-gold2 text-5xl uppercase font-[700]">loading...</p>
        <Icon
            icon="mdi-light:loading"
            class="animate-spin-fast text-9xl text-gold2 "
        />
    </div>
</dialog>
