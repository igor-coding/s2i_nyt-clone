import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        xxs: "0.675rem",
      },
      colors: {
        accent: "#567B95",
        accentHover: "#326891",
      },
    },
  },
  plugins: [],
} satisfies Config;
