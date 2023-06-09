<template lang="pug">
UPopover(mode='click' class='w-8 h-8')
  .h-9.w-9
    .i-custom-vietnam.h-full.w-full(v-if='isVietNam')
    .i-custom-united-kingdom.h-full.w-full(v-else)
  template(#panel='{ close }')
      .flex.items-center.gap-3.py-2.px-4(class='cursor-pointer hover:bg-gray-300' @click='switchLang("vi",close)')
        .i-custom-vietnam.flex-shrink-0.w-7.h-7
        span Việt Nam
      .flex.items-center.gap-3.py-2.px-4(class='cursor-pointer hover:bg-gray-300' @click='switchLang("en",close)')
        .i-custom-united-kingdom.flex-shrink-0.w-7.h-7
        span English

</template>

<script setup lang="ts">
// Destruct locale
const { language, selectLanguage } = useLanguageStorage()

// is Viet Nam language
const isVietNam = computed(() => language.value === 'vi')

// Switch language function
function switchLang(lang: string, close: () => void) {
  // Select language
  selectLanguage(lang)
  // close popover
  close()
}

onMounted(() => {
  console.log('😃😦😧 ~ locale:', language.value)
})
</script>

<style scoped></style>
