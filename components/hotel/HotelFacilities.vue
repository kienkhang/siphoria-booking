<template lang="pug">
.flex.flex-col.gap-6
  span.text-xl.font-medium What you have in this property
  .grid.grid-cols-5.justify-items-center.gap-6
    HotelFacility(v-for='i in 9')
    BaseButton(class='justify-center w-full p-2 bg-green-300 border rounded-2xl') +20 More

</template>

<script setup lang="ts"></script>

<style scoped></style>
