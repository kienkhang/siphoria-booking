<template lang="pug">
.w-full.p-8.rounded-2xl.shadow-bar.bg-white
  | Booking
</template>

<script setup lang="ts">
const { getBookingHistory } = useBookingHistory()
const { history, filter } = storeToRefs(useBookingHistory())
const { executeApi: fetchBookings } = getBookingHistory()

// onMounted(() => fetchBookings())
whenever(history, () => {
  console.log('😃😦😧 ~ whenever ~ bookings:', history.value)
})
</script>

<style scoped></style>
