<template lang="pug">
NModal(
  :show='show' 
  @mask-click='closeModal'
  :close-on-esc='true'
)
  .bg-white.max-w-5xl.w-full.rounded-lg.relative.overflow-hidden
    .grid.grid-cols-3.w-full.h-full(class='max-h-600px')
      .carousel-index.overflow-hidden(class='col-span-2')
        //- Index
        ThumbsGallery(
          :photos='photos'
        )
      .info-detail.px-5.py-6.border-l.overflow-auto.scrollbar-gradient(class='col-span-1 max-h-600px')
        HotelRoomDetailInfo(:room='room')
    .absolute.top-2.right-2
      button.w-5.h-5(class='cursor-pointer select-none i-mdi:close' @click='closeModal()')
</template>

<script setup lang="ts">
import ThumbsGallery from '../shared/ThumbsGallery.vue'

// Define Props
defineProps<{
  show: boolean
  photos: string[]
  room: IRoom
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
