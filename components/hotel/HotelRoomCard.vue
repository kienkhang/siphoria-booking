<template lang="pug">
.w-64.h-max.rounded-xl.bg-white.shadow-room.flex.flex-col.overflow-hidden
  //- Room Gallery
  HotelRoomCardGallery(:photos='room.photos')
  HotelRoomDetailModal(
    v-model:show='showDetail'
    :photos='room.photos'
    :room='room'
  )
  //- Room Info
  .py-6.px-3.flex.flex-col.gap-3.divide-y
    //- Room name
    span.room-name.text-lg.font-medium.text-green-700.line-clamp-2 {{room.name}}
    //- Infomation more
    .flex.flex-col.gap-2
      //- Bed
      .h-10.flex.items-center.gap-2
        .i-custom-bed.w-5.h-5.flex-shrink-0
        span.flex-1 {{room.bed_nums}} {{$t('hotel_detail_page.bed')}}
        button.w-5.h-5.flex-shrink-0.cursor-pointer(class='i-material-symbols:pan-zoom-rounded' @click='openDetail()')
      //- Bath
      .h-10.flex.items-center.gap-2
        .i-custom-bath-room.w-5.h-5.flex-shrink-0
        span.flex-1 {{room.bathroom_nums}} {{$t('hotel_detail_page.bath')}}
      //- Guest
      .h-10.flex.items-center.gap-2
        .w-5.h-5.flex-shrink-0(class='i-material-symbols:group-outline-rounded')
        span.flex-1 {{adultLabel}}, {{ childrenLabel }}
</template>

<script setup lang="ts">
const props = defineProps<{
  room: IRoom
}>()

const { t } = useI18n()

const adultLabel = computed(() => {
  if (props.room.max_adult > 1) return `${props.room.max_adult} ${t('hotel_detail_page.adults')}`

  return `${props.room.max_adult} ${t('hotel_detail_page.adults')}`
})
const childrenLabel = computed(() => {
  if (props.room.max_children > 1)
    return `${props.room.max_adult} ${t('hotel_detail_page.childrens')}`

  return `${props.room.max_adult} ${t('hotel_detail_page.children')}`
})

// handle show detail room
const showDetail = ref(false)
function openDetail() {
  showDetail.value = true
}
</script>

<style scoped></style>
