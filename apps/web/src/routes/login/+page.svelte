<script lang="ts">
    import { goto } from "$app/navigation";
    import DialogError from "$lib/components/dialog_error.svelte";
    import Loading from "$lib/components/loading.svelte";
    import Success from "$lib/components/success.svelte";
    import { superForm } from "sveltekit-superforms";

    export let data;

    // Client API:
    const { form, errors, message, delayed, enhance } = superForm(data.form, {
        resetForm: false,
    });
</script>

{#if $delayed}
    <Loading />
{:else if $message?.error}
    <DialogError error={$message.error} />
{:else if $message?.success}
    <Success callback={() => goto("/home")} />
{/if}

<form
    method="POST"
    class="flex flex-col justify-center items-center p-4 h-full gap-4"
    use:enhance
>
    <p class="uppercase text-6xl font-[700]">login</p>
    <p class="text-3xl text-center">enter any user:pass</p>
    <label>
        {#if $errors?.username}
            {#each $errors.username as err}
                <p class="text-red1 font-[500] text-lg">{err}</p>
            {/each}
        {/if}
        <p class="uppercase text-4xl">
            username<span class="text-red1">*</span>
        </p>
        <input
            class="cinput md:text-4xl uppercase"
            type="text"
            name="username"
            bind:value={$form.username}
        />
    </label>
    <label>
        {#if $errors?.password}
            {#each $errors.password as err}
                <p class="text-red1 font-[500] text-lg">{err}</p>
            {/each}
        {/if}
        <p class="uppercase text-4xl">
            password<span class="text-red1">*</span>
        </p>
        <input
            class="cinput md:text-4xl"
            type="password"
            name="password"
            bind:value={$form.password}
        />
    </label>
    <div>
        <button class="btn-primary">submit</button>
    </div>
</form>
