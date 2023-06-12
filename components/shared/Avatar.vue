<template lang="pug">
.rounded-full.h-48.w-48.border-8.border-white.relative.select-none
  img(src='https://images.unsplash.com/photo-1666919643134-d97687c1826c' loading='lazy' decoding='async' class='w-full h-full bg-cover rounded-full')
  .absolute.right-0.bottom-0.w-10.h-10.cursor-pointer.rounded-full(class='flex items-center justify-center bg-gray-600 border-8 border-white')
    div(class='w-4 h-4 i-mdi:camera-outline?mask text-white')

</template>

<script setup lang="ts">
import { useAccountStore } from '~/stores/account'

// destruct account store
const { account } = storeToRefs(useAccountStore())
</script>

<style scoped></style>
