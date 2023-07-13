import { useAccountStore } from '~/stores/account'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  // Online composables
  const isOnline = useOnline()
  // Authen
  const { getMe } = useAuth()
  const { executeAPI: fetchAccount } = getMe()
  const { isLoggedIn } = useAuthStorage()
  const { isAuthorized } = storeToRefs(useAuthStore())
  // If is logged in -> fetch account
  if (isLoggedIn() && isOnline.value) {
    if (!isAuthorized.value) {
      fetchAccount()
      return
    }
  }
  // If isn't logged in and from is not account guard -> navigato('/')
  else if (
    isOnline.value &&
    !isAuthorized.value &&
    ['cart', 'account', 'checkout'].some((path) => to.fullPath.includes(path))
  ) {
    return navigateTo('/')
  }
})
