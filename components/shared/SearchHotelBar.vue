<template lang="pug">
div.w-max.h-max
  //- Normal
  .h-12(class='rounded-[60px] text-xs max-w-[720px] w-full flex justify-center items-center bg-cultured cursor-pointer overflow-hidden')
    .location.flex.items-center.gap-1(class='px-4 h-full max-w-[250px] hover:bg-eerie-black/[0.08]')
      div(class='flex-shrink-0 i-custom-location text-crayola w-[18px] h-[18px]')
      span.truncate Selectum Noa Resort Cam Ranh electum Noa Resort Cam Ranh
    .checkin-out.flex.items-center.gap-1(class='px-4 h-full hover:bg-eerie-black/[0.08]' @click='isSelectTime = true')
      div(class='flex-shrink-0 i-custom-calendar text-crayola w-[18px] h-[18px]')
      span {{stayTimeFormat}}
    .checkin-out.flex.items-center.gap-1(class='px-4 h-full hover:bg-eerie-black/[0.08]')
      div(class='flex-shrink-0 i-custom-guests text-crayola w-[18px] h-[18px]')
      span 1 adult, 0 Child, 2 Rooms
    .w-10.h-10.rounded-full.flex.items-center.justify-center.flex-shrink-0.bg-blue-500.mr-1
      div(class='flex-shrink-0 w-6 h-6 text-white i-custom-search')
  .relative
    NDatePicker(type='daterange' v-model:value='stayTime' v-model:show='isSelectTime' class='absolute invisible -mt-8 -translate-x-1/2 left-1/2' placement='bottom')
  teleport(to='body')
    .fixed.search-time-overlay.inset-0(class='z-10 bg-black/50' v-if='isSelectTime')
  //- Click search
</template>

<script setup lang="ts">
// Handler time
// import dayjs handl format time
const dayjs = useDayjs()

const isSelectTime = ref(false)
// Array range time
const stayTime = ref()
// Show date in search bar
const stayTimeFormat = computed(() => {
  if (stayTime.value) {
    return `${dayjs(stayTime.value[0]).format('DD MMM, YYYY')} - ${dayjs(stayTime.value[1]).format(
      'DD MMM, YYYY'
    )}`
  }
  return `${dayjs().format('DD MMM, YYYY')} - ${dayjs().format('DD MMM, YYYY')}`
})

// Get checkin time, example: 2023-10-20
const checkinTime = computed(() => {
  if (stayTime.value) {
    return dayjs(stayTime.value[0]).format('YYYY-MM-DD')
  }
})
// Get checkout time, example: 2023-10-22
const checkoutTime = computed(() => {
  if (stayTime.value) {
    return dayjs(stayTime.value[1]).format('YYYY-MM-DD')
  }
})
</script>

<style></style>
