module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            Poppains: ["Poppins", "sans-seri"],
        },
        fontSize: {
            xxs: ".65rem",
            xs: ".75rem",
            sm: ".875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.75rem",
            "7xl": "4.5rem",
            "main-title": "4.7rem",
            title: "2.5rem",
            pera: "1.31rem",
        },
        extend: {
            colors: {
                primary: "#3475f0",
                primary_dark: "#1652F0",
                primary_bg: "#337dff",
                lite_primary_bg: "#e9f6ff",
                btn_green: "#2cb269",
            },
        },
    },
    plugins: [],
};
