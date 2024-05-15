/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                "spin-slow": "spin 3s linear infinite"
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))"
            }
        }
    },
    plugins: []
}
