<template lang="pug">
.h-72px.w-40.flex.flex-col.items-center.select-none
  //- div(class=' i-custom-bar?bg' :class='iconClass')
  nuxt-icon(
    :name='name'
    class='w-8 h-8'
  )
  span.mt-4.capitalize {{ name.replaceAll('_',' ') }}

</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<style>
.nuxt-icon svg {
  width: 32px;
  height: 32px;
  margin-bottom: 0;
}
</style>
