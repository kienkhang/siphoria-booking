<template lang="pug">
Swiper(
  :autoplay='{ delay:5000 }',
  effect='fade',
  :loop='true',
  style='width:100%; position: relative;'
  :modules="[SwiperAutoplay]"
)
  SwiperSlide(class='w-full')
    img(
      fit='cover' 
      src='/assets/images/saigon_resize.jpg' 
      loading='lazy' 
      preload
      class='w-full h-[644px]' 
      format='jpg'
      )
  SwiperSlide(class='w-full')
    img(
      fit='cover' 
      src='/assets/images/hanoi_resize.jpg' 
      loading='lazy' 
      preload
      class='w-full h-[644px]' 
      format='jpg'
      )
  SwiperSlide(class='w-full')
    img(
      fit='cover' 
      src='/assets/images/hagiang_resize.jpg' 
      loading='lazy' 
      preload
      class='w-full h-[644px]' 
      format='jpg'
      )
  SwiperSlide(class='w-full')
    img(
      fit='cover' 
      src='/assets/images/nhatrang_resize.jpg' 
      loading='lazy' 
      preload
      class='w-full h-[644px]' 
      format='jpg'
      )
  SwiperSlide(class='w-full')
    img(
      fit='cover' 
      src='/assets/images/vinhhalong_resize.jpg' 
      loading='lazy' 
      preload
      class='w-full h-[644px]' 
      format='jpg'
      )
  SwiperSlide(class='w-full')
    img(
      fit='cover' 
      src='/assets/images/phuquoc_resize.jpg' 
      loading='lazy' 
      preload
      class='w-full h-[644px]' 
      format='jpg'
      )
  .absolute(class='inset-0 z-10 bg-gradient-to-b from-black/70 to-black/20')
    .flex.items-center.justify-center.h-full
      span.text-white.font-bold.text-3xl {{$t('home_page.slogan')}}
</template>

<script setup lang="ts"></script>

<style scoped></style>
