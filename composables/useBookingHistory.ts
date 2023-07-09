import { usersApi } from '~/apis/users'
import type { IPayment } from '~/dtos/payment'

const useBookingHistory = defineStore('account__useBookingHistory', () => {
  // composables
  const toast = useToast()
  const { t } = useI18n()
  // State & value
  const history = ref<IPayment[]>([])
  // server response paging
  const paging = ref<IResponsePaging>({
    offset: 0,
    page: 1,
    total_items: 0,
    total_pages: 1
  })
  // client request paging with filter
  const filter = ref<IRequestFilter>({
    page: 1,
    offset: 54
  })
  // Client page
  const page = ref(1)
  // client paging
  const calculatedPaging = computed(() =>
    calculatePaging<IPayment>({
      offset: 6,
      page: page.value,
      server_offset: paging.value.offset,
      server_page: paging.value.page,
      serverData: history,
      total_items: paging.value.total_items
    })
  )

  // Get bookings history
  function getBookingHistory() {
    const usedGetBookings = usersApi.getPayments(filter.value)
    // destructuring axios delete
    const { execute, data } = usedGetBookings
    // custom execute api
    const executeApi = async () => {
      try {
        // execute-> call api
        await execute()
        history.value = data.value.data
        paging.value = data.value.paging
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
  return { history, filter, paging, calculatedPaging, page, getBookingHistory }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useBookingHistory, import.meta.hot))

export { useBookingHistory }
