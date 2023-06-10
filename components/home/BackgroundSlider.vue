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
      :src='saiGon' 
      loading='lazy' 
      preload
      class='w-full h-[644px]' 
      format='jpg'
      )
  SwiperSlide(class='w-full')
    img(
      fit='cover' 
      :src='haNoi' 
      loading='lazy' 
      preload
      class='w-full h-[644px]' 
      format='jpg'
      )
  SwiperSlide(class='w-full')
    img(
      fit='cover' 
      :src='haGiang' 
      loading='lazy' 
      preload
      class='w-full h-[644px]' 
      format='jpg'
      )
  SwiperSlide(class='w-full')
    img(
      fit='cover' 
      :src='nhaTrang' 
      loading='lazy' 
      preload
      class='w-full h-[644px]' 
      format='jpg'
      )
  SwiperSlide(class='w-full')
    img(
      fit='cover' 
      :src='vinhHaLong' 
      loading='lazy' 
      preload
      class='w-full h-[644px]' 
      format='jpg'
      )
  SwiperSlide(class='w-full')
    img(
      fit='cover' 
      :src='phuQuoc' 
      loading='lazy' 
      preload
      class='w-full h-[644px]' 
      format='jpg'
      )
  .absolute(class='inset-0 z-10 bg-gradient-to-b from-black/70 to-black/20')
    .flex.items-center.justify-center.h-full
      span.text-white.font-bold.text-3xl Nền tảng Giao dịch Dịch vụ Du lịch thế hệ mới
</template>

<script setup lang="ts">
import phuQuoc from '@/assets/images/phuquoc_resize.jpg'
import haNoi from '@/assets/images/hanoi_resize.jpg'
import saiGon from '@/assets/images/saigon_resize.jpg'
import vinhHaLong from '@/assets/images/vinhhalong_resize.jpg'
import haGiang from '@/assets/images/hagiang_resize.jpg'
import nhaTrang from '@/assets/images/nhatrang_resize.jpg'
</script>

<style scoped></style>
