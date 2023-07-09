<template lang="pug">
.list
  LazyAccountPaymentTab
  LazyAccountPaymentTable.mt-6

</template>

<script setup lang="ts">
// Destruct booking history
const { getBookingHistory } = useBookingHistory()
const { history, filter } = storeToRefs(useBookingHistory())
// Fetch booking
const { executeApi: fetchBookings } = getBookingHistory()

// Get History booking
function getHistory() {
  filter.value.state = 'history'
  fetchBookings()
}
// onmouted -> fetch history
onMounted(() => {
  getHistory()
})

const state = ref('list')
</script>

<style scoped></style>
