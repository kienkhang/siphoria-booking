<template lang="pug">
.flex.flex-col.gap-6.select-none
  span.text-xl.font-medium Where you will stay
  .flex.gap-8(v-for='room in roomTypes')
    HotelRoomCard(:room='room' v-if='room.rate_plans.length > 0')
    .flex-1.flex.flex-col.gap-4
      RatePlan(:rate-plans='rateplan' :room-nights='room.room_nights' :sold-out='soldOut(room.room_nights.length)' v-for='rateplan in room.rate_plans')

</template>

<script setup lang="ts">
import { useHotelDetail } from '~/composables/hotel/useHotelDetail'
import RatePlan from './RatePlan.vue'

// Loop and pass room & room type here
const { roomTypes } = storeToRefs(useHotelDetail())

const soldOut = (value: number) => {
  return value <= 0
}
</script>

<style scoped></style>
