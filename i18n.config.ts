import en from './locales/en'
import vi from './locales/vi'
import { useCookies } from '@vueuse/integrations/useCookies'

const { get } = useCookies(['i18n'])
export default defineI18nConfig(() => ({
  legacy: false,
  locale: get('i18n') || 'vi',
  messages: {
    en,
    vi
  },
  fallbackLocale: 'vi'
}))
