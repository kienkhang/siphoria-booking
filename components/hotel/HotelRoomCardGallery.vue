<template lang="pug">
.flex.flex-col.gap-1
  //- first image
  figure.w-full.h-184px.cursor-pointer.transition-all(class='hover:opacity-90' @click='openCarousel(0)')
    nuxt-img(
      :src='formated?.first[0]'
      alt="Yeah", 
      class='object-cover object-center w-full h-full',
      loading='lazy'
      decoding='async'
    )
  .grid.grid-cols-3.gap-1
    //- Image 1
    figure.h-16.rounded-lg.rounded-l-none.overflow-hidden.border.cursor-pointer.transition-all(class='hover:opacity-90' @click='openCarousel(1)')
      nuxt-img(
        :src='formated?.rest[0]'
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
      )
    //- Image 2
    figure.h-16.rounded-lg.overflow-hidden.border.cursor-pointer.transition-all(class='hover:opacity-90' @click='openCarousel(2)')
      nuxt-img(
        :src='formated?.rest[1]'
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
      )
    //- Image 3
    figure.h-16.rounded-lg.rounded-r-none.overflow-hidden.relative.cursor-pointer.transition-all.border(class='hover:opacity-90' @click='openCarousel(3)')
      nuxt-img(
        :src='formated?.rest[2]'
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
      )
      .absolute(class='inset-0 bg-gradient-to-b from-black/40 from-0% to-black/40 to-100%')
        .flex.items-center.justify-center.h-full
          span.font-bold.text-white + {{restCountString}}
  SharedGalleryCarousel(
    v-model:show='showCarousel'
    :photos='photos'
    v-model:index='index'
  )
</template>

<script setup lang="ts">
import _remove from 'lodash-es/remove'
import { defaultPhoto } from '@/constants/index'

const props = defineProps<{
  photos: string[]
}>()

// Photos from parent
const roomPhotos = computed(() => props.photos)

// formated photo. if num of photos < 4, add default photo until rest.lengh == 4
// return 4 photo with slice
const formated = computed(() => {
  const original = [...roomPhotos.value]
  const cut = _remove(original, (_, index) => {
    return index === 0
  })
  // if hotel photo empty -> cut empty
  if (cut.length < 1) cut.push(defaultPhoto)

  /** 
    - after remove with lodash -> original is the rest of init
    - example: original [1,2,3,4], remove 2, 3  = original [1,4]
    - and cut is [2,3]
  */
  // If photo < 4 -> push photo to 4
  while (original.length < 3) original.push(defaultPhoto)

  return { first: cut, rest: original.slice(0, 3) }
})

const restCountString = computed(() => {
  if (roomPhotos.value.length > 4) return `${roomPhotos.value.length - 4}`

  return 'More'
})
// Hanlde show carousel
const showCarousel = ref(false)
const index = ref(0)
function openCarousel(idx: number) {
  index.value = idx
  if (idx > props.photos.length - 1) 
    index.value = props.photos.length - 1
  
  showCarousel.value = true
}
</script>

<style scoped></style>
