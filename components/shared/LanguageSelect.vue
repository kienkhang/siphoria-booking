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
const { setLocale, setLocaleCookie, locale } = useI18n()
// Inject Formkit change locale
interface FormKitLanguage {
  locale: string
  [key: string]: any
}
const formKitLocale = inject<FormKitLanguage>(Symbol.for('FormKitConfig'))

// is Viet Nam language
const isVietNam = computed(() => locale.value === 'vi')

// Switch language function
function switchLang(lang: string, close: () => void) {
  // Update Cookies lang
  setLocaleCookie(lang)
  // Update I18 lang
  setLocale(lang)
  // Update FormKit lang
  if (formKitLocale) {
    formKitLocale.locale = lang
  }
  // close popover
  close()
}
</script>

<style scoped></style>
