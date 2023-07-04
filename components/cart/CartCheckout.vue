<template lang="pug">
.w-full.h-max.mx-auto.shadow-md.p-2.border-t-2.bg-white
  .max-w-1200px.flex.flex-col.mx-auto.gap-4
    .booking-count.flex.justify-between
      span.font-medium {{ totalBooking }} bookings
      span.price.text-2xl {{ VND(''+totalPrice) }} VND
    .night-count.flex.justify-between
      span {{ totalRoomNight }} room nights
      BaseButton(class='h-10 px-4 text-white border bg-crayola rounded-3xl' @click="checkout()") Checkout
    

</template>

<script setup lang="ts">
import { useCart } from '~/composables/cart/useCart'
import { useCartStore } from '~/stores/cart'

const { carts } = storeToRefs(useCartStore())
const totalBooking = computed(() => carts.value?.length)
const totalRoomNight = computed(() => {
  return carts.value?.reduce((sumTemp, cart) => {
    return sumTemp + cart.details.length
  }, 0)
})

const totalPrice = computed(() => {
  return carts.value?.reduce((sumTemp, cart) => {
    return sumTemp + cart.total_price
  }, 0)
})
// Checkout function
const { checkoutCart } = useCart()
const { executeApi: callCheckout } = checkoutCart()

async function checkout() {
  await callCheckout()
}
</script>

<style scoped></style>
