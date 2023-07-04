<template lang="pug">
NModal(:show='show' @mask-click='closeModal')
  .bg-white.w-400px.rounded-lg.px-5.py-6
    //- Login Tab 
    .tabs-list.w-full.flex.items-center.justify-center
      .tab-items.flex.items-center.justify-center.h-9.cursor-pointer(class='w-40' :class='{"shadow-[0px_2px_#FF9900]":tab==="login"}' @click='changeTab("login")')
        span(:class='[{"font-semibold text-vivid":tab==="login"},{"text-gray":tab!=="login"}]') {{$t('form.login_form.login')}}
      .tab-items.flex.items-center.justify-center.h-9.cursor-pointer(class='w-40' :class='{"shadow-[0px_2px_#FF9900]":tab==="signup"}' @click='changeTab("signup")')
        span(:class='[{"font-semibold text-vivid":tab==="signup"},{"text-gray":tab!=="signup"}]') {{$t('form.signup_form.signup')}}
    .tab-panels.mt-4(v-auto-animate)
      LoginSocial
      .panel-item(v-if='tab==="login"')
        LoginForm(@close-modal='closeModal')
      .panel-item(v-else)
        SignupForm(@close-modal='closeModal')

</template>

<script setup lang="ts">
import LoginSocial from './LoginSocial.vue'
import LoginForm from './form/LoginForm.vue'
import SignupForm from './form/SignupForm.vue'

// Define Props
const props = defineProps<{
  show: boolean
}>()
// Define Emits
const emit = defineEmits<{
  (e: 'update:show', value: boolean): void
}>()

function closeModal() {
  emit('update:show', false)
}

// Tab handler -> login or signup
const tab = ref<'login' | 'signup'>('login')

function changeTab(tabValue: 'login' | 'signup') {
  tab.value = tabValue
}
</script>

<style scoped></style>
