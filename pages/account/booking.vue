<template lang="pug">
.w-full.p-8.rounded-2xl.shadow-bar.bg-white
  .flex.flex-col.gap-10(v-for='booking in history')
    MyBooking(:booking='booking')
    .h-1px.bg-x11(class='w-1/2 mx-auto')
</template>

<script setup lang="ts">
import MyBooking from '~/components/account/MyBooking.vue'

const { getBookingHistory } = useBookingHistory()
const { history, filter } = storeToRefs(useBookingHistory())
const { executeApi: fetchBookings } = getBookingHistory()

function getMyBooking() {
  filter.value.state = {}
  fetchBookings()
}

onMounted(() => getMyBooking())
whenever(history, () => {
  console.log('😃😦😧 ~ whenever ~ bookings:', history.value)
})
</script>

<style scoped></style>
