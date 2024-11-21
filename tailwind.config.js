// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex-sans)', ...fontFamily.sans],
        ibmPlexMono: ['IBM Plex Mono', 'monospace'],
        ibmPlexSans: ['var(--font-ibm-plex-sans)'],
        adventure: ['Adventure', 'sans-serif'],
      },
      colors: {
        primary: colors.green,
        gray: colors.gray,
      },
      keyframes: {
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.1)', rotate: '0deg' },
          '100%': { opacity: '1', transform: 'scale(1)', rotate: '45deg' },
        },
      },
      animation: {
        'pop-in': 'pop-in 0.3s ease-out forwards',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.600'),
              '&:hover': {
                color: `${theme('colors.primary.700')}`,
              },
              code: { color: theme('colors.primary.500') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
            h6: {
              fontFamily: 'Patrick Hand, cursive',
              fontWeight: '400',
              fontStyle: 'normal',
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
