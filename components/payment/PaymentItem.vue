<template lang="pug">
.flex.gap-6.w-full
  figure.h-32.w-32.rounded.overflow-hidden.border.flex-shrink-0
    nuxt-img(
        :src='defaultPhoto'
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
    )
  .flex.flex-col.gap-6
    .info
      h3.text-lg.font-medium Cam Ranh Riviera Beach Resort
      h6.text-xs.text-metal.line-clamp-1 Tòa nhà Harbour View Tower, số 35, đường Nguyễn Huệ, phường Bến Nghé, quận 1
      .flex.justify-between
        h6.text-xs.text-metal Deluxe King Room
        h6.text-xs.text-x11 April 1 - April 4
    div
      .flex.items-center.justify-between
        .night-count.text-sm.font-medium 3 nights
        .total-price {{ VND(''+ 1664000) }} VND
      .flex.items-center.justify-between
        .night-count.text-sm.font-medium Rank price
        .total-price - {{ VND(''+ 4000 ) }} VND
    .w-full.h-1px.bg-x11
    .flex.flex-row-reverse
      span.total-price.text-base {{ VND(''+ 1660000) }} VND


</template>

<script setup lang="ts">
import { defaultPhoto } from '~/constants'
</script>

<style scoped></style>
