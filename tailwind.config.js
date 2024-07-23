/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'tw-bg-red-700': 'rgba(193, 49, 0, 1)'
      },
      fontSize: {
        header: '75px',
      },
      aspectRatio: {
        'hardathon-card': '12 / 10',
      },
      borderRadius: {
        '7xl': 56,
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

