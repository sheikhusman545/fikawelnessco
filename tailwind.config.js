/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5efef',
          100: '#f5efef',
          200: '#f5efef',
          300: '#c6b9b9',
          400: '#c6b9b9',
          500: '#c6b9b9',
          600: '#c6b9b9',
          700: '#463939',
          800: '#463939',
          900: '#301d1d',
        },
        secondary: {
          50: '#eff1f5',
          100: '#eff1f5',
          200: '#eff1f5',
          300: '#acb9d2',
          400: '#acb9d2',
          500: '#acb9d2',
          600: '#acb9d2',
          700: '#2d3953',
          800: '#2d3953',
          900: '#1d2330',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

