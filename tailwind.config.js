/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // 👈 ¡ESTA LÍNEA LE DICE A TAILWIND QUE LEA TU NAVBAR!
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}