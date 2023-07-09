<template lang="pug">
.flex.flex-col.justify-between
  .info-address
    span.text-2xl.font-medium.line-clamp-1 {{ hotel.name }}
    span.text-xs.text-x11.line-clamp-1 {{hotel.raw_address}}
  .flex.flex-col.gap-2
    .grid.grid-cols-12
      .col-span-3
        span.font-semibold Booking ID
      .col-span-9
        span.line-clamp-1 {{booking.id}}
    .grid.grid-cols-12
      .col-span-3
        span.font-semibold Room type
      .col-span-9
        span.line-clamp-1 {{ room.name }}
    //- .grid.grid-cols-12
    //-   .col-span-3
    //-     span.font-semibold Rateplan
    //-   .col-span-9
    //-     span.line-clamp-1 Deluxe King Room - With Breakfast
</template>

<script setup lang="ts">
import { type IPayment } from '~/dtos/payment'

const props = defineProps<{
  booking: IPayment
}>()

const hotel = computed(() => props.booking.hotel)
const room = computed(() => props.booking.room_type)
</script>

<style scoped></style>
