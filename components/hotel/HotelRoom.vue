<template lang="pug">
.flex.flex-col.gap-6.select-none
  span.text-xl.font-medium  {{ $t('hotel_detail_page.where_you_will_stay') }}
  .flex.gap-8(v-for='room in roomTypes')
    HotelRoomCard(:room='room' v-if='room.rate_plans.length > 0')
    .flex-1.flex.flex-col.gap-4
      RatePlan(:room-id='room.id' :rate-plans='rateplan' :room-nights='room.room_nights' :sold-out='soldOut(room.room_nights.length)' v-for='rateplan in room.rate_plans')

</template>

<script setup lang="ts">
import { useHotelDetail } from '~/composables/hotel/useHotelDetail'
import RatePlan from './RatePlan.vue'

// Loop and pass room & room type here
const { roomTypes } = storeToRefs(useHotelDetail())

// sold out if nums of room night <= 0
function soldOut(roomNightCount: number) {
  return roomNightCount <= 0
}
</script>

<style scoped></style>
