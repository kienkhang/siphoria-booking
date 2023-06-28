<template lang="pug">
.max-w-1440px.mx-auto
  .flex.items-center.justify-between.flex-wrap.gap-y-12
    LazySharedHotelCard(v-for='hotel in data' :hotel='hotel' :key='hotel?.id')
  

</template>

<script setup lang="ts">
import useHotel from '~/composables/useHotel'
definePageMeta({
  layout: 'home',
  title: 'Siphoria | Search Hotel'
})

// route hooks
const route = useRoute()
// Get url string
const query = computed(() => route.query)

// search hotel when mOunted search page
const { searchHotel } = useHotel()

const { executeApi: callSearchApi, data } = searchHotel(query)

whenever(data, () => {
  console.log('😃😦😧 ~ data:', data.value)
})
onMounted(() => {
  callSearchApi()
})
</script>

<style scoped></style>
