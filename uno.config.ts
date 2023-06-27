import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

import extractorPug from '@unocss/extractor-pug'

import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  theme: {
    colors: {
      crayola: '#1BBA85',
      'green-cyan': '#0D986A',
      vivid: '#FF9900',
      x11: '#A9A9A9',
      cultured: '#F3F5F6',
      platinum: '#E5E5E5',
      'ghost-white': '#FBF9F7',
      'eerie-black': '#1f1f1f'
    },
    boxShadow: {
      input: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      bar: '0px 0px 10px rgba(100, 124, 159, 0.25)',
      card: '0px 24px 34px rgba(80, 79, 89, 0.14)'
    }
  },

  presets: [
    presetUno(),
    presetIcons({
      // scale: 1.2,
      autoInstall: false,
      // mode: 'background-img',
      collections: {
        custom: FileSystemIconLoader('./assets/icons', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      }
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        sans: 'Manrope:400,500,600,700'
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],

  extractors: [extractorPug()]
})
