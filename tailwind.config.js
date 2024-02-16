/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#5570F1",
        "primary-white": "#FFCC9133",
        "primary-yellow": "#E1BA3C",
        "primary-black": "#53545C",
        "primary-grey": "#5E63661A",
        "primary-red": "#CC5F5F",
      },
    },
  },
  plugins: [],
};
