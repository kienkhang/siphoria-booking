<template lang="pug">
.flex.gap-6.w-full
  figure.h-32.w-32.rounded.overflow-hidden.border.flex-shrink-0
    nuxt-img(
        :src='hotelPhoto[0] || defaultPhoto'
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
    )
  .flex.flex-col.gap-6
    .info
      h3.text-lg.font-medium {{ hotel.name }}
      h6.text-xs.text-metal.line-clamp-1 {{ hotel.raw_address }}
      .flex.justify-between
        h6.text-xs.text-metal {{ room.name }}
        h6.text-xs.text-x11 {{ stayTime }}
    div
      .flex.items-center.justify-between
        .night-count.text-sm.font-medium {{ totalNights }} nights
        .total-price {{ VND(''+ checkout.converted_price) }} VND
      .flex.items-center.justify-between
        .night-count.text-sm.font-medium Rank price
        .total-price - {{ VND('' + checkout.rank_price ) }} VND
      .flex.items-center.justify-between
        .night-count.text-sm.font-medium Voucher price
        .total-price - {{ VND('' + checkout.voucher_price ) }} VND
    .w-full.h-1px.bg-x11
    .flex.flex-row-reverse
      span.total-prices.text-base {{ VND(''+ checkout.total_price) }} VND


</template>

<script setup lang="ts">
import { defaultPhoto } from '~/constants'

const props = defineProps<{
  checkout: ICheckout
}>()

const hotel = computed(() => props.checkout.hotel)

const room = computed(() => props.checkout.room_type)

const hotelPhoto = computed(() => Image2Array(hotel.value.hotel_photos))

const dayjs = useDayjs()

const stayTime = computed(() => {
  return `${dayjs(props.checkout.start_at).format('MMM DD')} - ${dayjs(
    props.checkout.end_at
  ).format('MMM DD')}`
})

// Calculate Night
const totalNights = computed(() => {
  return props.checkout.payment_details.length
})
</script>

<style scoped></style>
