/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["Montserrat", "Poppins", "sans-serif "],
            },
            colors: {
                "primary-green": "#1AC84B",
                "primary-orange": "#FFB21A",
                "secondary-blue": "#0056FC",
                "secondary-purple": "#F700FC",
                gray: "#111112",
                gray2: "#ADAEAF",
                gray3: "#EAEAEA",
                gray4: "#F5F5F5",
                gray5: "#FDFBFA",
            },
        },
    },
    plugins: [],
};
