<template lang="pug">
.flex.flex-col.gap-6
  span.text-xl.font-medium What you have in this property
  .grid.grid-cols-6.justify-items-center.gap-6(v-if='facilities.length > 0')
    LazyHotelFacility(v-for='facility in facilities' :name='facility')
    //- BaseButton(class='justify-center w-full p-2 bg-green-300 border rounded-2xl' v-if='isShowMore') +20 More

</template>

<script setup lang="ts">
import { useHotelDetail } from '~/composables/hotel/useHotelDetail'

const { hotelFacilities } = storeToRefs(useHotelDetail())

const facilities = computed(() => {
  if (hotelFacilities.value) {
    // 0 is key
    // 1 is value
    // filter value true
    const results = Object.entries(hotelFacilities.value).filter((f) => f[1])
    // return keys having value true
    return results.map((r) => r[0])
  }
  return []
})
</script>

<style scoped></style>
