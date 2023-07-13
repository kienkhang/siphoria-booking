<template lang="pug">
UPopover(mode='click' class='w-6 h-6')
  .h-6.w-6
    .h-full.w-full(v-if='language === "vi"' class='i-custom-vietnam?bg')
    .h-full.w-full(v-else-if='language === "en"' class='i-custom-united-kingdom?bg')
  template(#panel='{ close }')
      .flex.items-center.gap-3.py-2.px-4(class='cursor-pointer hover:bg-gray-300' @click='switchLang("vi",close)')
        .flex-shrink-0.w-6.h-6(class='i-custom-vietnam?bg')
        span Việt Nam
      .flex.items-center.gap-3.py-2.px-4(class='cursor-pointer hover:bg-gray-300' @click='switchLang("en",close)')
        .flex-shrink-0.w-6.h-6(class='i-custom-united-kingdom?bg')
        span English

</template>

<script setup lang="ts">
// Destruct locale
const { language, selectLanguage } = useLanguageStorage()

// Switch language function
function switchLang(lang: string, close: () => void) {
  // Select language
  selectLanguage(lang)
  // close popover
  close()
}
</script>

<style scoped></style>
