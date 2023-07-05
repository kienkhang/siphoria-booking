<template lang="pug">
.flex.flex-col.gap-6(v-auto-animate)
  //- info and delete actions
  .info.flex.justify-between 
    div
      span.text-2xl.font-medium {{hotel.name}}
      br
      span.text-xs.text-x11 {{hotel.raw_address}}
    //- icon delete
    .flex.items-center.text-red-600.px-3.gap-2.select-none.cursor-pointer(
      class='hover:bg-red-500/[0.05] rounded-lg transition-all' 
      @click='doDelete()'
    )
      div(class='w-18px h-18px i-material-symbols:delete-outline')
      span Delete
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
    .flex.items-center.gap-2.cursor-pointer(@click='toggleDetail()')
      span.text-xl.font-medium {{ VND(''+cart.total_price) }} VND / night
      div(:class='["w-6 h-6 i-custom-chevron-down transition-all", {"rotate-180": showDetail}]' )
    //- Detail rate-package, show if showDetail
  div(v-if='showDetail')
    .w-full.h-1px.bg-platinum.mb-6
    .flex.items-center.justify-between(v-for='rate in detailRate' class='space-y-3')
      span.font-semibold {{ rate.dayoff }}
      span.font-medium {{ VND( rate.price  + '') }} VND

</template>

<script setup lang="ts">
import { useCart } from '~/composables/cart/useCart'
import type { ICart } from '~/dtos/cart'

const props = defineProps<{
  cart: ICart
}>()

// dayjs composables
const dayjs = useDayjs()
// Handler toggle detail
const showDetail = ref(false)
function toggleDetail() {
  showDetail.value = !showDetail.value
}

// Get hotel, rateplans and room type from cart info
const cartDetail = computed(() => props.cart.details)
const hotel = computedEager(() => props.cart.hotel)
const ratePlans = computedEager(() => props.cart.rate_plans)
const roomType = computedEager(() => props.cart.room_type)
// Handle format cart detail
// Show detail rate
const detailRate = computed(() => {
  return cartDetail.value.map((rp) => {
    return {
      dayoff: dayjs(rp.day_off).format('DD MMM, YYYY'),
      price: rp.price
    }
  })
})

// Delete cart
const { deleteCart } = useCart()
const cartId = computed(() => props.cart.id)
const { executeApi: doDelete } = deleteCart(cartId)
</script>

<style scoped></style>
