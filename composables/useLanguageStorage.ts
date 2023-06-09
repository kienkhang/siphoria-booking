function useLanguageStorage() {
  // Destruct locale from i18n
  const { locale: language, getLocaleCookie, setLocaleCookie, setLocale } = useI18n()
  // Cookie locale value
  const cookieLanguage = getLocaleCookie()
  // Define FormKitLanguage
  interface FormKitLanguage {
    locale: string
    [key: string]: any
  }
  // Inject Formkit change locale
  const formKitLanguage = inject<FormKitLanguage>(Symbol.for('FormKitConfig'))

  function selectLanguage(lang: string) {
    // Switch local locale
    setLocale(lang)
    // Switch cookie locale
    setLocaleCookie(lang)
    // Switch formkit locale
    if (formKitLanguage) formKitLanguage.locale = lang
  }

  // If website not having locale in cookie -> set default to VietNam
  onMounted(() => {
    if (!cookieLanguage) selectLanguage('vi')
  })

  return {
    language,
    cookieLanguage,
    formKitLanguage,
    selectLanguage
  }
}

export default useLanguageStorage
