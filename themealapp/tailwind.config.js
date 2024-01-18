/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'custom-background': "url('https://img.freepik.com/free-vector/fast-food-icon-set_1284-12808.jpg?w=1060&t=st=1705597285~exp=1705597885~hmac=5f2dd106377632dc9ec4c263b42d1f47d8a15a4b5155d8b12d1ad7cd61de5d4d')",
      }
    },
  },
  plugins: [],
};
