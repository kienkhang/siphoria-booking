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

  getCart = () => {
    const url = `${path}/carts`
    return useGet({ url, requiredToken: true })
  }

  addToCart = (data: any | {}) => {
    const url = `${path}/add-to-cart`
    return usePost({ url, data, requiredToken: true })
  }

  deleteCart = (cartId: string) => {
    const url = `${path}/carts/${cartId}`
    return useDelete({ url, requiredToken: true })
  }

  getPayments = (params?: any | {}) => {
    const url = `${path}/payments`
    return useGet({ url, params, requiredToken: true })
  }

  getPaymentDetail = (paymentId: string) => {
    const url = `${path}/payments/${paymentId}`
    return useGet({ url, requiredToken: true })
  }

  getCheckoutPayments = (params: { session_id: string }) => {
    const url = `${path}/payments/history`
    return useGet({ url, params, requiredToken: true })
  }

  checkout = (data: {}) => {
    const url = `${path}/payments`
    return usePost({ url, data, requiredToken: true })
  }

  pay = (data: any | {}) => {
    const url = `${path}/pay`
    return usePost({ url, data, requiredToken: true })
  }

  topUp = (data: any | {}) => {
    const url = `${path}/wallets`
    return usePost({ url, data, requiredToken: true })
  }

  topUpHistory = () => {
    const url = `${path}/top-up`
    return useGet({ url, requiredToken: true })
  }
}

const usersApi = new User()

export { usersApi }
