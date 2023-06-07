import en from "./locales/en";
import vi from "./locales/vi";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'vi',
  messages: {
    en,
    vi
  }
}))
