/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: '#291960',
        primaryDarker: '#221053',
        accentBlue: '#271a79',
        darkPurple: '#0e0822',
        deepIndigo: '#20166d',
      },
      backgroundImage: {
        'combined-gradient': `
          radial-gradient(circle at 20% 30%, rgba(39, 26, 121, 0.3), transparent 30%),
          radial-gradient(circle at 80% 70%, rgba(32, 22, 109, 0.3), transparent 25%),
          linear-gradient(90deg, #0e0822, #221053 20%, #291960 40%, #20166d 70%, #271a79 100%)
        `,
        'custom-gradient': 'linear-gradient(90deg, #1d1251 5%, #130a30 15%, #0e0822 30%, #0e0824 60%, #170c3a 100%)',
      },
    },
  },
  plugins: [],
}
