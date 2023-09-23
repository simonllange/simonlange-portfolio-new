module.exports = {
  purge: [
    './components/**/*.{js,jsx,ts,tsx}', 
    './app/**/*.{js,jsx,ts,tsx}', 
  ],
  darkMode: 'class', // or 'media' or 'false'
  theme: {
    extend: {
      animation: {
        opacityIn: 'opacityIn .5s ease-in-out forwards'
      },
      keyframes: {
        opactityIn: {
          from: {
            opacity: '100%',
          },
          to: {
            opacity: '0%',
          },
        },
      },
      colors: {
        light: {
          primary: '#57a773', // Example color code for light mode primary color
          secondary: '#fe7f2d', // Example color code for light mode secondary color
          background: '#ebebeb', // Example color code for light mode background color
          text: '#333' // Example color code for light mode text color
        },
        dark: {
          primary: '#57a773', // Example color code for dark mode primary color
          secondary: '#fe7f2d', // Example color code for dark mode secondary color
          background: '#32373b', // Example color code for dark mode background color
          text: '#fff' // Example color code for dark mode text color
        },
        primary: '#57a773',
        secondary: '#fe7f2d',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      // Add other theme extensions here as needed
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      borderColor: ['dark'],
      textColor: ['dark'],
      // Add other variant extensions here as needed
    },
  },
  plugins: [],
}