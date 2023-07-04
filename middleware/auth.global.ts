import { useAccountStore } from '~/stores/account'

export default defineNuxtRouteMiddleware((to, from) => {
  const { getMe } = useAuth()
  const { executeAPI: fetchAccount } = getMe()
  const { isLoggedIn } = useAuthStorage()
  const { account } = storeToRefs(useAccountStore())

  // If is logged in -> fetch account
  if (isLoggedIn()) {
    if (!account.value) {
      fetchAccount()
      return
    }
  }
  // If isn't logged in and from is not account guard -> navigato('/')
  else if (
    !isLoggedIn() &&
    !account.value &&
    ['cart', 'account', 'checkout'].some((path) => to.fullPath.includes(path))
  ) {
    return navigateTo('/')
  }
})
