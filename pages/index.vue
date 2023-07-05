<template lang="pug">
HomeBackgroundSlider
HomeFamousPlace.mt-16
HomeHotelType.mt-16
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  layout: 'home',
  title: 'My Home page'
})

const { openAuthModal } = useAuthStore()

openAuthModal()
</script>

<style scoped></style>
