<template lang="pug">
UPopover(mode='click' class='w-10')
  .h-10.w-10
    .i-custom-vietnam.h-full.w-full(v-if='isVietNam')
    .i-custom-united-kingdom.h-full.w-full(v-else)
  template(#panel)
    .flex.items-center.gap-2.py-1.px-4(class='cursor-pointer hover:bg-gray-300' @click='switchLang("vi")')
      .i-custom-vietnam.h-8.w-8.flex-shrink-0
      span Việt Nam
    .flex.items-center.gap-2.py-1.px-4(class='cursor-pointer hover:bg-gray-300' @click='switchLang("en")')
      .i-custom-united-kingdom.h-8.w-8.flex-shrink-0
      span English

</template>

<script setup lang="ts">
// Destruct locale
const { setLocale, setLocaleCookie, locale } = useI18n()

// is Viet Nam language
const isVietNam = computed(() => locale.value === 'vi')

// Switch language function
function switchLang(lang: string) {
  // Update Cookies lang
  setLocaleCookie(lang)
  // Update I18 lang
  setLocale(lang)
}
</script>

<style scoped></style>
