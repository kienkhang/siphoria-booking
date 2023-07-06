<template lang="pug">
BaseModal(:show='show' @mask-click='closeModal')
  .bg-white.w-400px.rounded-lg.px-5.py-6
    UpdateProfileForm(@close-modal='closeModal')

</template>

<script setup lang="ts">
import UpdateProfileForm from './form/UpdateProfileForm.vue'

// Define Props
defineProps<{
  show: boolean
}>()
// Define Emits
const emit = defineEmits<{
  (e: 'update:show', value: boolean): void
}>()

function closeModal() {
  emit('update:show', false)
}
</script>

<style scoped></style>
