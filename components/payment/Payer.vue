<template lang="pug">
.w-full.rounded-lg.py-4.px-6.border.bg-white
  .flex.flex-col.gap-4
    span.text-lg.font-bold Contact details 
    span.name {{account?.full_name}}
    span.email {{account?.email}}
    span.phone {{account?.phone}}

</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const { account } = storeToRefs(useAuthStore())
</script>

<style scoped></style>
