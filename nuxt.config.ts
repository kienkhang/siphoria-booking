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
    'nuxt-icon',
    // Nuxt Image
    '@nuxt/image',
    // Swipper
    'nuxt-swiper',
    // naive ui
    '@bg-dev/nuxt-naiveui',
    // dayjs
    'dayjs-nuxt',
    // Nuxt icons https://github.com/gitFoxCode/nuxt-icons
    'nuxt-icons'
  ],

  // ----- NAIVE UI CONFIG -------
  naiveui: {
    colorModePreference: 'light',
    themeConfig: {}
  },
  // ----- ************** -------

  image: {
    dir: 'assets/images',
    // staticFilename:''
    provider: 'vercel'
  },

  // ----- PINIA CONFIG -------
  swiper: {
    styleLang: 'css',
    modules: ['autoplay', 'pagination', 'navigation']
  },
  // ----- ************** -------

  // ----- PINIA CONFIG -------
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs']
  },
  // ----- ************** -------

  // ----- FORMKIT CONFIG -------
  formkit: {
    configFile: './formkit.config.ts'
  },
  // ----- ************** -------

  // ----- I18N CONFIG -------
  i18n: {
    locales: [{ code: 'vi' }, { code: 'en' }],
    defaultLocale: 'vi',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      fallbackLocale: 'vi',
      cookieCrossOrigin: true,
      useCookie: true,
      cookieKey: 'i18n',
      alwaysRedirect: true
    }
  },
  // ----- ************** -------
  // ----- VITE CONFIG -------
  vite: {
    vue: {
      script: {
        defineModel: true
      }
    }
  },
  // ----- ************** -------

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true
  },

  css: ['@unocss/reset/tailwind-compat.css'],

  colorMode: {
    classSuffix: ''
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
    prerender: {
      crawlLinks: false
    }
    // preset: 'vercel'
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/siphoria.svg' },
        { rel: 'apple-touch-icon', href: '/siphoria-192x192.png' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ]
    }
  },

  pwa,

  devtools: {
    enabled: true
  },

  devServer: {
    port: 3098
  },

  routeRules: {
    // '/': { ssr: true },
    '/**': { ssr: true },
    '/account/**': { ssr: false },
    '/oauth/**': { prerender: true }
  }
})
