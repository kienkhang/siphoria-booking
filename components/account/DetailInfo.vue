<template lang="pug">
.flex.flex-col.gap-4
  .grid.grid-cols-12.room-name
      .col-span-3
        span.font-semibold.text-x11 Tên
      .col-span-9
        span.font-semibold {{account?.first_name}} {{account?.last_name}}
  .grid.grid-cols-12.room-overview
      .col-span-3
        span.font-semibold.text-x11 Email
      .col-span-9
        span.line-clamp-4 {{account?.email}}
  .grid.grid-cols-12.room-overview
      .col-span-3
        span.font-semibold.text-x11 Phone
      .col-span-9
        span.line-clamp-4 {{account?.phone}}
  .grid.grid-cols-12.room-overview
      .col-span-3
        span.font-semibold.text-x11 Password
      .col-span-9.flex.items-center.gap-3
        span.line-clamp-4 ••••••••••
        .w-4.h-4(class='cursor-pointer i-custom-arrow-spin' @click='openModal()')
  NModal(
    v-model:show='showModal'
  )
    .bg-white.w-400px.rounded-lg.px-5.py-6
      AccountFormChangePasswordForm(@close-modal='closeModal')

</template>

<script setup lang="ts">
import { useAccountStore } from '~/stores/account'

const { account } = storeToRefs(useAccountStore())

const showModal = ref(false)
function openModal() {
  showModal.value = true
}
function closeModal() {
  showModal.value = false
}
</script>

<style scoped></style>
