const formKitTailwind = require('@formkit/themes/tailwindcss')

export default {
  // add the formkit.config.js file
  content: ['./src/**/*.{html,vue,js}', './formkit.config.ts'],
  theme: {
    extend: {
      colors: {
        crayola: '#1BBA85',
        'green-cyan': '#0D986A',
        vivid: '#FF9900',
        x11: '#A9A9A9',
        cultured: '#F3F5F6',
        platinum: '#E5E5E5',
        'ghost-white': '#f7f9fb',
        'eerie-black': '#1f1f1f',
        alabaster: '#efe8e8',
        metal: '#71787E'
      },
      boxShadow: {
        input: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        bar: '0px 0px 10px rgba(100, 124, 159, 0.25)',
        card: '0px 24px 34px rgba(80, 79, 89, 0.14)',
        search: '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
        room: '0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15);'
      }
    }
  },
  plugins: [formKitTailwind]
}
