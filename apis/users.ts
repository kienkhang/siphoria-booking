const path = 'users'
class User {
  details = () => {
    const url = `${path}/details`
    return useGet({ url, requiredToken: true })
  }

  updateProfile = (data: any | {}) => {
    const url = `${path}/update-profile`
    return usePatch({ url, data, requiredToken: true })
  }

  changeAvatar = (data: any | {}) => {
    const url = `${path}/update-avatar`
    return usePost({
      url,
      data,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      requiredToken: true
    })
  }
}

const usersApi = new User()

export { usersApi }
