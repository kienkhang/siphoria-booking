<template lang="pug">
.w-full.h-full
  .carousel(class='relative w-full h-5/6')
    n-carousel.w-full(
      v-model:current-index='index'
      draggable
      :show-dots='false'
    )
      n-carousel-item(
        class='flex items-center'
        v-for="photo in photos"
      )
        nuxt-img(
          :src="photo", 
          alt="Yeah", 
          class='object-cover object-center w-full h-full',
          loading='lazy'
          decoding='async'
        )

    //- Left arrow 
    .rounded-full.w-8.h-8.bg-white.flex.items-center.justify-center.flex-shrink-0.cursor-pointer.select-none(
      :class='["opacity-60 hover:opacity-80 absolute top-1/2 -translate-y-1/2 left-2", {"cursor-not-allowed bg-x11":!isPrev}]'
      @click='prev()'
    )
      .w-6.h-6(class='rotate-90 i-custom-chevron-down')
    //- Right arrow
    .rounded-full.w-8.h-8.bg-white.flex.items-center.justify-center.flex-shrink-0.cursor-pointer.select-none(
      :class='["opacity-60 hover:opacity-80 absolute top-1/2 -translate-y-1/2 right-2", {"cursor-not-allowed bg-x11":!isNext}]'
      @click='next()'
    )
      .w-6.h-6(class='-rotate-90 i-custom-chevron-down')
  .index.p-5.flex-none(class='h-1/6')
    .flex.items-center.gap-3.overflow-x-auto.hide-scroll
      figure.rounded.w-72px.h-50px.overflow-hidden(
        class='cursor-pointer'
        v-for="(photo, idx) in photos" @click='goto(idx)'
      )
        nuxt-img(
          :src="photo", 
          alt="Yeah", 
          class='object-cover object-center w-full h-full',
          loading='lazy'
          decoding='async'
        )
      

</template>

<script setup lang="ts">
const props = defineProps<{
  photos: string[]
}>()
// Handle click next and prev image
const index = ref(0)

const isNext = computed(() => index.value < props.photos.length - 1)
const isPrev = computed(() => index.value > 0)
function next() {
  if (isNext.value) index.value++
}
function prev() {
  if (isPrev.value) index.value--
}

function goto(idx: number) {
  index.value = idx
}
</script>

<style scoped></style>
