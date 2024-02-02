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
        sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      },
      backgroundImage: theme => ({
        'gradient-yellow': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,147,15,1) 0%, rgba(255,249,91,1) 100%)',
      }),
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
        'nav-shadow': '0 4px 30px rgba(255, 255, 255, 0.8);'
      },
      /* Define hover effect for boxShadow */
      hover: {
        'nav-shadow': '0 4px 30px rgba(255, 255, 255, 0.8);'
      },
      backgroundImage: {
        'custom-image': "url('/public/pasta.png')",
       'yellow': '#f09819',
      },
      colors: {
       
        'orange': '#F88749',
        'yellow': '#FCF0BB',
        'blue': '#eaeefe',
        
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

