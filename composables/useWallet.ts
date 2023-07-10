import { usersApi } from '~/apis/users'

function useWallet() {
  // toast composable
  const toast = useToast()
  // locale composable
  const { t } = useI18n()

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
  return {
    topUp
  }
}

export { useWallet }
