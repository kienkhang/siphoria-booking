<template lang="pug">
UPopover(mode='click' class='w-12')
  .h-10.w-12
    .i-custom-vietnam.h-full.w-full(v-if='isVietNam')
    .i-custom-united-kingdom.h-full.w-full(v-else)
  template(#panel)
    .flex.items-center.gap-2.py-1.px-4(class='cursor-pointer hover:bg-gray-300' @click='selectLocale("vi")')
      .i-custom-vietnam.h-10.w-12.flex-shrink-0
      span.font-medium Việt Nam
    .flex.items-center.gap-2.py-1.px-4(class='cursor-pointer hover:bg-gray-300' @click='selectLocale("en")')
      .i-custom-united-kingdom.h-10.w-12.flex-shrink-0
      span.font-medium English

</template>

<script setup lang="ts">
// Destruct locale
const { locale, selectLocale } = useLanguageStorage()

// is Viet Nam language
const isVietNam = computed(() => locale.value === 'vi')
</script>

<style scoped></style>
