<template lang="pug">
.max-w-1200px.mx-auto.mt-6.relative
  span.block.text-2xl.font-medium.text-center Booking cart
  .mt-9
    LazyCartList
  .fixed.right-0.bottom-0.left-0
    LazyCartCheckout
  
</template>

<script setup lang="ts">
import { useCart } from '~/composables/cart/useCart'

definePageMeta({
  layout: 'home',
  title: 'Siphoria | Search Hotel'
})

const { getCarts } = useCart()
const { executeApi: fetchCarts } = getCarts()

onMounted(() => {
  fetchCarts()
})
</script>

<style scoped></style>
