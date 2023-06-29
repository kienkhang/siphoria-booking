<template lang="pug">
NModal(
  v-model:show='show'
  :mask-closable='true'
)
  .flex.items-center.justify-between.w-full.relative.px-4
    //- Left arrow 
    .rounded-full.w-10.h-10.bg-white.flex.items-center.justify-center.flex-shrink-0.cursor-pointer.select-none(
      :class='["hover:opacity-90", {"cursor-not-allowed bg-x11":!isPrev}]'
      @click='prev()'
    )
      .w-6.h-6(class='rotate-90 i-custom-chevron-down')
    //- Image
    div
      n-carousel.max-w-747px.w-max(
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
    //- Right arrow
    .rounded-full.w-10.h-10.bg-white.flex.items-center.justify-center.flex-shrink-0.cursor-pointer.select-none(
      :class='["hover:opacity-90", {"cursor-not-allowed bg-x11":!isNext}]'
      @click='next()'
    )
      .w-6.h-6(class='-rotate-90 i-custom-chevron-down')
    teleport(to='body')
      .fixed.inset-0(class='z-50 bg-black/25 backdrop-blur-1px mask-overlay dark:bg-white/50' v-if='show')
</template>

<script setup lang="ts">
const props = defineProps<{
  photos: string[]
}>()
const show = defineModel<boolean>('show')

const index = ref(0)

function update(currentIndex: number) {
  index.value = currentIndex
}

const isNext = computed(() => index.value < props.photos.length)
const isPrev = computed(() => index.value > 0)
function next() {
  if (isNext.value) {
    index.value++
  }
}
function prev() {
  if (isPrev.value) {
    index.value--
  }
}
</script>

<style scoped></style>
