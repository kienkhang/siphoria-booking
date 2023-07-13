<template lang="pug">
.w-full.h-80.relative(:style='{background: `url("${locationPhoto}") no-repeat center/cover`}')
  .absolute.inset-0(class='bg-gradient-to-b from-black/0 to-black/60')
    .absolute.p-6.bottom-0.text-center.w-full
      span.text-2xl.font-bold.text-white(class='group-hover/hotel:animate-bounce') {{location?.name}}

</template>

<script setup lang="ts">
import provinces from '@/constants/provinces.json'
import { useSearchHotel } from '~/composables/home/useSearchHotel'

// composable route
const route = useRoute()
// useSearchHotel
const { form } = storeToRefs(useSearchHotel())
// calculate location code
const locationCode = computed(() => (route.query?.city as string) ?? form.value.city)
// find location
const location = computed(() => provinces.find((p) => p.code === +locationCode.value))

const locationPhoto = computed(() => {
  switch (+locationCode.value) {
    case 79:
      return '/assets/images/saigon_resize.jpg'
    case 1:
      return '/assets/images/hanoi_resize.jpg'
    case 48:
      return '/assets/images/danang_resize.jpg'
    case 56:
      return '/assets/images/nhatrang_resize.jpg'
    case 91:
      return '/assets/images/phuquoc_resize.jpg'
    case 49:
      return '/assets/images/hoian_resize.jpg'
    default:
      return '/assets/images/saigon_resize.jpg'
  }
})
</script>

<style scoped></style>
