<template lang="pug">
.w-64.h-max.rounded-xl.bg-white.shadow-room.flex.flex-col.overflow-hidden
  //- Room Gallery
  HotelRoomCardGallery(:photos='room.photos')
  //- Room Info
  .py-6.px-3.flex.flex-col.gap-3.divide-y
    //- Room name
    span.room-name.text-lg.font-medium.text-green-700.line-clamp-2 {{room.name}}
    //- Infomation more
    .flex.flex-col.gap-2
      //- Bed
      .h-10.flex.items-center.gap-2
        .i-custom-bed.w-5.h-5.flex-shrink-0
        span.flex-1 {{room.bed_nums}} bed
        .w-5.h-5.flex-shrink-0.cursor-pointer(class='i-material-symbols:pan-zoom-rounded')
      //- Bath
      .h-10.flex.items-center.gap-2
        .i-custom-bath-room.w-5.h-5.flex-shrink-0
        span.flex-1 {{room.bathroom_nums}} bath
      //- Guest
      .h-10.flex.items-center.gap-2
        .w-5.h-5.flex-shrink-0(class='i-material-symbols:group-outline-rounded')
        span.flex-1 {{adultLabel}}, {{ childrenLabel }}
</template>

<script setup lang="ts">
const props = defineProps<{
  room: {
    description: string
    facilities: {
      air_conditional: boolean
      bbq: boolean
      desk: boolean
      fruit: boolean
      fryer: boolean
      hairdry: boolean
      iron: boolean
      kitchen: boolean
      kitchen_tool: boolean
      private_pool: boolean
      shower: boolean
      slippers: boolean
      sofa: boolean
      soundproof: boolean
      tivi: boolean
      toiletries: boolean
      towels: boolean
      wine: boolean
    }
    id: string
    max_adult: number
    max_children: number
    bed_nums: number
    bathroom_nums: number
    name: string
    photos: string[]
    room_nights: {
      id: string
      inventory: number
      remain: number
      availability_at: string
      updated_at: number
    }[]
    rate_plans: {
      id: string
      name: string
      type: number
      status: number
      free_breakfast: boolean
      free_lunch: boolean
      free_dinner: boolean
      rate_packages: {
        available_at: string
        currency: string
        price: number
        updated_at: number
      }[]
    }[]
    views: {
      beach: boolean
      city: boolean
      lake: boolean
      mountain: boolean
      private_balcony: boolean
      bay: boolean
      sea: boolean
      ocean: boolean
      garden?: boolean
      river?: boolean
    }
  }
}>()

const adultLabel = computed(() => {
  if (props.room.max_adult > 1) {
    return `${props.room.max_adult} adults`
  }
  return `${props.room.max_adult} adult`
})
const childrenLabel = computed(() => {
  if (props.room.max_children > 1) {
    return `${props.room.max_adult} childrens`
  }
  return `${props.room.max_adult} children`
})
</script>

<style scoped></style>
