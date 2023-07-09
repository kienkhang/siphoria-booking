import { usersApi } from '~/apis/users'
import type { IPayment } from '~/dtos/payment'

function useBookingDetail() {
  // toast composable
  const toast = useToast()
  // locale composable
  const { t } = useI18n()
  // Booking state
  const booking = ref<IPayment>()

  // Get booking detail function
  function getBookingDetail(paymentId: string) {
    const usedGetBookings = usersApi.getPaymentDetail(paymentId)
    // destructuring axios delete
    const { execute, data } = usedGetBookings
    // custom execute api
    const executeApi = async () => {
      try {
        // execute-> call api
        await execute()
        booking.value = data.value
        // push log
      } catch (e: any) {
        // push log
        toast.add({
          id: 'get__booking__history',
          title: t('toast.an_error_occurred'),
          description: t('toast.get_payment.error'),
          color: 'rose'
        })
        throw new Error(e)
      }
    }

    return {
      ...usedGetBookings,
      executeApi
    }
  }
  return {
    getBookingDetail
  }
}

export { useBookingDetail }
