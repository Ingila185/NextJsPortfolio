import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme:
  {
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
      screens: {
        'xs': { 'raw': '(max-width: 630px)' },
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          
          '100%': {
            width: '100%'
          },
        },
        blink: {
          '50%': {
            borderColor: 'gray',
          },
          '100%': {
            borderColor: 'grey',
          },
        },
      wave: 
      {
        '0% ' : { transform: 'rotate( 0.0deg)' },
        '10%' : { transform: 'rotate(14.0deg)' },  /* The following five values can be played with to make the waving more or less extreme */
        '20%' : { transform: 'rotate(-8.0deg)' },
        '30%': { transform: 'rotate(14.0deg)' },
        '40%' :  { transform: 'rotate(-4.0deg)' },
        '50%': { transform: 'rotate(10.0deg)' },
        '60%': { transform: 'rotate( 0.0deg)' },  /* Reset for the last half to pause */
       '100%' : { transform: 'rotate( 0.0deg)' }
      },
      shine: {
        "100%": { left: "125%" },
      },
      
      },
      animation: {
        typing: 'typing 3s steps(26) infinite alternate, blink .5 linear alternate',
        wave: 'wave 2s linear infinite',
        shine: "shine 1s"
      },
    },
  
  },
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx'],
  }
}
export default config
