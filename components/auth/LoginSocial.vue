<template lang="pug">
.grid.grid-cols-2.gap-2.px-4
  BaseButton.justify-center.border.border-gray-400.py-2(@click='redirectGoogleUrl()')
    .i-custom-google.w-4.h-4.mr-2.flex-shrink-0
    span.font-medium.text-gray-600.text-sm Google
  BaseButton.justify-center.border.border-gray-400.py-2(@click='redirectFacebookUrl()')
    .i-custom-facebook.w-4.h-4.mr-2.flex-shrink-0
    span.font-medium.text-gray-600.text-sm Facebook
</template>

<script setup lang="ts"></script>

<style scoped></style>
