/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: {'max':'390px'},
      md: {'max':'768px'},
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'custom-background': "url('https://img.freepik.com/free-vector/vegetables-realistic-composition-dark-background-with-empty-space-bunch-vegetable-slices-cuts-vector-illustration_1284-83068.jpg?w=1800&t=st=1705850613~exp=1705851213~hmac=82608b32729be2698fa80b5d390f7133aa61b655fd2ab62c51087014a8c5f7e1')",
      },
      boxShadow: {
        'nav-shadow': '0 4px 30px rgba(255, 0, 0, 0.5);',
      },
      backgroundColor: ['hover'],
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
};
