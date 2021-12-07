module.exports = {
  purge: [    
    './pages/**/*.jsx',
    './components/**/*.jsx',
    './modal/**/*.jsx'
  ],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    extend: {
      divideColor: ['group-hover'],
      animation: ['motion-safe'],
      colors: {
        'main': '#2DAAE2', 
        'second': '#79D6FF'    
      }
    },    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
