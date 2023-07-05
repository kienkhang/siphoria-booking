<template lang="pug">
.mt-6.w-full
  .w-full.flex.justify-center.gap-16
    .max-w-752px.w-full 
      //- Payer & payment method
      PaymentPayer
      PaymentMethod.mt-6
      PaymentVoucher.mt-6
      BaseButton.mt-6(class='justify-center w-full h-10 px-4 text-white border bg-crayola rounded-3xl' @click="doPayment()") Pay
    PaymentList


</template>

<script setup lang="ts">
definePageMeta({
  layout: 'home',
  title: 'Siphoria | Search Hotel'
})

const route = useRoute()
const { payWith, getPayments } = usePayment()

const payForm = ref({
  session_id: ''
})

function doPayment() {}

const sessionId = computed(() => route.query?.id as string)
const { executeApi: fetchPayments } = getPayments({ session_id: sessionId.value })

onMounted(async () => {
  await fetchPayments()
})
</script>

<style scoped></style>
