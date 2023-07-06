<template lang="pug">
.max-w-7xl.w-full.mx-auto
  LazyHotelGallery.mt-6(:photos='images')
  LazyHotelInfo.mt-16
  LazyHotelFacilities.mt-16
  LazyHotelRoom.mt-16

</template>

<script setup lang="ts">
import { useHotelDetail } from '~/composables/hotel/useHotelDetail'

const route = useRoute()

const hotelId = computed(() => route.params.id as string)
const query = computed(() => route.query)

const { getDetails } = useHotel()
const { hotel } = storeToRefs(useHotelDetail())
const { executeApi: fetchHotel, data } = getDetails(query, hotelId)

onBeforeMount(async () => {
  await fetchHotel()
  // hotel.value = hotelData
})
watch(hotelId, async () => {
  await fetchHotel()
  // hotel.value = hotelData
})
whenever(data, () => {
  hotel.value = data.value
})
//
const images = computed(() => {
  if (hotel.value) 
    return hotel.value?.hotel_photos
  
  return []
})
</script>

<style scoped></style>
