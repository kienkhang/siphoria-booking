<template lang="pug">
.flex.flex-col.h-full
  //- info and delete actions
  .info.flex.justify-between 
    div
      span.text-2xl.font-medium {{hotel.name}}
      br
      span.text-xs.text-x11 {{hotel.raw_address}}
    //- icon delete
    .flex.items-center.text-red-600.p-2.gap-2.select-none.cursor-pointer.transition-all(class='hover:bg-red-500/[0.02]' @click='doDelete()')
      div(class='w-18px h-18px i-material-symbols:delete-outline')
      span Delete
  .flex-1
  .flex.items-end.justify-between
    //- Room type and Rate plan
    .flex.flex-col.gap-2
      .grid.grid-cols-12.w-500px
        .col-span-3
          span.font-semibold Room type
        .col-span-9
          span {{roomType.name}}
      .grid.grid-cols-12.w-500px
        .col-span-3
          span.font-semibold Rateplan
        .col-span-9
          span {{ratePlans.name}}
    //- Total Price
    .flex.items-center.gap-2
      span.text-xl {{ VND(''+cart.total_price) }} VND
      div(:class='["w-6 h-6 i-custom-chevron-down transition-all", {"rotate-180": showDetail}]' )

</template>

<script setup lang="ts">
import { useCart } from '~/composables/cart/useCart'
import type { ICart } from '~/dtos/cart'

const props = defineProps<{
  cart: ICart
}>()
const showDetail = ref(false)

const cartDetail = computed(() => props.cart.details)
const hotel = computedEager(() => props.cart.hotel)
const ratePlans = computedEager(() => props.cart.rate_plans)
const roomType = computedEager(() => props.cart.room_type)

// Delete cart
const { deleteCart } = useCart()
const cartId = computed(() => props.cart.id)
const { executeApi: doDelete } = deleteCart(cartId)
</script>

<style scoped></style>
