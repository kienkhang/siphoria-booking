<template lang="pug">
figure.rounded-lg.w-80.h-480px.relative.overflow-hidden.select-none
  .overlay-background.absolute.inset-0(class='bg-gradient-to-b from-black/0 to-black/60 group/hotel')
    .absolute.p-6.bottom-0.text-center.w-full
      span.text-2xl.font-bold.text-white(class='group-hover/hotel:animate-bounce') {{$t(hotelType.name)}}
  img(
    loading='lazy'
    decoding='async'
    alt='famous-place'
    class='object-cover object-center w-full h-full '
    :src='hotelType.imageUrl'
  )
</template>

<script setup lang="ts">
defineProps<{
  hotelType: {
    id: string
    name: string
    imageUrl: string
    url?: string
  }
}>()
</script>

<style scoped></style>
