<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName
})
useLanguageStorage()
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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
</style>
