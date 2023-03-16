/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fill-16': 'repeat(auto-fill, minmax(4rem, 1fr))',
        'fill-20': 'repeat(auto-fill, minmax(5rem, 1fr))',
        // etc.
      },
    },
    screens: {
      xm: '400px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '1xl': '1361px',
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      max_Xll: { max: '1360px' },
      max_xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      max_lg: { max: '1047px' },
      // => @media (max-width: 1023px) { ... }

      max_md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      max_sm: { max: '692px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}
