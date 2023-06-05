<template lang="pug">
BaseModal(:show="show" :class='"max-w-[343px] bg-white rounded-lg"' @mask-click='closeModal')
  HTabGroup(:selectedIndex='tabIndex' @change='changeTab' :defaultIndex='0' as='div' class='px-5 py-6')
    HTabList(class='flex items-center justify-center' style='')
      HTab(as='div' v-slot='{selected}')
        button.flex.justify-center.border-b-2(class='w-40 h-9' :class='["",{"border-emerald":selected}]')
          span(:class='[{"text-gray":!selected},{"font-semibold text-emerald":selected}]') Login
      HTab(as='div' v-slot='{selected}')
        button.flex.justify-center.border-b-2(class='w-40 h-9' :class='["",{"border-emerald":selected}]')
          span(:class='[{"text-gray":!selected},{"font-semibold text-emerald":selected}]') Signup
    HTabPanels(class='mt-6' style='')
      HTabPanel
        LoginForm
      HTabPanel
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
const tabIndex = ref<number>(0)

const changeTab = (index: number) => {
  tabIndex.value = index
}


</script>

<style scoped></style>
