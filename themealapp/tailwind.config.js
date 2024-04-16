

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "node_modules/daisyui/daisyui/**/*.{js.jsx,ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      boxShadow: {
        "nav-shadow": "0 4px 30px rgba(248, 135, 73, 0.5);",
      },
      hover: {
        "nav-shadow": "0 4px 30px rgba(248, 135, 73, 0.8);",
      },
      backgroundImage: {
        "custom-image": "url('/public/pasta.png')",
        yellow: "#f09819",
      },
      colors: {
        orange: "#F88749",
        yellow: "#FCF0BB",
        blue: "#eaeefe",
      },
    },
  },
  daisyui: {
    themes: [],
  }, // This closing brace was missing in the previous response
  plugins: [require("daisyui")],
};

