<script>
    import Icon from "@iconify/svelte";
    import "../app.css";
</script>

<div class="grid grid-rows-[5%_90%_5%] h-screen">
    <div class="bg-gold3">
        <div
            class="flex justify-center items-center h-full text-xl md:text-2xl lg:text-4xl text-center"
        >
            <p>Developed by Sam Liew for Learning Purposes</p>
        </div>
    </div>
    <div class="bg-gold6">
        <slot />
    </div>
    <div class="bg-gold3">
        <div
            class="flex justify-center items-center h-full gap-4 text-white text-xl md:text-2xl lg:text-4xl"
        >
            <p class="">Social Medias:</p>
            <button
                on:click={() =>
                    (window.location.href = "https://github.com/samliew94")}
            >
                <Icon icon="mdi:github" />
            </button>
            <button
                on:click={() =>
                    (window.location.href =
                        "https://www.linkedin.com/in/samliew94/")}
            >
                <Icon icon="mdi:linkedin" />
            </button>
        </div>
    </div>
</div>
