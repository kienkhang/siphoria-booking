<template lang="pug">
.flex.flex-col
  div.max-h-24
    span.text-xl.font-semibold.line-clamp-2 {{ room.name }}
  .mt-5.flex.flex-col.gap-2
    p.font-semibold.text-lg {{ $t(`hotel_detail_page.room_information`) }} 
    p(v-html='room.description')
    .facilities
      p.font-semibold.text-lg {{ $t(`hotel_detail_page.facilities`) }} 
      .grid.grid-cols-2.gap-4.mt-2
        .flex.gap-2(v-for='f in facilities' :key='f')
          .w-4.h-4(class='i-mdi:check text-crayola')
          span.text-sm.font-medium {{ $t(`hotel_detail_page.room_facilities.${f}`) }} 
    .views
      p.font-semibold.text-lg {{ $t(`hotel_detail_page.views`) }} 
      .grid.grid-cols-2.gap-4.mt-2
        .flex.gap-2(v-for='v in views' :key='v')
          .w-4.h-4(class='i-mdi:check text-crayola')
          span.text-sm.font-medium {{ $t(`hotel_detail_page.room_views.${v}`) }}

</template>

<script setup lang="ts">
// Define Props
const props = defineProps<{
  room: IRoom
}>()

// Map object facilities
const facilities = computed(() => {
  const arr = []
  for (const key in props.room.facilities) {
    // If value of key true -> return key
    if ({ ...props.room.facilities }[key]) arr.push(key)
  }
  return arr
})

// Map object views
const views = computed(() => {
  const arr = []
  for (const key in props.room.views) {
    // If value of key true -> return key
    if ({ ...props.room.views }[key]) arr.push(key)
  }
  return arr
})
</script>

<style scoped></style>
