/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { 50:'#eefbff',100:'#d9f5ff',200:'#bcecff',300:'#8adfff',400:'#4bc9f5',500:'#20acd5',600:'#098aaf',700:'#08708e',800:'#0c5d75',900:'#104d61' },
        navy: '#092f49'
      },
      fontFamily: { sans:['DM Sans','sans-serif'], display:['Manrope','sans-serif'] },
      boxShadow: { soft:'0 16px 50px rgba(8,112,142,.10)' }
    }
  },
  plugins: []
}
