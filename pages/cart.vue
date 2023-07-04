<template lang="pug">
.max-w-1200px.mx-auto.mt-6
  span.block.text-2xl.font-medium.text-center Booking cart
  CartList
  
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
