<template lang="pug">
.flex.gap-16
  //- Hotel name and overviews
  .flex.flex-col.gap-6.flex-1
    span.text-4xl.line-clamp-2.font-semibold {{hotel?.name}}
    NRate( size='large', readonly, :value='hotel?.rating' class='mt-2' color='#F4803F')
    .overview  
      span.text-2xl.font-semibold Overview
      div(v-html='overview')

  //- Address and Reviews
  .flex.flex-col.gap-3.max-w-375px.w-full
    //- Google map
    div(class='w-full overflow-hidden border border-metal h-180px rounded-xl')
      iframe(
        class="w-full h-full border-0" 
        style="border:0"
        referrerpolicy="no-referrer-when-downgrade"
        frameborder="0" 
        :src='embedUrl')
    .address
      span.text-xs.font-medium {{ address }}
    .h-1px.w-full.bg-platinum
    .flex.items-center.gap-4
      n-progress(type="circle" :percentage="92" :offset-degree="180" color='#FF9900')
        span.text-3xl.font-medium 4.5
      .flex.flex-col.gap-3.w-full
        //- Stars
        .flex.items-center.justify-between.gap-3.gap-3
          .flex.gap-1.items-center
            span 5 
            NRate( size='small', readonly, :value='1' :count='1' color='#F4803F')
          n-progress(type="line" :percentage="90" :show-indicator="false" color='#1BBA85')
        //- Stars
        .flex.items-center.justify-between.gap-3
          .flex.gap-1.items-center
            span 4
            NRate( size='small', readonly, :value='1' :count='1' color='#F4803F')
          n-progress(type="line" :percentage="80" :show-indicator="false" color='#1BBA85')
        //- Stars
        .flex.items-center.justify-between.gap-3
          .flex.gap-1.items-center
            span 3
            NRate( size='small', readonly, :value='1' :count='1' color='#F4803F')
          n-progress(type="line" :percentage="70" :show-indicator="false" color='#1BBA85')
        //- Stars
        .flex.items-center.justify-between.gap-3
          .flex.gap-1.items-center
            span 2
            NRate( size='small', readonly, :value='1' :count='1' color='#F4803F')
          n-progress(type="line" :percentage="60" :show-indicator="false" color='#1BBA85')
        //- Stars
        .flex.items-center.justify-between.gap-3
          .flex.gap-1.items-center
            span 1
            NRate( size='small', readonly, :value='1' :count='1' color='#F4803F')
          n-progress(type="line" :percentage="50" :show-indicator="false" color='#1BBA85')
    BaseButton(class='justify-center w-full p-2 font-medium border rounded-lg text-crayola border-crayola') Xem bình luận


</template>

<script setup lang="ts">
import { useHotelDetail } from '@/composables/hotel/useHotelDetail'
// const address = ref('Cam Ranh Riviera Beach Resort & Spa - All Exclusive')

const { hotel } = storeToRefs(useHotelDetail())
const address = computed(() => hotel.value?.raw_address)

const embedUrl = computed(() => {
  if (address.value) {
    return `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
      address.value
    )}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=18`
  }
})
const overview = computed(() => hotel.value?.overview)
</script>

<style scoped></style>
