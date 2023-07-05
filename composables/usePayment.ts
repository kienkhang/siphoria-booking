import { usersApi } from '~/apis/users'

function usePayment() {
  const mess = useMessage()

  // Get Payments
  function getPayments(params: { session_id?: string }) {
    const usedGetPayments = usersApi.getPayments(params)
    // destructuring axios delete
    const { execute } = usedGetPayments
    // custom execute api
    const executeApi = async () => {
      try {
        // execute-> call api
        await execute({ data: params })
        // push log
      } catch (e: any) {
        // push log
        mess.success('Lấy thanh toán thất bại')
        throw new Error(e)
      }
    }
    return {
      ...usedGetPayments,
      executeApi
    }
  }
  // Pay after checkout
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
    payWith,
    getPayments
  }
}

export default usePayment
