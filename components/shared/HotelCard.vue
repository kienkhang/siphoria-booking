<template lang="pug">
.w-360px.h-450px.p-5.gap-4.rounded-lg.bg-white.shadow-card.overflow-hidden
  figure.h-44.w-full(class='overflow-hidden transition-all rounded-lg card-group')
    n-carousel(draggable autoplay show-arrow)
      nuxt-img(
        src="https://i.pinimg.com/originals/0d/c2/43/0dc243d52e9628950fd1668476f4925b.jpg", 
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
        )
      nuxt-img(
        src="https://images2.alphacoders.com/306/thumb-1920-30692.jpg", 
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
        )
  .flex.flex-col.mt-2
    //- Hotel name
    div.max-h-14.hotel-name.text-lg.font-bold.cursor-pointer(@click='gotoHotel()') Surya Kencana 
    span.hotel-location.text-sm.text-x11 Legian Nort St, Kuta, Bali
    span.line-clamp-3.mt-2 The motel is located in the most popular tourist area in Bali, perfect for those of you who like backpackers.
    NRate( size='small', readonly, :value='5' class='mt-2')
    .flex.items-center.justify-between.mt-4.select-none
      .py-3.px-4.text-center.rounded-lg.border-2.border-white.bg-crayola.text-base
        span.font-bold.text-white 800.000đ
      .py-3.px-4.flex.items-center.gap-1(class='text-base transition-all cursor-pointer hover:text-vivid' @click='gotoHotel()')
        div(class='i-mdi:arrow-right')
        span.font-medium Booking now
      
    

</template>

<script setup lang="ts">
function gotoHotel() {
  console.log('Goto')
}
</script>

<style scoped></style>
