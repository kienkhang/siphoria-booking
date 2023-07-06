<template lang="pug">
NuxtPage
</template>

<script setup lang="ts">
import { useSearchHotel } from '~/composables/home/useSearchHotel'

definePageMeta({
  layout: 'home',
  title: 'Siphoria | Search Hotel'
})

// Route & Router Composables
const route = useRoute()
const router = useRouter()
// Get from to and url
const from = computed(() => route.query?.from as string)
const to = computed(() => route.query?.to as string)
const n_o_r = computed(() => route.query?.n_o_r as string)

const { form } = storeToRefs(useSearchHotel())

onBeforeMount(() => {
  // If from date < now -> redirect to index
  if (+new Date(from.value || form.value.from) < +new Date()) {
    router.push('/')
  }
  // elif from to < from -> error -> redirect to index
  else if (+new Date(to.value || form.value.to) < +new Date(from.value || form.value.from)) {
    router.push('/')
  }
  // elif n_o_r to < from -> error -> redirect to index
  else if (+n_o_r.value > 10 || +n_o_r.value < 1) {
    router.push('/')
  }
  // else biding form
  else {
    form.value.n_o_r = +n_o_r.value
    form.value.from = from.value
    form.value.to = to.value
  }
})
</script>

<style scoped></style>
