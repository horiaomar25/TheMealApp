module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: {'max':'390px'},
      md: {'max':'768px'},
      lg: '976px',
      xl: '1440px',
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
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        'nav-shadow': '0 4px 30px rgba(117, 231, 164, 0.5);'
      },
      /* Define hover effect for boxShadow */
      hover: {
        'nav-shadow': '0 4px 30px rgba(117, 231, 164, 0.8);'
      },
      backgroundImage: {
        'custom-image': "url('/public/pasta.png')",
       
      },
      colors: {
        'pink': '#F2D4E0',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

