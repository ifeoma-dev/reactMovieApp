/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
      screens: {
        '3xs': '250px',
  
        '2xs': '340px',
  
        'xs': '400px',
  
        'xs.5': '500px',
        
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'max-sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      extend: {
        colors: {
          // black: '#191624',
        },
        animation: {
          slideup: 'slideup 1s ease-in-out',
          slideupMI: 'slideupMI .3s ease-in-out',
          slidedown: 'slidedown 1s ease-in-out',
          slideleft: 'slideleft 1s ease-in-out',
          slideright: 'slideright 1s ease-in-out',
          wave: 'wave 1.2s linear infinite',
          slowfade: 'slowfade 2.2s ease-in-out',
        },
        keyframes: {
          slowfade: {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
          slideup: {
            from: { opacity: 0, transform: 'translateY(25%)' },
            to: { opacity: 1, transform: 'none' },
          },
          slideupMI: {
            '0%': { opacity: 0, transform: 'translateY(8%)' },
            '100%': { opacity: 1, transform: 'none' },
          },
          slidedown: {
            from: { opacity: 0, transform: 'translateY(-25%)' },
            to: { opacity: 1, transform: 'none' },
          },
          slideleft: {
            from: { opacity: 0, transform: 'translateX(-20px)' },
            to: { opacity: 1, transform: 'translateX(0)' },
          },
          slideright: {
            from: { opacity: 0, transform: 'translateX(20px)' },
            to: { opacity: 1, transform: 'translateX(0)' },
          },
          wave: {
            '0%': { transform: 'scale(0)' },
            '50%': { transform: 'scale(1)' },
            '100%': { transform: 'scale(0)' },
          },
        }
      },
    },
    plugins: [
      require('tailwind-scrollbar')
    ],
  }
  