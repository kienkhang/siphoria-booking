const path = 'auth/'
class Auth {
  login = (data: any | {}) => {
    const url = path + 'login/general'

    return usePost({ url, data })
  }

  signup = (data: any | {}) => {
    const url = path + 'signup'

    return usePost({ url, data })
  }
  refresh = (data: any | {}) => {
    const url = path + 'refresh-token'
    return usePost({ url, data, requiredToken: true })
  }

  reset = (data: any | {}) => {
    const url = path + 'reset'
    return usePost({ url, data })
  }
  loginGG = () => {
    const url = path + 'gg'
    return usePost({
      url, data: {
        callBackUri: import.meta.env.VITE_GG_REDIRECT_URL
      }
    })
  }
  loginFB = () => {
    const url = path + 'fb'
    return usePost({
      url, data: {
        callBackUri: import.meta.env.VITE_FB_REDIRECT_URL
      }
    })
  }
}
const authApi = new Auth()

export { authApi }
