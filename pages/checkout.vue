<template lang="pug">
.mt-6.w-full
  .w-full.flex.justify-center.gap-16
    .max-w-752px.w-full
      div
        span.font-semibold Phiên thanh toán kết thúc sau &nbsp
        span.font-semibold.text-red-500(v-if='durationDown !== 0') {{ durationDown }} giây
      //- Payer & payment method
      PaymentPayer.mt-6
      //- PaymentMethod.mt-6
      SharedSelectMethod.mt-6(
        :method='payForm.pay_method'
        :is-topup='false'
        :is-enough-money='isEnoughMoney'
        @select-method='selectPayMethod'
      )
      PaymentVoucher.mt-6
      BaseButton.mt-6(class='justify-center w-full h-10 px-4 text-white border bg-crayola rounded-3xl' @click="doPay()")
        .w-4.h-4(class='i-custom-load' v-if='isLoading')
        span(v-else) Pay 
    PaymentList


</template>

<script setup lang="ts">
import { useAccountStore } from '~/stores/account'

definePageMeta({
  layout: 'home',
  title: 'Siphoria | Search Hotel'
})

// route & router composables
const route = useRoute()
const router = useRouter()

// Get payform from usePayment
const { payForm, checkout: lists } = storeToRefs(usePayment())

function selectPayMethod(method: TPaymentMethod) {
  payForm.value.pay_method = method
}
// get session id
const sessionId = computed(() => route.query?.id as string)
// Watch session id, when exist value -> set session id to form
payForm.value.session_id = sessionId.value

// destruct get payments and pay function
const { payWith, getCheckoutPayments } = usePayment()

// -------------------------- FETCH CHECKOUT SESSION --------------------------
// destruct fetch api calling
const { executeApi: fetchPayments } = getCheckoutPayments({ session_id: sessionId.value })
// mounted -> fetch payment with session id
onMounted(async () => {
  await fetchPayments()
})

// -------------------------- PAY CALL --------------------------
// destruct pay api calling
const { executeApi: pay, data: payData, isLoading } = payWith()
// Define response
const payResponse = ref<IPayResponse>()
// Pay
async function doPay() {
  try {
    await pay()
    payResponse.value = payData.value
  } catch (e) {
    throw new Error(e as string)
  }
}
// when receive reponse from server => redirect to payUrl
watch(payResponse, () => {
  if (payResponse.value) window.location.replace(payResponse.value.payUrl)
})

// -------------------------- CHECK ENOUGH MONEY --------------------------
// Get balance account
// Get account
const { account } = storeToRefs(useAccountStore())
// Get balance
const balance = computed(() => account.value?.wallet.balance)
const isEnoughMoney = computed(() => {
  const totalPrice = lists.value?.reduce((sumTemp, checkout) => {
    return sumTemp + checkout.total_price
  }, 0)
  if (totalPrice && balance.value) return balance.value >= totalPrice

  return false
})

// =========== COUNT DOWN ==============
const duration = ref(0)
let countingIntv: number

function stopCountingDuration() {
  window.clearInterval(countingIntv)
  router.push('/account')
}

function startCountingDuration() {
  stopCountingDuration()

  countingIntv = window.setInterval(() => {
    duration.value += 1
  }, 1000)
}

const durationDown = computed(() => 300 - duration.value)

// If durationDown is 0 => stop interval
until(durationDown)
  .toMatch((v) => v === 0)
  .then(stopCountingDuration)

// Start count
onMounted(startCountingDuration)

// stop interval
onUnmounted(() => {
  stopCountingDuration()
})
</script>

<style scoped></style>
