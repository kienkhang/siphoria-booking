import { useStorage } from '@vueuse/core'

const useLanguageStorage = () => {
  const locale = useStorage('language', 'vi')

  function selectLocale(l: string) {
    locale.value = l
  }
  return {
    locale,
    selectLocale
  }
}

export default useLanguageStorage
