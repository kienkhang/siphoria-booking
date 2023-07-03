<template lang="pug">
.grid.grid-cols-2.gap-4.relative.h-552px
  //- First image
  .rounded-2xl.overflow-hidden.shadow-card
    nuxt-img(
      :src="formated?.first[0]", 
      alt="Yeah", 
      class='object-cover object-center w-full h-full',
      loading='lazy'
      decoding='async'
    )
  //- Rest images
  .grid.grid-cols-2.grid-rows-2.gap-4
    .rounded-2xl.overflow-hidden.shadow-card(v-for="photo in formated?.rest" :key='photo')
      nuxt-img(
        :src="photo", 
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
      )
  .absolute.bottom-4.right-8
    BaseButton.rounded-3xl.pr-6.pl-4.py-2.flex.items-center.cursor-pointer.bg-white.shadow-search(@click='showModal = true')
      div(class='w-4 h-4 mr-2 i-custom-menu')
      span.text-sm.font-medium Show all photos
  SharedGalleryCarousel(
    v-model:show="showModal"
    :photos='hotelPhotos'
  )
</template>

<script setup lang="ts">
import _remove from 'lodash-es/remove'
import { defaultPhoto } from '@/constants/index'

const props = defineProps<{
  photos: string[]
}>()

// Photos from parent
const hotelPhotos = computed(() => props.photos)

// formated photo. if num of photos < 4, add default photo until rest.lengh == 4
// return 4 photo with slice
const formated = computed(() => {
  const original = [...hotelPhotos.value]
  const cut = _remove(original, (_, index) => {
    return index === 0
  })
  // if hotel photo empty -> cut empty
  if (cut.length < 1) {
    cut.push(defaultPhoto)
  }
  /** 
    - after remove with lodash -> original is the rest of init
    - example: original [1,2,3,4], remove 2, 3  = original [1,4]
    - and cut is [2,3]
  */
  // If photo < 4 -> push photo to 4
  while (original.length < 4) {
    original.push(defaultPhoto)
  }
  return { first: cut, rest: original.slice(0, 4) }
})

const showModal = ref(false)
</script>

<style scoped></style>
