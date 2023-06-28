<template lang="pug">
div.w-max.h-max
  //- Normal
  .h-12(class='rounded-[60px] text-xs max-w-[720px] w-full flex justify-center items-center bg-cultured cursor-pointer overflow-hidden')
    SharedSearchLocation
    SharedSearchTime
    SharedSearchGuest
    .w-10.h-10.rounded-full.flex.items-center.justify-center.flex-shrink-0.bg-blue-500.mr-1(@click='doSearch')
      div(class='flex-shrink-0 w-6 h-6 text-white i-custom-search')
teleport(to='body')
  .fixed.search-time-overlay.inset-0(class='z-10 bg-black/50' @click='focus=""' v-if='isFocus')
  //- Click search
</template>

<script setup lang="ts">
import { useSearchHotel } from '~/composables/home/useSearchHotel'

// router hooks
const router = useRouter()

const { isFocus, focus, form } = storeToRefs(useSearchHotel())

function doSearch() {
  router.push({
    path: '/search',
    query: form.value
  })
  console.log('😃😦😧 ~ form:', form.value)
}
</script>

<style></style>
