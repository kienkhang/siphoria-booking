import { useStorage } from '@vueuse/core'

const useLanguageStorage = () => {
  const locale = useStorage('language', 'vi')
  return {
    locale
  }
}

export default useLanguageStorage
