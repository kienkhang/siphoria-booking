import { usersApi } from '@/apis/users'
import { useCartStore } from '~/stores/cart'
function useCart() {
  const { carts } = storeToRefs(useCartStore())
  // usemessage composables
  const toast = useToast()

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
        toast.add({
          id: 'add__cart',
          title: 'Thông báo',
          description: 'Thêm đơn hàng thành công',
          color: 'rose'
        })
      } catch (e: any) {
        // push log
        toast.add({
          id: 'add__cart',
          title: 'Có lỗi xảy ra',
          description: 'Không thể thêm đơn hàng',
          color: 'rose'
        })
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
        toast.add({
          id: 'get__cart',
          title: 'Có lỗi xảy ra',
          description: 'Không thể lấy đơn hàng',
          color: 'rose'
        })
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
        toast.add({
          id: 'delete__cart',
          title: 'Thông báo',
          description: 'Xoá đơn hàng thành công',
          color: 'primary'
        })
      } catch (e: any) {
        // push log
        toast.add({
          id: 'delete__cart',
          title: 'Có lỗi xảy ra',
          description: 'Không thể xoá đơn hàng',
          color: 'rose'
        })
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
        // mess.success('Chuyển trang thất bại')
        toast.add({
          id: 'checkout__cart',
          title: 'Có lỗi xảy ra',
          description: 'Không tìm thấy đơn hàng',
          color: 'rose'
        })
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
