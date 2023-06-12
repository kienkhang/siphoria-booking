<template lang="pug">
.p-6.rounded-20px.flex.flex-col.bg-cover(class='min-h-240px' :style='platinumBg')
  .flex.justify-between.items-center
    div(class='i-custom-logo-text-nocolor?bg h-14 w-28')
    span.font-bold(:style='platinumText') PLATINUM
  .flex-1.flex.flex-col.justify-center.font-bold(:style='platinumText')
    span.uppercase Tran Kien Khang
    span 0912874491
  .flex.items-center.gap-4(:style='platinumText')
    .flex.flex-col.gap-2px 
      span.uppercase MEMBER SINCE
      span APR 05, 2022
    .flex.flex-col.gap-2px 
      span.uppercase valid thru
      span APR 05, 2023


</template>

<script setup lang="ts">
// defineProps<{
//   card: any
// }>()
import platinumImg from '@/assets/images/card/platinum.png'

const platinumBg = {
  background: `url('${platinumImg}') no-repeat center/cover`
}
const platinumText = {
  background:
    'linear-gradient(270deg, #CFCFCF 0%, #FFFFFF 23%, #C6C6C6 41%, #E4E4E4 59%, #989898 77%, #9E9E9E 100%)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  'background-clip': 'text',
  'text-fill-color': 'transparent',
  'text-shadow': '0px 0px 5px rgba(0, 0, 0, 0.25)'
}
const diamondText = {
  background:
    'linear-gradient(270deg, #FBC926 -12.39%, #E7D28E -12.38%, #C3922E 128.28%, #DBCEA5 128.29%)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  'background-clip': 'text',
  'text-fill-color': 'transparent',
  'text-shadow': '0px 0px 5px rgba(0, 0, 0, 0.25)'
}
</script>

<style scoped></style>
