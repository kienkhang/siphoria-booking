<template lang="pug">
.flex.items-center.gap-4
  AccountPaymentTabItem(
    v-for='tab in tabs',
    :key='tab.key'
    :tab='tab'
    :active='selectedTab === tab.key'
    @change-tab='changeTab(tab.key)'
  )

</template>

<script setup lang="ts">
// Destruct filter booking
const { filter } = storeToRefs(useBookingHistory())
// Destruct call api function
const { getBookingHistory } = useBookingHistory()
const { executeApi: fetchBookings } = getBookingHistory()
// select function
const selectedTab = ref('history')
// every change tab -> fetch api
function changeTab(tab: string) {
  selectedTab.value = tab
  filter.value.state = tab
  fetchBookings()
}
// List tabs
const tabs = [
  {
    key: 'history',
    name: 'History'
  },
  {
    key: 'cancel',
    name: 'Cancel'
  },
  {
    key: 'refunded',
    name: 'Refunded'
  }
]
</script>

<style scoped></style>
