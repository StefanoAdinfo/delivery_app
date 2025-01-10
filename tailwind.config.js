/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app//*.{js,jsx,ts,tsx}", "./components//*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins-Regular", "sans-serif"],
        "poppins-bold": ["Poppins-Bold", "sans-serif"],
        "poppins-extrabold": ["Poppins-ExtraBold", "sans-serif"],
        "poppins-medium": ["Poppins-Medium", "sans-serif"],
        "poppins-semibold": ["Poppins-SemiBold", "sans-serif"],
        "poppins-light": ["Poppins-Light", "sans-serif"],
      },
      colors: {
        primary: "#f52s56",
        secondary: "FF9500",
        icons: "DAD9E2",
        background: "#F5F5F5",
        headline: "#C1C0C9",
        body: "#262628",
        subtitle: "#9B9B9B",
      },
    },
  },
  plugins: [],
};
