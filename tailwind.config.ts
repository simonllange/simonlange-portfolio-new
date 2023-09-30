module.exports = {
  purge: [
    './components/**/*.{js,jsx,ts,tsx}', 
    './app/**/*.{js,jsx,ts,tsx}', 
  ],
  darkMode: 'class', // or 'media' or 'false'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      transitionDelay: {
        '75': '75ms',
      },
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
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        cursive: ['Courgette', 'cursive']
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