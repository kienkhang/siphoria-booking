import { authApi } from '@/apis/auth'
import { usersApi } from '@/apis/users'
import { useAccountStore } from '@/stores/account'

function useAuth() {
  const { setToken, setRToken, removeToken } = useAuthStorage()
  const { setAccount } = useAccountStore()
  const login = (form: { email: string; password: string }) => {
    const usedLogin = authApi.login({})
    const { execute, isFinished, data } = usedLogin

    until(isFinished)
      .toBeTruthy()
      .then(() => {
        setToken(data.value?.access_token)
        setRToken(data.value?.refresh_token)
      })

    return { ...usedLogin, executeAPI: () => execute({ data: { ...form } }) }
  }
  const signup = (form: {
    email: string
    password: string
    first_name: string
    last_name: string
  }) => {
    const usedSignup = authApi.signup({})
    const { execute, isFinished, data } = usedSignup

    until(isFinished)
      .toBeTruthy()
      .then(() => {
        setToken(data.value?.access_token)
        setRToken(data.value?.refresh_token)
      })

    return {
      ...usedSignup,
      executeAPI: () => execute({ data: { form } })
    }
  }
  const refresh = (form: { refresh_token: string }) => {
    const usedRefresh = authApi.refresh({})

    const { isFinished, data, execute } = usedRefresh

    until(isFinished)
      .toBeTruthy()
      .then(() => {
        if (data.value) {
          setToken(data.value?.access_token)
          setRToken(data.value?.refresh_token)
        }
      })
    return {
      ...usedRefresh,
      executeAPI: () => execute({ data: { ...form } })
    }
  }

  const reset = (form: { new_password: string; token: string }) => {
    const usedRefresh = authApi.reset({})

    const { execute } = usedRefresh

    return {
      ...usedRefresh,
      executeAPI: () => execute({ data: { ...form } })
    }
  }
  const getMe = () => {
    const usedDetails = usersApi.details()
    const { isFinished, data, execute } = usedDetails

    until(isFinished)
      .toBeTruthy()
      .then(() => {
        console.log('😃😦😧 ~ getMe ~ data:', data.value)
        setAccount(data.value)
      })
    return {
      ...usedDetails,
      executeAPI: () => execute()
    }
  }
  const logout = () => {
    removeToken()
    setAccount(undefined)
  }
  const loginGG = (code: Ref<string>) => {
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
  const loginFB = (code: Ref<string>) => {
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
    getMe,
    logout,
    loginGG,
    loginFB
  }
}

export default useAuth
