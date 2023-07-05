import { useAccountStore } from '~/stores/account'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  const { getMe } = useAuth()
  const { executeAPI: fetchAccount } = getMe()
  const { isLoggedIn } = useAuthStorage()
  const { isAuthorized } = storeToRefs(useAuthStore())
  // If is logged in -> fetch account
  const { openAuthModal } = useAuthStore()
  if (isLoggedIn()) {
    if (!isAuthorized.value) {
      fetchAccount()
      return
    }
  }
  // If isn't logged in and from is not account guard -> navigato('/')
  else if (
    !isAuthorized.value &&
    ['cart', 'account', 'checkout'].some((path) => to.fullPath.includes(path))
  ) {
    openAuthModal()
    return navigateTo('/')
  }
})
