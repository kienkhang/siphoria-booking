const formKitTailwind = require('@formkit/themes/tailwindcss')

export default {
  // add the formkit.config.js file
  content: ['./src/**/*.{html,vue,js}', './formkit.config.ts'],
  theme: {
    extend: {
      colors: {
        crayola: '#1BBA85',
        vivid: '#FF9900',
        x11: '#A9A9A9',
        cultured: '#F3F5F6'
      },
      boxShadow: {
        input: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        bar: '0px 0px 10px rgba(100, 124, 159, 0.25)'
      }
    }
  },
  plugins: [formKitTailwind]
}
