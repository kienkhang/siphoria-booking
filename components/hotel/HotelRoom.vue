<template lang="pug">
.flex.flex-col.gap-6.select-none
  span.text-xl.font-medium Where you will stay
  .flex.gap-8(v-for='i in 4')
    HotelRoomCard
    .h-400px.flex-1.bg-gray-300

</template>

<script setup lang="ts">
// Loop and pass room & room type here
</script>

<style scoped></style>
