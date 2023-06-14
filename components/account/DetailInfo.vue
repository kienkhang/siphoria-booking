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
        span.font-semibold.text-x11 Timezone
      .col-span-9
        span.line-clamp-4 GMT+7
</template>

<script setup lang="ts">
import { useAccountStore } from '~/stores/account'

const { account } = storeToRefs(useAccountStore())
</script>

<style scoped></style>
