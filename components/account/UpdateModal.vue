<template lang="pug">
BaseModal(:show='show' @mask-click='closeModal')
  .bg-white.w-400px.rounded-lg.px-5.py-6
    //- Login Tab 
    .tabs-list.w-full.flex.items-center.justify-center
      .tab-items.flex.items-center.justify-center.h-9.cursor-pointer(class='w-40' :class='{"shadow-[0px_2px_#FF9900]":tab==="profile"}' @click='changeTab("profile")')
        span(:class='[{"font-semibold text-vivid":tab==="profile"},{"text-gray":tab!=="profile"}]') Update Profile
      .tab-items.flex.items-center.justify-center.h-9.cursor-pointer(class='w-40' :class='{"shadow-[0px_2px_#FF9900]":tab==="change-password"}' @click='changeTab("change-password")')
        span(:class='[{"font-semibold text-vivid":tab==="change-password"},{"text-gray":tab!=="change-password"}]') Change Password
    .tab-panels.mt-4(v-auto-animate)
      .panel-item(v-if='tab==="profile"')
        UpdateProfileForm(@close-modal='closeModal')
      .panel-item(v-else)
        ChangePasswordForm(@close-modal='closeModal')

</template>

<script setup lang="ts">
import ChangePasswordForm from './form/ChangePasswordForm.vue'
import UpdateProfileForm from './form/UpdateProfileForm.vue'

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
const tab = ref<'profile' | 'change-password'>('profile')

function changeTab(tabValue: 'profile' | 'change-password') {
  tab.value = tabValue
}
</script>

<style scoped></style>
