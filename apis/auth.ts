const path = 'auth'
class Auth {
  login = (data: any | {}) => {
    const url = `${path}/login/general`

    return usePost({ url, data })
  }

  signup = (data: any | {}) => {
    const url = `${path}/signup`

    return usePost({ url, data })
  }

  refresh = (data: any | {}) => {
    const url = `${path}/refresh-token`
    return usePost({ url, data, requiredToken: true })
  }

  reset = (data: any | {}) => {
    const url = `${path}/reset`
    return usePost({ url, data })
  }

  verify = (token: string) => {
    const url = `${path}/verify/${token}`
    return useGet({ url })
  }

  changePassword = (data: any | {}) => {
    const url = `${path}/change-pwd`
    return usePost({ url, data })
  }

  loginGG = (code: string) => {
    const url = `${path}/gg`
    return usePost({
      url,
      data: {
        code
      }
    })
  }

  loginFB = (code: string) => {
    const url = `${path}/fb`
    return usePost({
      url,
      data: {
        code
      }
    })
  }
}
const authApi = new Auth()

export { authApi }
