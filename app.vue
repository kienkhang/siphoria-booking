<script setup lang="ts">
import '@/styles/main.css'
import { appName } from '~/constants'

useHead({
  title: appName
})
useLanguageStorage()
</script>

<template lang="pug">
div
  VitePwaManifest
  NMessageProvider(placement='bottom-right' container-style='borderRadius: 8px' :duration="3000")
    NDialogProvider
      NuxtLayout
        NuxtPage
    UNotifications(:ui='{ width: "w-full max-w-sm"}')
</template>

<style>
html,
body,
#__nuxt {
  font-family: 'Manrope', sans-serif;
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
body {
  background-color: #f7f9fb;
}
</style>
