<template lang="pug">
.flex.gap-16
  //- Hotel name and overviews
  .flex.flex-col.gap-6.flex-1
    span.text-4xl.line-clamp-2.font-semibold {{hotel?.name}}
    NRate( size='large', readonly, :value='hotel?.rating' class='mt-2' color='#F4803F')
    .overview  
      span.text-2xl.font-semibold {{ $t('hotel_detail_page.overview') }}
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
    //- .h-1px.w-full.bg-platinum
    NWatermark(
      content='Coming soon'
      cross
      :font-size="16"
      :line-height="16"
      :width="192"
      :height="128"
      :x-offset="12"
      :y-offset="28"
      :rotate="-15"
    )
      HotelCommentStatistics.opacity-10



</template>

<script setup lang="ts">
import { useHotelDetail } from '@/composables/hotel/useHotelDetail'

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
