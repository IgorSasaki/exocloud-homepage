/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto']
      },
      fontSize: {
        '9xl': ['8rem', '1rem'],
        '8xl': ['6rem', '1rem'],
        '7xl': ['4.5rem', '1rem'],
        '6xl': ['3.75rem', '1rem'],
        '5xl': ['3rem', '3.5rem'],
        '4xl': ['2.25rem', '2.5rem'],
        '3xl': ['2rem', '2.5rem'],
        '2xl': ['1.5rem', '2rem'],
        xl: ['1.25rem', '1.75rem'],
        lg: ['1.125rem', '1.5rem'],
        base: ['1rem', '1.25rem'],
        sm: ['0.875rem', '1.25rem'],
        xs: ['0.75rem', '1rem']
      }
    },
    variants: {
      extend: {
        brightness: ['hover', 'focus']
      }
    }
  },
  plugins: []
}
