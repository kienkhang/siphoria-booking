<template lang="pug">
.w-320px.h-390px.p-5.rounded-lg.bg-white.shadow-card.overflow-hidden(
  
)
  .flex.flex-col.gap-4.w-full.h-full
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
    .flex.flex-col.mt-2.flex-1 
      //- Hotel name
      .name-and-location
        nuxt-link.max-h-14.hotel-name.text-lg.font-bold.cursor-pointer.line-clamp-2(
          :to= '{ path: `/hotel/${hotel.id}`, query:query }'
        ) {{ hotel.name }}
        .flex.items-center.gap-3.mt-2
          div(class='flex-shrink-0 w-5 h-5 i-custom-location')
          span.hotel-location.text-xs.text-x11.truncate {{ hotel.raw_address }}
      .rate-and-prices.mt-auto
        NRate( size='small', readonly, :value='hotel.rating_code' class='mt-2' color='#F4803F')
        .price.mt-2.select-none
          .rounded-md.p-2.px-3.w-max.border.border-red-400.bg-red-100(v-if='isSoldOut')
            span.font-bold.text-pink-600 Sold out
          div(v-else)
            span.font-semibold.text-xl {{ VND(hotelPrice+'') }} VND &nbsp;
            span.font-semibold.text-lg / night
      
    

</template>

<script setup lang="ts">
import type { IHotelSearch } from '@/dtos/hotel'
import { Image2Array, VND } from '@/utils/format'

const props = defineProps<{
  hotel: IHotelSearch
}>()

const route = useRoute()

const query = computed(() => route.query)

const hotelPhotos = computed(() => Image2Array(props.hotel.hotel_photos))

const isSoldOut = computed(() => props.hotel.avg_price === 'sold_out')

const hotelPrice = computed(() => Math.ceil(+props.hotel.avg_price))
</script>

<style scoped></style>
