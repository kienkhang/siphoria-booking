<template lang="pug">
BaseModal(:show='show' @mask-click='closeModal')
  .bg-white.w-500px.rounded-lg.px-5.py-6
    .tabs-list.w-full.flex.items-center.justify-center
      .tab-items.flex.items-center.justify-center.h-9.cursor-pointer(class='w-40' :class='{"shadow-[0px_2px_#FF9900]":tab==="login"}' @click='changeTab("login")')
        span(:class='[{"font-semibold text-vivid":tab==="login"},{"text-gray":tab!=="login"}]') Login
      .tab-items.flex.items-center.justify-center.h-9.cursor-pointer(class='w-40' :class='{"shadow-[0px_2px_#FF9900]":tab==="signup"}' @click='changeTab("signup")')
        span(:class='[{"font-semibold text-vivid":tab==="signup"},{"text-gray":tab!=="signup"}]') Signup
    .tab-panels.mt-2
      .panel-item(v-show='tab==="login"' v-auto-animate)
        LoginForm
      .panel-item(v-show='tab==="signup"' v-auto-animate)
        SignupForm

</template>

<script setup lang="ts">
import LoginForm from './form/LoginForm.vue';
import SignupForm from './form/SignupForm.vue';

// Define Props
const props = defineProps<{
  show: boolean
}>()
// Define Emits
const emit = defineEmits<{
  (e: 'update:show', value: boolean): void
}>()

const closeModal = () => {
  emit('update:show', false)
}

// Tab handler -> login or signup
const tab = ref<'login' | 'signup'>('login')

const changeTab = (tabValue: 'login' | 'signup') => {
  tab.value = tabValue
}


</script>

<style scoped></style>
