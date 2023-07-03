<template lang="pug">
button.flex-inline.items-center.transition-all.font-medium(class='active:focus:scale-95 hover:bg-opacity-90' @click='$emit("click")' )
  slot
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'click'): any
}>()
</script>

<style scoped></style>
