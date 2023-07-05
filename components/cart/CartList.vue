<template lang="pug">
.flex.justify-center.gap-10.mt-10.divide-y-2.overflow-y-auto.hide-scroll(v-for='cart in carts')
  CartItem(:cart='cart' :key='cart.id')

</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const { carts } = storeToRefs(useCartStore())
</script>

<style scoped></style>
