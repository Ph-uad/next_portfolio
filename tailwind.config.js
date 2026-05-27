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
        "chat-bot":
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../../public/backgrounds/chat-bot.webp')",
        "folders":
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../../public/backgrounds/folders.webp')",
        "staining-canvas":
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../../public/backgrounds/staining-canvas.webp')",

        "card-experience":
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../../public/img/cards/hands.jpg')",
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
