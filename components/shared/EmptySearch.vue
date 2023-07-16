<template lang="pug">
.flex.flex-col.items-center.justify-center.w-full.h-full.gap-4
  div(class='i-custom-empty-box?bg' :style='style')
  span.text-3xl.font-bold {{ $t(title) }}
  span.text-center {{ $t(content) }}


</template>

<script setup lang="ts">
const props = defineProps<{
  empty: {
    size: number
    title: string
    content: string
  }
}>()

const { content, size, title } = toRefs(props.empty)

const style = computed(() => {
  return {
    width: `${size.value}px`,
    height: `${size.value}px`
  }
})
</script>

<style scoped></style>
