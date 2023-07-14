<template lang="pug">
.flex.items-center.gap-4
  //- Overview Tab
  .flex.items-center.gap-2.rounded-lg.py-2.text-sm.transition-all.select-none.cursor-pointer(:class="['pr-4 ',{ 'pl-2 bg-crayola text-white': tab==='overview'},{'pl-4 border border-platium': tab!=='overview'}]" @click='$emit("change-tab","overview")')
    .w-5.h-5.flex-shrink-0(class='i-material-symbols:check-small-rounded' v-if="tab==='overview'")
    span {{ $t('account_page.my_wallet.overview') }}
  //- Top-up Tab
  .flex.items-center.gap-2.rounded-lg.py-2.text-sm.transition-all.select-none.cursor-pointer(:class="['pr-4 ',{ 'pl-2 bg-crayola text-white': tab==='top-up'},{'pl-4 border border-platium': tab!=='top-up'}]" @click='$emit("change-tab","top-up")')
    .w-5.h-5.flex-shrink-0(class='i-material-symbols:check-small-rounded' v-if="tab==='top-up'")
    span {{ $t('account_page.my_wallet.topup') }}
  //- Hitory Tab
  .flex.items-center.gap-2.rounded-lg.py-2.text-sm.transition-all.select-none.cursor-pointer(:class="['pr-4 ',{ 'pl-2 bg-crayola text-white': tab==='history'},{'pl-4 border border-platium': tab!=='history'}]" @click='$emit("change-tab","history")')
    .w-5.h-5.flex-shrink-0(class='i-material-symbols:check-small-rounded' v-if="tab==='history'")
    span {{ $t('account_page.my_wallet.history') }}
</template>

<script setup lang="ts">
defineProps<{
  tab: string
}>()
defineEmits<{
  (e: 'change-tab', tabValue: string): void
}>()
</script>

<style scoped></style>
