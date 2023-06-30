<template lang="pug">
.flex.flex-col.gap-1
  //- first image
  figure.w-full.h-184px
    nuxt-img(
      src='https://pix8.agoda.net/hotelImages/165511/-1/16515024e4a0aeeec48d3e245bdec52c.jpg'
      alt="Yeah", 
      class='object-cover object-center w-full h-full',
      loading='lazy'
      decoding='async'
    )
  .grid.grid-cols-3.gap-1
    //- Image 1
    figure.h-16.rounded-lg.rounded-l-none.overflow-hidden
      nuxt-img(
        src='https://pix8.agoda.net/hotelImages/165511/-1/16515024e4a0aeeec48d3e245bdec52c.jpg'
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
      )
    //- Image 2
    figure.h-16.rounded-lg.overflow-hidden
      nuxt-img(
        src='https://pix8.agoda.net/hotelImages/165511/-1/16515024e4a0aeeec48d3e245bdec52c.jpg'
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
      )
    //- Image 3
    figure.h-16.rounded-lg.rounded-r-none.overflow-hidden.relative.cursor-pointer.transition-all(class='hover:opacity-90')
      nuxt-img(
        src='https://pix8.agoda.net/hotelImages/165511/-1/16515024e4a0aeeec48d3e245bdec52c.jpg'
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
      )
      .absolute(class='inset-0 bg-gradient-to-b from-black/40 from-0% to-black/40 to-100%')
        .flex.items-center.justify-center.h-full
          span.font-bold.text-white +6

</template>

<script setup lang="ts"></script>

<style scoped></style>
