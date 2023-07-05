import { useAccountStore } from './account'

const useAuthStore = defineStore('auth__store', () => {
  const { account } = storeToRefs(useAccountStore())
  const isAuthorized = computed(() => !!account.value)

  const showAuthModal = ref(false)

  function openAuthModal() {
    if (isAuthorized.value) {
      return
    }
    showAuthModal.value = true
  }

  return {
    account,
    isAuthorized,
    showAuthModal,
    openAuthModal
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))

export { useAuthStore }
