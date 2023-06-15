import { authApi } from '@/apis/auth'
import { usersApi } from '@/apis/users'
import { useAccountStore } from '@/stores/account'

function useAuth() {
  const { setToken, setRToken, removeToken } = useAuthStorage()
  const { setAccount } = useAccountStore()

  // Login default
  function login(form: { email: string; password: string }) {
    const usedLogin = authApi.login({})
    const { execute, isFinished, error, data } = usedLogin

    until(isFinished)
      .toBeTruthy()
      .then(() => {
        if (!error.value) {
          setToken(data.value?.access_token)
          setRToken(data.value?.refresh_token)
          getMe().executeAPI()
        }
      })

    return { ...usedLogin, executeAPI: () => execute({ data: { ...form } }) }
  }
  // Sign up account
  function signup(form: {
    email: string
    password: string
    first_name: string
    last_name: string
  }) {
    const usedSignup = authApi.signup({})
    const { execute, isFinished, data, error } = usedSignup

    until(isFinished)
      .toBeTruthy()
      .then(() => {
        if (!error.value) {
          setToken(data.value?.access_token)
          setRToken(data.value?.refresh_token)
        }
      })

    return {
      ...usedSignup,
      executeAPI: () => execute({ data: { ...form } })
    }
  }
  // Refresh token
  function refresh(form: { refresh_token: string }) {
    const usedRefresh = authApi.refresh({})

    const { data, execute } = usedRefresh

    return {
      ...usedRefresh,
      executeAPI: async () => {
        try {
          await execute({ data: { ...form } })
          setToken(data.value.access_token)
          setRToken(data.value.refresh_token)
          return data.value.access_token
        } catch (e) {
          throw e
        }
      }
    }
  }
  // Reset password function
  function reset(form: { new_password: string; token: string }) {
    const usedRefresh = authApi.reset({})

    const { execute } = usedRefresh

    return {
      ...usedRefresh,
      executeAPI: () => execute({ data: { ...form } })
    }
  }
  // Change password function
  function changePassword(form: { password: string; new_password: string }) {
    const usedChangePwd = authApi.changePassword({})

    const { execute } = usedChangePwd

    return {
      ...usedChangePwd,
      executeAPI: () => execute({ data: { ...form } })
    }
  }
  // update profile function
  function updateProfile(form: { first_name: string; last_name: string; phone: string }) {
    const usedUpdate = usersApi.updateProfile({})

    const { execute, isFinished, data } = usedUpdate

    until(isFinished)
      .toBeTruthy()
      .then(() => {
        if (data.value) {
          getMe().executeAPI()
        }
      })

    return {
      ...usedUpdate,
      executeAPI: () => execute({ data: { ...form } })
    }
  }
  // Get profile with token
  function getMe() {
    const usedDetails = usersApi.details()
    const { isFinished, data, execute } = usedDetails

    until(isFinished)
      .toBeTruthy()
      .then(() => {
        setAccount(data.value)
      })
    return {
      ...usedDetails,
      executeAPI: () => execute()
    }
  }
  // Log out account
  function logout() {
    removeToken()
    setAccount(undefined)
  }
  // Login with google
  function loginGG(code: Ref<string>) {
    const usedLoginGG = authApi.loginGG(code.value)
    const { isFinished, execute, data, error } = usedLoginGG
    whenever(isFinished, () => {
      if (!error.value) {
        setToken(data.value.access_token)
        setRToken(data.value.refresh_token)
        console.log('😃😦😧 ~ loginGG ~ data:', data.value)
      }
    })
    return {
      ...usedLoginGG,
      executeApi: () => execute({ data: { code: code.value } })
    }
  }
  // Login with facebook
  function loginFB(code: Ref<string>) {
    const usedLoginFB = authApi.loginFB(code.value)
    const { isFinished, execute, data, error } = usedLoginFB

    whenever(isFinished, () => {
      if (!error.value) {
        setToken(data.value.access_token)
        setRToken(data.value.refresh_token)
        console.log('😃😦😧 ~ loginFB ~ data:', data.value)
      }
    })

    return {
      ...usedLoginFB,
      executeApi: () => execute({ data: { code: code.value } })
    }
  }

  return {
    login,
    signup,
    refresh,
    reset,
    changePassword,
    updateProfile,
    getMe,
    logout,
    loginGG,
    loginFB
  }
}

export default useAuth
