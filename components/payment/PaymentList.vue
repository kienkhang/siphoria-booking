<template lang="pug">
div.w-560px.h-max.px-8.pt-4.border.border-platinum.rounded-2xl.bg-white
  .flex.flex-col.gap-6
    div(v-for='checkout in lists' :key='checkout.id')
      PaymentItem(:checkout='checkout')
      .w-full.h-1px.bg-platinum.mt-6
  .flex.items-center.justify-between.py-3
    div
      h1.font-bold.text-lg {{ totalBookings }} bookings
      h3 {{ totalNights }} room nights
    span.total.text-28px.font-medium.text-green-700 {{ VND(''+ totalPrice) }} VND


</template>

<script setup lang="ts">
const { checkout: lists } = storeToRefs(usePayment())

// Calculate Price
const totalPrice = computed(() => {
  return lists.value?.reduce((sumTemp, checkout) => {
    return sumTemp + checkout.total_price
  }, 0)
})
// Calculate Booking
const totalBookings = computed(() => {
  return lists.value?.length
})
// Calculate Night
const totalNights = computed(() => {
  return lists.value?.reduce((sumTemp, checkout) => {
    return sumTemp + checkout.payment_details.length
  }, 0)
})
</script>

<style scoped></style>
