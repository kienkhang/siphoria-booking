<template lang="pug">
.w-full.h-full
  LazySearchHeader
  .max-w-1440px.mx-auto
    LazySearchFilter.mt-8
    .w-full.mx-auto.mt-9
      .grid.grid-cols-1.gap-12.justify-items-center(class='md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4')
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

// search hotel with composable
const { searchHotel } = useHotel()

const { executeApi: callSearchApi, data } = searchHotel(query)

// mounted and change query -> call api
onMounted(() => {
  callSearchApi()
})

watch(query, () => {
  callSearchApi()
})
</script>

<style scoped></style>
