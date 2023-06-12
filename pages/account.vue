<template lang="pug">
.max-w-7xl.w-full.flex.mx-auto
  div(class='w-1/4 mr-4')
    AccountNavbar
  div(class='w-3/4 bg-white shadow-bar')
    NuxtPage
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'account'
})
</script>

<style scoped></style>
