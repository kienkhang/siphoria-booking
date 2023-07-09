<template lang="pug">
.flex.h-full(:class='[{"flex-col items-center gap-2":axis==="vertical"},{"items-center gap-4":axis==="horizontal"}]')
  //- From time
  .flex.gap-3.items-center
    span.text-28px.font-bold {{  cutFromTime.date }}
    .flex.flex-col
      span.font-bold.text-xs {{  cutFromTime.month }}
      span.text-xs {{  cutFromTime.year }}
  //- To time
  .bg-x11(:class='[{"h-12 w-2px": axis === "vertical"},{"h-2px w-12" : axis === "horizontal"}]')
  .flex.gap-3.items-center
    span.text-28px.font-bold {{ cutToTime.date }}
    .flex.flex-col
      span.font-bold.text-xs {{ cutToTime.month }}
      span.text-xs {{ cutToTime.year }}

</template>

<script setup lang="ts">
const props = defineProps<{
  from: string
  to: string
  axis: 'horizontal' | 'vertical'
}>()

const dayjs = useDayjs()
const cutFromTime = computed(() => ({
  date: dayjs(props.from).format('DD'),
  month: dayjs(props.from).format('MMMM'),
  year: dayjs(props.from).format('YYYY')
}))

const cutToTime = computed(() => ({
  date: dayjs(props.to).format('DD'),
  month: dayjs(props.to).format('MMMM'),
  year: dayjs(props.to).format('YYYY')
}))
</script>

<style scoped></style>
