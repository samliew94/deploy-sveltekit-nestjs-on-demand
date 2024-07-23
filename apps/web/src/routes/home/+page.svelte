<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { onDestroy, onMount } from "svelte";

    async function handleLogout() {
        fetch("/api/user/logout", {
            method: "post",
            credentials: "include",
        })
            .then((res) => {
                if (res.ok) {
                    goto("/login");
                }
            })
            .catch((error: any) => {
                console.log("failed to logout", error?.message);
            });
    }

    let state = false;
    let gameData: any;

    let socket: any;

    onMount(() => {});

    onDestroy(() => {
        socket?.disconnect();
    });
</script>

<div class="flex flex-col justify-center items-center h-full p-4 gap-4">
    <div class="grid gap-2 text-center">
        <p class="text-2xl uppercase">Logged in as</p>
        <p class="text-6xl uppercase">{$page?.data?.user?.username}</p>

        <div class="grid justify-center">
            <button class="btn-primary" on:click={handleLogout}>logout</button>
        </div>
    </div>
</div>
