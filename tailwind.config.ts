import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    after: {
      content: "",
      display: "block",
      height: "1px",
      width: "100%",
      backgroundColor: "#567B95",
      margin: "1rem 0",
    },
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
