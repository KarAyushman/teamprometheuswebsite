/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "prom-header-font": "Anta",
    },
    cursor: {},
    extend: {
      colors: {
        promlogogray: "#OC0C0C",
        promlogogold: "#EFBF04",
      },
      boxShadow: {
        vision: "0 25px 50px 12px rgba(239 191 4 / 0.3)",
      },
    },
  },
  plugins: [],
};
