<template lang="pug">
.w-full.h-80.relative(:style='{background: `url("${bgImg}") no-repeat center/cover`}')
  .absolute.inset-0(class='bg-gradient-to-b from-black/0 to-black/60')
    .absolute.p-6.bottom-0.text-center.w-full
      span.text-2xl.font-bold.text-white(class='group-hover/hotel:animate-bounce') Ho Chi Minh

</template>

<script setup lang="ts">
import bgImg from '@/assets/images/saigon_resize.jpg'
</script>

<style scoped></style>
