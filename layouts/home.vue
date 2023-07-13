<template lang="pug">
div(v-auto-animate)
  LazyTheHeader
  slot
  .p-t-10.w-full
  .h-120px(ref='el')
  LazyTheFooter(v-if='isVisible && !isCart')
</template>

<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'

const route = useRoute()

const isCart = computed(() => route.name === 'cart')

// ======= HANDLE SHOW FOOTER WHEN SCROLL BOTTOM ==========
const el = ref<HTMLElement | null>()
const isVisible = useElementVisibility(el)
</script>
