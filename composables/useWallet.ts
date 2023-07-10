import { usersApi } from '~/apis/users'

const useWallet = defineStore('account__useWallet', () => {
  // toast composable
  const toast = useToast()
  // locale composable
  const { t } = useI18n()
  // State & value
  const history = ref<ITransaction[]>([])
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
    calculatePaging<ITransaction>({
      offset: 6,
      page: page.value,
      server_offset: paging.value.offset,
      server_page: paging.value.page,
      serverData: history,
      total_items: paging.value.total_items
    })
  )

  function topUp(form: Ref<{} | any>) {
    const usedPay = usersApi.topUp(form)
    // destructuring axios delete
    const { execute } = usedPay
    // custom execute api
    const executeApi = async () => {
      try {
        // execute-> call api
        await execute({ data: form.value })
        // push log
      } catch (e: any) {
        // push log
        toast.add({
          id: 'wallet__topup',
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

  function getTopUpHistory() {
    const usedGetPayments = usersApi.topUpHistory(filter)
    // destructuring axios delete
    const { execute, data } = usedGetPayments
    // custom execute api
    const executeApi = async () => {
      try {
        // execute-> call api
        await execute({ params: filter.value })
        history.value = data.value.data
        paging.value = data.value.paging
        // push log
      } catch (e: any) {
        // push log
        toast.add({
          id: 'get__checkout__payments',
          title: t('toast.an_error_occurred'),
          description: t('toast.pay.error'),
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
  return {
    topUp,
    getTopUpHistory,
    page,
    filter,
    history,
    calculatedPaging
  }
})

export { useWallet }
