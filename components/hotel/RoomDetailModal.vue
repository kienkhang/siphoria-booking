<template lang="pug">
NModal(
  :show='show' 
  @mask-click='closeModal'
)
  .bg-white.max-w-5xl.w-full.rounded-lg.overflow-hidden.relative(class='h-full max-h-600px')
    .grid.grid-cols-3
      .carousel-index(class='col-span-2')
        //- Index
        ThumbsGallery(
          :photos='photos'
        )
      .info-detail.px-5.py-6(class='col-span-1')
        HotelRoomDetailInfo
    .absolute.top-2.right-2
      button.w-5.h-5(class='cursor-pointer select-none i-mdi:close' @click='closeModal()')
</template>

<script setup lang="ts">
import ThumbsGallery from '../shared/ThumbsGallery.vue'

// Define Props
const props = defineProps<{
  show: boolean
  photos: string[]
}>()
// Define Emits
const emit = defineEmits<{
  (e: 'update:show', value: boolean): void
}>()

function closeModal() {
  emit('update:show', false)
}
</script>

<style scoped></style>
