/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,jsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        customTeal: "#0CDAB3", // customTeal)
      },
      
      fontFamily: {
        benz: ['"Benz Grotesk"', 'sans-serif'],
        helvetica: ['"Helvetica Neue LT Pro"', 'serif'],
      },
      fontWeight: {
        '850': '850',  // Adding custom font weight
      },
      backgroundImage: {
        'custom-navbar': "url('/background.png')",
      },
      screens: {
        ssm: '400px', // This applies to screens 400px and wider
      },
    },
  },
  plugins: [],
}

