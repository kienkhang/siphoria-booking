<template lang="pug">
.flex.flex-col.gap-4.items-center.select-none(class='group/place')
  figure.w-36.h-36.rounded-full.overflow-hidden.cursor-pointer
    img(
      loading='lazy'
      decoding='async'
      alt='famous-place'
      class='object-cover object-center w-full h-full group-hover/place:opacity-90'
      :src='place.imageUrl'
    )
  span.font-semibold.text-xs.cursor-pointer(class='group-hover/place:animate-bounce') {{place.name}}

</template>

<script setup lang="ts">
defineProps<{
  place: {
    id: string
    name: string
    imageUrl: string
    url?: string
  }
}>()
</script>

<style scoped></style>
