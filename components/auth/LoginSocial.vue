<template lang="pug">
.grid.grid-cols-2.gap-2.px-4
  BaseButton.justify-center.border.border-gray-400.py-2(@click='callGg()')
    .i-custom-google.w-4.h-4.mr-2.flex-shrink-0
    span.font-medium.text-gray-600 Google
  BaseButton.justify-center.border.border-gray-400.py-2(@click='callFb()')
    .i-custom-facebook.w-4.h-4.mr-2.flex-shrink-0
    span.font-medium.text-gray-600 Facebook
</template>

<script setup lang="ts">
import { authApi } from '~/apis/auth'

const { execute: callGg, data: ggData } = authApi.loginGG()
const { execute: callFb, data: fbData } = authApi.loginFB()

watch([ggData, fbData], () => {
  console.log('😃😦😧 ~ watch ~ fbData:', fbData.value)
  console.log('😃😦😧 ~ watch ~ ggData:', ggData.value)
})
</script>

<style scoped></style>
