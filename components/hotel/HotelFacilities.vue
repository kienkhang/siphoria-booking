<template lang="pug">
.flex.flex-col.gap-6
  span.text-xl.font-medium {{ $t('hotel_detail_page.what_you_have_in_property') }}
  .grid.grid-cols-6.justify-items-center.gap-6(v-if='facilities.length > 0')
    LazyHotelFacility(v-for='facility in facilities' :name='facility')
    //- BaseButton(class='justify-center w-full p-2 bg-green-300 border rounded-2xl' v-if='isShowMore') +20 More

</template>

<script setup lang="ts">
import { useHotelDetail } from '~/composables/hotel/useHotelDetail'

const { hotelFacilities } = storeToRefs(useHotelDetail())

// Map object facilities
const facilities = computed(() => {
  const arr = []
  for (const key in hotelFacilities.value) {
    // If value of key true -> return key
    if ({ ...hotelFacilities.value }[key]) arr.push(key)
  }
  return arr
})
</script>

<style scoped></style>
