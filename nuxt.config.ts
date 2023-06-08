import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

export default defineNuxtConfig({
  modules: [
    // VueUse
    '@vueuse/nuxt',
    // UnoCss
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    // Pinia
    '@pinia/nuxt',
    // PWA
    '@vite-pwa/nuxt',
    // NuxtLab UI
    '@nuxthq/ui',
    // FormKit
    '@formkit/nuxt',
    // I18N
    '@nuxtjs/i18n',
    // Icon
    'nuxt-icon'
  ],


  // ----- FORMKIT CONFIG -------
  formkit: {
    configFile: './formkit.config.ts'
  },
  // ----- ************** -------

  // ----- I18N CONFIG -------
  i18n: {
    locales: ['vi', 'en'],
    strategy: 'prefix_except_default',
    defaultLocale: 'vi',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n',
      alwaysRedirect: true
    }
  },
  // ----- ************** -------


  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  pwa,

  devtools: {
    enabled: true,
  },

  devServer: {
    port: 3098
  }
})
