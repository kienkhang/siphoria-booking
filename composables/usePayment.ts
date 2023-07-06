import { usersApi } from '~/apis/users'
import { ICheckout } from '~/dtos/payment'

function usePayment() {
  const checkout = ref<ICheckout[]>()

  const payForm = ref<{
    session_id: string
    pay_method: 'momo' | 'vnpay' | 'siphoria' | 'stripe'
  }>({
    pay_method: 'momo',
    session_id: ''
  })

  const { t } = useI18n()
  const toast = useToast()

  // Get Payments
  function getCheckoutPayments(params: { session_id?: string }) {
    const usedGetPayments = usersApi.getHistoryPayments(params)
    // destructuring axios delete
    const { execute, data } = usedGetPayments
    // custom execute api
    const executeApi = async () => {
      try {
        // execute-> call api
        await execute({ data: params })
        checkout.value = data.value
        // push log
      } catch (e: any) {
        // push log
        toast.add({
          id: 'get__checkout__payments',
          title: 'Có lỗi xảy ra',
          description: 'Không tìm thấy đơn hàng',
          color: 'rose'
        })
        throw new Error(e)
      }
    }
    return {
      ...usedGetPayments,
      executeApi
    }
  }
  // Pay after checkout
  function payWith() {
    const usedPay = usersApi.pay(payForm.value)
    // destructuring axios delete
    const { execute } = usedPay
    // custom execute api
    const executeApi = async () => {
      try {
        // execute-> call api
        await execute({ data: payForm.value })
        // push log
        // mess.success('Thêm giỏ hàng thành công')
      } catch (e: any) {
        // push log
        toast.add({
          id: 'pay__payments',
          title: t('toast.an_error_occurred'),
          description: t('toast.pay.error'),
          color: 'rose'
        })
        throw new Error(e)
      }
    }
    return {
      ...usedPay,
      executeApi
    }
  }
  return {
    checkout,
    payForm,
    payWith,
    getCheckoutPayments
  }
}

export default defineStore('checkout__usePayment', usePayment)
