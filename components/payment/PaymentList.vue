<template lang="pug">
div.w-560px.h-max.px-8.pt-4.border.border-platinum.rounded-2xl.bg-white
  .flex.flex-col.gap-6
    div(v-for='i in 2' :key='i')
      PaymentItem
      .w-full.h-1px.bg-platinum.mt-6
  .flex.items-center.justify-between.py-3
    div
      h1.font-bold.text-lg 3 bookings
      h3 9 room nights
    span.total.text-28px.font-medium.text-green-700 {{ VND(''+ 9640500) }} VND


</template>

<script setup lang="ts"></script>

<style scoped></style>
