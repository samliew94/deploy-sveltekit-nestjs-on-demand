/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                gold1: "#FFD900",
                gold2: "#D5BA23",
                gold3: "#AA9939",
                gold4: "#807640",
                gold5: "#555139",
                gold6: "#33322B",
                red1: "#FF1800",
                green1: "#00FF77",
            },
            screens: {
                sm: "425px",
                md: "768px",
                lg: "1024px",
                xl: "1440px",
                "2xl": "2560px",
            },
            animation: {
                "spin-fast": "spin 0.5s linear infinite",
            },
        },
    },
    plugins: [],
};
