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
      vivid: '#FF9900',
      x11: '#A9A9A9',
      cultured: '#F3F5F6'
    },
    boxShadow: {
      input: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    }
  },

  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      autoInstall: false,
      mode: 'background-img',
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
