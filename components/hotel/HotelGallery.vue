<template lang="pug">
.grid.grid-cols-2.gap-4.relative.h-552px
  //- First image
  .rounded-2xl.overflow-hidden
    nuxt-img(
      :src="formated?.first[0]", 
      alt="Yeah", 
      class='object-cover object-center w-full h-full',
      loading='lazy'
      decoding='async'
    )
  //- Rest images
  .grid.grid-cols-2.grid-rows-2.gap-4
    .rounded-2xl.overflow-hidden(v-for="photo in formated?.rest" :key='photo')
      nuxt-img(
        :src="photo", 
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
      )
  .absolute.bottom-4.right-8
    BaseButton.rounded-3xl.pr-6.pl-4.py-2.flex.items-center.cursor-pointer.bg-white(@click='showModal = true')
      div(class='w-4 h-4 mr-2 i-custom-menu')
      span.text-sm.font-medium Show all photos
  SharedGalleryCarousel(
    v-model:show="showModal"
    :photos='hotelPhotos'
  )
</template>

<script setup lang="ts">
import _remove from 'lodash-es/remove'

const props = defineProps<{
  photos: string
}>()

const hotelPhotos = computed(() => Image2Array(props.photos))

const formated = computed(() => {
  const original = [...hotelPhotos.value]
  const cut = _remove(original, (_, index) => {
    return index === 0
  })
  return { first: cut, rest: original }
})

const showModal = ref(false)
</script>

<style scoped></style>
