import { usersApi } from '@/apis/users'
import { useCartStore } from '~/stores/cart'
function useCart() {
  const { carts } = storeToRefs(useCartStore())
  // usemessage composables
  const mess = useMessage()

  // Add to cart
  function addToCart(form: Ref<any | {}>) {
    const usedAdd = usersApi.addToCart(form)
    // destructuring axios delete
    const { execute } = usedAdd
    // custom execute api
    const executeApi = async () => {
      try {
        // execute-> call api
        await execute({ data: form.value })
        // push log
        mess.success('Thêm giỏ hàng thành công')
      } catch (e: any) {
        // push log
        mess.success('Thêm giỏ hàng thất bại')
        throw new Error(e)
      }
    }
    return {
      ...usedAdd,
      executeApi
    }
  }
  // Get cart
  function getCarts() {
    const usedGet = usersApi.getCart()
    // destructuring search hotel
    const { execute, data, isFinished } = usedGet

    until(isFinished)
      .toBeTruthy()
      .then(() => {
        carts.value = data.value
      })
    // custom execute api
    const executeApi = async () => {
      try {
        // execute-> call api
        await execute()
      } catch (e: any) {
        // push log
        mess.success('Lấy giỏ hàng thất bại')
        throw new Error(e)
      }
    }
    return {
      ...usedGet,
      executeApi
    }
  }
  // Delete cart
  function deleteCart(cartId: Ref<string>) {
    const usedDelete = usersApi.deleteCart(cartId.value)
    // destructuring axios delete
    const { execute } = usedDelete
    // custom execute api
    const executeApi = async () => {
      try {
        // execute-> call api
        await execute()
        getCarts().executeApi()
        // push log
        mess.success('Xoá phòng thành công')
      } catch (e: any) {
        // push log
        mess.success('Xoá phòng thất bại')
        throw new Error(e)
      }
    }
    return {
      ...usedDelete,
      executeApi
    }
  }

  // Checkout
  function checkoutCart() {
    const usedCheckout = usersApi.checkout({})
    // destructuring checkout
    const { execute } = usedCheckout
    // custom execute api
    const executeApi = async () => {
      try {
        // execute-> call api
        await execute()
        // push log
      } catch (e: any) {
        // push log
        mess.success('Chuyển trang thất bại')
        throw new Error(e)
      }
    }
    return {
      ...usedCheckout,
      executeApi
    }
  }

  return {
    getCarts,
    addToCart,
    deleteCart,
    checkoutCart
  }
}

export { useCart }
