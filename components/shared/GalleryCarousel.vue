<template lang="pug">
NModal(
  v-model:show='show'
  :mask-closable='true'
)
  .flex.items-center.justify-between.w-full.relative
    //- Left arrow 
    .rounded-full.w-10.h-10.bg-white.flex.items-center.justify-center.flex-shrink-0.cursor-pointer.select-none(
      class='hover:opacity-90'
      @click='carouse?.prev()'
    )
      .w-6.h-6(class='rotate-90 i-custom-chevron-down')
    //- Image
    div
      n-carousel.max-w-747px.w-max(
        draggable 
        :show-dots='false'
        ref='ca'
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
      class='hover:opacity-90'
      @click='carouse?.next()'
    )
      .w-6.h-6(class='-rotate-90 i-custom-chevron-down')
    teleport(to='body')
      .fixed.inset-0(class='z-50 bg-black/25 backdrop-blur-1px mask-overlay dark:bg-white/50' v-if='show')
</template>

<script setup lang="ts">
import { type CarouselInst } from 'naive-ui'
const props = defineProps<{
  photos: string[]
}>()
const show = defineModel<boolean>('show')

const carouse = ref<CarouselInst>()

const isNext = computed(() => carouse.value?.getCurrentIndex()! < props.photos.length)
const isPrev = computed(() => carouse.value?.getCurrentIndex()! > 0)
// watch(ca, () => {
//   console.log('ca', { ...ca.value. })
// })
</script>

<style scoped></style>
