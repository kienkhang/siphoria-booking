import { usersApi } from '~/apis/users'

function usePayment() {
  const mess = useMessage()
  // Add to cart
  function payWith(form: Ref<any | {}>) {
    const usedPay = usersApi.pay(form)
    // destructuring axios delete
    const { execute } = usedPay
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
      ...usedPay,
      executeApi
    }
  }
  return {
    payWith
  }
}

export default usePayment
