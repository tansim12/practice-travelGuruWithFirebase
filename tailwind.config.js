/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F9A51A",

          secondary: "#18bc31",

          accent: "#eae385",

          neutral: "#2a273f",

          "base-100": "#f3eef6",

          info: "#369dd9",

          success: "#3acf8a",

          warning: "#b97004",

          error: "#fa5c81",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
