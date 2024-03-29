<template lang="pug">
.flex.flex-col(class='gap-1.5')
  //- first image
  figure.w-full.h-90px.rounded.overflow-auto.border.cursor-pointer.transition-all(@click='show(0)' class='hover:opacity-90')
    nuxt-img(
      :src='formated?.first[0]'
      alt="Yeah", 
      class='object-cover object-center w-full h-full',
      loading='lazy'
      decoding='async'
    )
  .grid.grid-cols-3.h-12(class='gap-1.5')
    //- Image 1
    figure.h-12.rounded.overflow-hidden.border.cursor-pointer.transition-all(@click='show(1)' class='hover:opacity-90')
      nuxt-img(
        :src='formated?.rest[0]'
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
      )
    //- Image 2
    figure.h-12.rounded.overflow-hidden.border.cursor-pointer.transition-all(@click='show(2)' class='hover:opacity-90')
      nuxt-img(
        :src='formated?.rest[1]'
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
      )
    //- Image 3
    figure.h-12.rounded.overflow-hidden.relative.cursor-pointer.transition-all.border(@click='show(3)' class='hover:opacity-90')
      nuxt-img(
        :src='formated?.rest[2]'
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
      )
      .absolute(class='inset-0 bg-gradient-to-b from-black/40 from-0% to-black/40 to-100%')
        .flex.items-center.justify-center.h-full(@click='show(4)')
          span.font-bold.text-white.text-xs + {{restCountString}}
  shared-gallery-carousel(
    v-model:show='showGallery'
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

const showGallery = ref(false)
const index = ref(0)
function show(idx: number) {
  index.value = idx
  if (idx > props.photos.length - 1) 
    index.value = props.photos.length - 1
  
  showGallery.value = true
}
</script>

<style scoped></style>
