/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "coming-soon":
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../../public/backgrounds/bg-texture2.webp')",
        "coming-soon2":
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../../public/backgrounds/bg-texture3.webp')",
      },
      backgroundPosition: {
        "coming-soon-pos": "top center",
      },
      backgroundSize: {
        "coming-soon-size": "cover",
      },
      fontSize: {
        title: "var(--title-text-size)",
        body: "var(--body-text-size)",
      },
    },
  },
  plugins: [],
};
