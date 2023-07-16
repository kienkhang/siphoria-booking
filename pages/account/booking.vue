<template lang="pug">
.w-full.p-8.rounded-2xl.shadow-bar.bg-white
  div(v-if='data.length > 0')
    .flex.flex-col(v-for='booking in data')
      MyBooking.mb-10(:booking='booking')
      //- Show line exclude last index
      .h-1px.bg-x11.mb-10(class='w-1/2 mx-auto' v-if='booking.id !== data[data.length - 1].id')
    .flex.flex-row-reverse.pt-6
      NPagination(
        v-model:page='page'
        :page-count='calculatedPaging?.total_pages'
        @update:page='updatePage'
      )
  SharedEmptySearch(
    :empty='notFound'
    v-else  
  )
</template>

<script setup lang="ts">
import MyBooking from '~/components/account/MyBooking.vue'

// Destruct function call get booking
const { getBookingHistory } = useBookingHistory()
const { executeApi: fetchBookings } = getBookingHistory()
// Destruct filter and paging from store
const { filter, calculatedPaging, page } = storeToRefs(useBookingHistory())

// Fetch booking with state empty
function getMyBooking() {
  filter.value.state = {}
  fetchBookings()
}
// Mounted -> call api get booking
onMounted(() => getMyBooking())

// ---- HANDLE PAGING HOTEL ----
// Get data from calculated paging
const data = computed(() => calculatedPaging.value.data)
// Trigger update page
function updatePage() {
  calculatedPaging.value.changeServerPage(() => {
    filter.value.page = calculatedPaging.value.alpha
    getMyBooking()
  })
}

// NOT FOUND DATA
const { t } = useI18n()
const notFound = reactive({
  size: 64,
  title: 'account_page.my_bookings.not_found_title',
  content: 'account_page.my_bookings.not_found_content'
})
</script>

<style scoped></style>
