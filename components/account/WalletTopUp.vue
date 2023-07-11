<template lang="pug">
.flex.flex-col.gap-6
  .top-up-amount
    .text-lg.font-bold 1. Top-up Amount
    .rounded-xl.border.p-5.mt-3
      label.px-3.text-sm.cursor-pointer(for='money') Amount
      .flex.items-center.justify-between
        input(
          type='text'
          id='money' 
          name='money'
          v-model='maskInput' 
          v-maska:[options]
          class='text-3xl border-0 w-max focus:border-crayola focus:outline-none focus:ring-0 '
        )
        span.text-3xl VND
    AccountWalletTopUpMoney.mt-3(@select-money="selectMoney")
  .top-up-method
    .text-lg.font-bold 2. Choose top-up method
    SharedSelectMethod.mt-3(
      :method='topUpForm.method'
      :is-topup='true'
      :is-enough-money='false'
      @select-method='selectMethod'
    )
  .flex.flex-row-reverse
    BaseButton.top-up-button.rounded-lg.py-3.px-6.text-lg(class='justify-center text-white bg-vivid w-max' @click='doTopUp()')
      .w-4.h-4(class='i-custom-load' v-if='isLoading')
      span(v-else) Top Up 
</template>

<script setup lang="ts">
import type { MaskaDetail } from 'maska'

const topUpForm = ref<{
  amount: number
  method: TPaymentMethod
}>({
  amount: 0,
  method: 'momo'
})
// Handle money input mask
const maskInput = ref('100,000')
const options = reactive({
  mask: [
    '#',
    '##',
    '###',
    '#,###',
    '##,###',
    '###,###',
    '#,###,###',
    '##,###,###',
    '###,###,###',
    '#,###,###,###',
    '##,###,###,###',
    '###,###,###,###'
  ],
  onMaska(detail: MaskaDetail) {
    topUpForm.value.amount = +detail.unmasked
  }
})
// Handle select method
function selectMethod(method: TPaymentMethod) {
  topUpForm.value.method = method
}
// Hanlde select money
function selectMoney(price: number) {
  maskInput.value = `${price}`
}

// ------------ HANDLE CALL TOP UP API ------------
const { topUp } = useWallet()

// Define response
const payResponse = ref<IPayResponse>()
// Destruct api calling
const { executeApi: callTopUp, isLoading, data } = topUp(topUpForm)

async function doTopUp() {
  try {
    await callTopUp()
    payResponse.value = data.value
  } catch (e) {
    throw new Error(e as string)
  }
}
// when receive reponse from server => redirect to payUrl
watch(payResponse, () => {
  if (payResponse.value) window.location.replace(payResponse.value.payUrl)
})
</script>
