<template lang="pug">
.w-64.rounded-xl.bg-white.shadow-room.flex.flex-col.overflow-hidden
  //- Room Gallery
  HotelRoomCardGallery
  //- Room Info
  .py-6.px-3.flex.flex-col.gap-3.divide-y
    //- Room name
    span.room-name.text-lg.font-medium.text-green-700.line-clamp-2 Premier Deluxe Double With Balcony
    //- Infomation more
    .flex.flex-col.gap-2
      //- Bed
      .h-10.flex.items-center.gap-2
        .i-custom-bed.w-5.h-5.flex-shrink-0
        span.flex-1 1 queen bed
        .i-custom-chevron-down.w-5.h-5.flex-shrink-0.cursor-pointer
      //- Bath
      .h-10.flex.items-center.gap-2
        .i-custom-bath.w-5.h-5.flex-shrink-0
        span.flex-1 1 bath medium
</template>

<script setup lang="ts"></script>

<style scoped></style>
