<template lang="pug">
.flex.flex-col.gap-6.select-none
  span.text-xl.font-medium Where you will stay
  .flex.gap-8(v-for='room in roomTypes')
    HotelRoomCard(:room='room')
    .h-400px.flex-1.bg-gray-300

</template>

<script setup lang="ts">
import { useHotelDetail } from '~/composables/hotel/useHotelDetail'

// Loop and pass room & room type here
const { roomTypes } = storeToRefs(useHotelDetail())
</script>

<style scoped></style>
