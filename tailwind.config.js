/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // eslint-disable-next-line quotes
        'libre-baskerville': ["'Libre Baskerville'", 'serif'],
      },
      colors: {
        red: '#e21818',
        dark: '#1a1c1e',
        light: '#eee',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(60px)', display: 'none' },
          '100%': { transform: 'translateY(0)', display: 'flex' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-60px)', display: 'none' },
          '100%': { transform: 'translateY(0)', display: 'flex' },
        },
        slideRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(10px)' },
        },
        // underline: {
        //   '0%': {
        //     backgroundImage: 'linear-gradient(#e21818, #e21818)',
        //     backgroundSize: '0% 0.1em',
        //     backgroundPosition: '0 100%',
        //     backgroundRepeat: 'no-repeat',
        //     transition: 'background-size 0.5s ease-in-out',
        //   },
        //   '100%': { backgroundSize: '100% 0.1em', backgroundPosition: '0 100%' },
        // },
      },
      animation: {
        slideUp: 'slideUp 0.4s ease-in-out',
        slideDown: 'slideDown 0.4s ease-in-out',
        slideRight: 'slideRight 0.4s ease forwards',
        // underline: 'underline 1s ease forwards',
      },
    },
    screens: {
      xs: '480px',
      sm: '800px',
      md: '1024px',
      lg: '1200px',
      xl: '1440px',
    },
  },
  plugins: [],
};
