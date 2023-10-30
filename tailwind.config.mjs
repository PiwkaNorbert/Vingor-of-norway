/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}"],
  theme: {
    extend: {
      width: {
        custom: "min(90vw, 1400px)",
      },
    },
  },
  plugins: [],
};
