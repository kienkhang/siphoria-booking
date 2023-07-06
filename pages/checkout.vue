<template lang="pug">
.mt-6.w-full
  .w-full.flex.justify-center.gap-16
    .max-w-752px.w-full 
      //- Payer & payment method
      PaymentPayer
      PaymentMethod.mt-6
      PaymentVoucher.mt-6
      BaseButton.mt-6(class='justify-center w-full h-10 px-4 text-white border bg-crayola rounded-3xl' @click="doPay()")
        .w-4.h-4(class='i-custom-load' v-if='isLoading')
        span(v-else) Pay 
    PaymentList


</template>

<script setup lang="ts">
import type { IPayResponse } from '@/dtos/payment'

definePageMeta({
  layout: 'home',
  title: 'Siphoria | Search Hotel'
})

// route & router composables
const route = useRoute()
const router = useRouter()
// Get payform from usePayment
const { payForm } = storeToRefs(usePayment())
// get session id
const sessionId = computed(() => route.query?.id as string)
// Watch session id, when exist value -> set session id to form
payForm.value.session_id = sessionId.value
// destruct get payments and pay function
const { payWith, getCheckoutPayments } = usePayment()
const { executeApi: pay, data: payData, isLoading } = payWith()
const { executeApi: fetchPayments } = getCheckoutPayments({ session_id: sessionId.value })

// Define response
const payResponse = ref<IPayResponse>()

async function doPay() {
  try {
    await pay()
    payResponse.value = payData.value
  } catch (e) {
    throw new Error(e as string)
  }
}

watch(payResponse, () => {
  if (payResponse.value) 
    window.location.replace(payResponse.value.payUrl)
  
})

onMounted(async () => {
  await fetchPayments()
})
</script>

<style scoped></style>
