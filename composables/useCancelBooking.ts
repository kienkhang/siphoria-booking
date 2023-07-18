import { usersApi } from '~/apis/users'

function useCancelBooking() {
  // toast composable
  const toast = useToast()
  // locale composable
  const { t } = useI18n()

  function cancelBooking(data: Ref<{ payment_id: string }>) {
    const usedCancel = usersApi.cancelBooking(data.value)

    const { execute } = usedCancel

    async function executeApi() {
      try {
        await execute({ data: data.value })
        // push log
        toast.add({
          id: 'cancel__booking',
          title: t('toast.notification'),
          description: t('toast.cancel_booking.success'),
          color: 'primary'
        })
      } catch (e: any) {
        // push log
        toast.add({
          id: 'cancel__booking',
          title: t('toast.an_error_occurred'),
          description: t('toast.cancel_booking.error'),
          color: 'rose'
        })
        throw new Error(e)
      }
    }

    return {
      ...usedCancel,
      executeApi
    }
  }

  return {
    cancelBooking
  }
}

export { useCancelBooking }
