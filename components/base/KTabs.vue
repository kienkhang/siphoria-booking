<template lang="pug">
HTabGroup
  HTabList(class='' style='')
    slot(name='tabs')
  HTabPanels(class='' style='')
    slot(name='panels')
</template>

<script setup lang="ts">

defineProps<{
  style:string | Object,
  class:string
  
}>()
</script>

<style scoped></style>
