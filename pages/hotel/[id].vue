<template lang="pug">
.max-w-7xl.w-full.mx-auto
  HotelGallery.mt-6(:photos='images')


</template>

<script setup lang="ts">
const route = useRoute()

const hotelId = computed(() => route.params.id as string)
const query = computed(() => route.query)

const { getDetails } = useHotel()
const { executeApi: fetchHotel } = getDetails(query, hotelId)

onMounted(() => {
  fetchHotel()
})
watch(hotelId, () => {
  fetchHotel()
})

//
const images =
  'https://pix8.agoda.net/hotelImages/165511/-1/16515024e4a0aeeec48d3e245bdec52c.jpg?ca=7&ce=1&s=1024x768;https://pix8.agoda.net/hotelImages/165511/-1/704570f8c0b3d98af27e354d01a63408.jpg?ca=7&ce=1&s=1024x768;https://pix8.agoda.net/hotelImages/165511/-1/25dfc171576bfd97fad3d0553c71ce24.jpg?ca=10&ce=1&s=1024x768;https://pix8.agoda.net/hotelImages/165511/-1/455d5a900d23b4fcdfe687c069fb14b5.jpg?ca=7&ce=1&s=1024x768;https://pix8.agoda.net/hotelImages/4874333/0/747e23152295d841504ef38bdde7b3c1.jpg?ce=0&s=1024x768'
</script>

<style scoped></style>
