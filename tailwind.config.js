const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: colors.orange,
      gray: '#648c7c',
      blue: '#05352d',
      white: '#bcdcb4',
      },
      screens: {
        'sm': '300px',
        'lg': '700px'
        },
      // fontFamily: {
      //   'sans': ['ui-sans-serif', 'system-ui'],
      //   'serif': ['ui-serif', 'Georgia'],
      //   'mono': ['ui-monospace', 'SFMono-Regular'],
      //   'montserrat': ['Montserrat'],
      //  },
      extend: {
        backgroundImage: theme => ({
         'hero': "url('/src/assets/hero.png')",
         'action': "url('/src/assets/action.png')",
        })
      },
  },
  variants: {
    extend: {
      translate: ['hover'],
    },
  },
  plugins: [],
}
