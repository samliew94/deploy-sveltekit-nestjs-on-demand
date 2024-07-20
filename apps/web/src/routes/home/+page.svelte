<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { env } from "$env/dynamic/public";
    import { io } from "socket.io-client";
    import { onDestroy, onMount } from "svelte";

    async function handleLogout() {
        fetch("/api/user/logout", {
            method: "post",
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

    onMount(() => {
        const url = env.PUBLIC_IO_URL;

        if (!url) {
            console.log("failed to connect to socket-io - no url provided");
            return;
        }

        console.log("connecting to socket-io at", url);

        socket = io(url, {
            auth: {
                token: $page.data.user?.token,
            },
        });

        socket.on("connect", () => {
            state = true;
        });

        socket.on("disconnect", (reason: any) => {
            console.log("disconnected:", reason);
            state = false;
        });

        socket.on("data", (data: any) => {
            gameData = data;
        });
    });

    onDestroy(() => {
        socket?.disconnect();
    });
</script>

<div class="flex flex-col justify-center items-center h-full p-4 gap-4">
    <div class="grid gap-2 text-center">
        <p class="text-2xl uppercase">Logged in as</p>
        <p class="text-6xl uppercase">{$page?.data?.user?.username}</p>
        <p class="text-xl">
            Use Incognito or different Chrome Profiles to play as someone else
        </p>
        <div class="grid justify-center">
            <button class="btn-primary" on:click={handleLogout}>logout</button>
        </div>
        <div
            class="flex gap-2 text-center items-center p-4 border border-gold2 rounded-md text-lg"
        >
            <p>Socket-IO state:</p>
            <p class="uppercase {state ? 'text-green1' : 'text-red1'}">
                {state ? "connected" : "disconnected"}
            </p>
        </div>
        <div
            class="grid grid-cols-2 gap-4 p-2 border border-gold2 rounded-md uppercase text-2xl"
        >
            <p>username</p>
            <p>score</p>
            {#if gameData?.users}
                {#each gameData.users || [] as user}
                    <p>{user?.username}</p>
                    <p>{user?.score}</p>
                {/each}
            {/if}
        </div>
        <div class="grid p-2 justify-center">
            <button
                on:click={() => {
                    socket?.emit("roll");
                }}
                class="btn-primary">roll</button
            >
        </div>
        <div class="grid grid-cols-3 gap-2 text-6xl text-black mb-2">
            {#each Array.from({ length: 3 }) as _, i}
                <p class="bg-gold1 pb-4">{gameData?.rolls[i] || 0}</p>
            {/each}
        </div>
    </div>
</div>
