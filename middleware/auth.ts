import { useAccountStore } from '~/stores/account'

export default defineNuxtRouteMiddleware((to, from) => {
  const { getMe } = useAuth()
  const { isLoggedIn } = useAuthStorage()
  const { account } = storeToRefs(useAccountStore())
  // if reload or redirect to any page (logged in) but not account -> get me
  if (!!account.value === false && isLoggedIn()) {
    getMe().executeAPI()
  }
  // from catch navigate to "/" and to catch case reload
  // if need authen and not login -> goto login
  if (!isLoggedIn()) {
    return navigateTo('/')
  }
})
