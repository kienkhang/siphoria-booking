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
      return 'https://ik.imagekit.io/b4bytdpcj/siphoria/hochiminh.jpg?updatedAt=1686818926686'
    case 1:
      return 'https://ik.imagekit.io/b4bytdpcj/siphoria/hanoi.jpg?updatedAt=1686818926324'
    case 48:
      return 'https://ik.imagekit.io/b4bytdpcj/siphoria/danang.jpg?updatedAt=1686818927053'
    case 56:
      return 'https://ik.imagekit.io/b4bytdpcj/siphoria/khanhhoa.jpg?updatedAt=1686818925546'
    case 91:
      return 'https://ik.imagekit.io/b4bytdpcj/siphoria/phuquoc.jpg?updatedAt=1686818926852'
    case 49:
      return 'https://ik.imagekit.io/b4bytdpcj/siphoria/hoian.jpg?updatedAt=1686818927217'
    default:
      return 'https://ik.imagekit.io/b4bytdpcj/siphoria/hoian.jpg?updatedAt=1686818927217'
  }
})
</script>

<style scoped></style>
