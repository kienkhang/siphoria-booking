<template lang="pug">
.w-360px.h-450px.p-5.gap-4.rounded-lg.bg-white.shadow-card.overflow-hidden
  figure.h-36.w-full
    img(
      src="https://images.unsplash.com/photo-1667125095636-dce94dcbdd96", 
      alt="Yeah", 
      srcset="https://images.unsplash.com/photo-1667125095636-dce94dcbdd96",
      class='w-full h-full bg-center bg-cover'
      )
  .flex.flex-col
    //- Hotel name
    div.max-h-14.hotel-name.text-lg.font-bold Surya Kencana
    span.hotel-location.text-sm.text-x11 Legian Nort St, Kuta, Bali
    span.line-clamp-3 The motel is located in the most popular tourist area in Bali, perfect for those of you who like backpackers.
    NRate( size='small', readonly, :value='5')
      
    

</template>

<script setup lang="ts"></script>

<style scoped></style>
