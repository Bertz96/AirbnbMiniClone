/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)",
      },
      borderColor: {
        solidBlack: "1px solid black",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
