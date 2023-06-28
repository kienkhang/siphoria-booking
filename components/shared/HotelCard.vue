<template lang="pug">
.w-320px.h-380px.p-5.gap-4.rounded-lg.bg-white.shadow-card.overflow-hidden
  figure.h-44.w-full(class='overflow-hidden transition-all rounded-lg card-group')
    n-carousel(draggable autoplay show-arrow)
      nuxt-img(
        v-for="photo in hotelPhotos"
        :src="photo", 
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
        )
  .flex.flex-col.mt-2
    //- Hotel name
    div.max-h-14.hotel-name.text-lg.font-bold.cursor-pointer.line-clamp-2(@click='gotoHotel()') {{hotel.name}}
    .flex.items-center.gap-3.mt-2
      div(class='flex-shrink-0 w-5 h-5 i-custom-location')
      span.hotel-location.text-xs.text-x11.truncate {{ hotel.raw_address }}
    //- span.line-clamp-2.mt-2 The motel is located in the most popular tourist area in Bali, perfect for those of you who like backpackers.
    NRate( size='small', readonly, :value='hotel.rating_code' class='mt-2' color='#F4803F')
    .flex.items-center.justify-between.mt-4.select-none
      span.font-light.text-xl {{ hotel.avg_price }}
      
    

</template>

<script setup lang="ts">
import type { IHotelSearch } from '@/dtos/hotel'
import { Image2Array } from '@/utils/format'
const props = defineProps<{
  hotel: IHotelSearch
}>()

const hotelPhotos = computed(() => Image2Array(props.hotel.hotel_photos))
function gotoHotel() {
  console.log('Goto')
}
</script>

<style scoped></style>
