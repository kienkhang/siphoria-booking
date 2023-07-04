<template lang="pug">
.flex.flex-col.h-full.items-center
  //- From time
  .flex.gap-3
    span.text-28px.font-bold {{ fromTime.date }}
    .flex.flex-col
      span.font-bold {{ fromTime.month }}
      span {{ fromTime.year }}
  //- To time
  .flex-1.w-2px.bg-x11
  .flex.gap-3
    span.text-28px.font-bold {{ toTime.date }}
    .flex.flex-col
      span.font-bold {{ toTime.month }}
      span {{ toTime.year }}
</template>

<script setup lang="ts">
const props = defineProps<{
  fromTime: {
    date: string
    month: string
    year: string
  }
  toTime: {
    date: string
    month: string
    year: string
  }
}>()

const dayjs = useDayjs()
</script>

<style scoped></style>
