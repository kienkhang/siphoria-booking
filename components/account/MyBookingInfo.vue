<template lang="pug">
.flex.flex-col.justify-between
  .info-address
    span.text-2xl.font-medium.line-clamp-1 {{ hotel.name }}
    span.text-xs.text-x11.line-clamp-1 {{hotel.raw_address}}
  .flex.flex-col.gap-2
    .grid.grid-cols-12
      .col-span-3
        span.font-semibold {{$t('account_page.my_bookings.booking_id')}}
      .col-span-9
        span.line-clamp-1 {{ booking.id }}
    .grid.grid-cols-12
      .col-span-3
        span.font-semibold {{$t('account_page.my_bookings.room_type')}}
      .col-span-9
        span.line-clamp-1 {{ room.name }}
    .grid.grid-cols-12
      .col-span-3
        span.font-semibold {{$t('account_page.my_bookings.rate_plan')}}
      .col-span-9
        span.line-clamp-1 {{ ratePlan.name }}
</template>

<script setup lang="ts">
const props = defineProps<{
  booking: IPayment
}>()

const hotel = computed(() => props.booking.hotel)
const room = computed(() => props.booking.room_type)
const ratePlan = computed(() => props.booking.rate_plans)
</script>

<style scoped></style>
