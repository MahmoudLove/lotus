/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'cards-grid-parent':
          'grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr))',
      },
    },
  },
  plugins: [],
};
