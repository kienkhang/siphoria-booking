<template lang="pug">
BaseButton.px-4.py-2.border.border-white.text-white.rounded-lg(class='hover:bg-white hover:text-green-500' )
  span.font-medium(@click='show = true') {{$t("form.login_form.login")}} / {{$t("form.signup_form.signup")}}
AuthModal(v-model:show='show')
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const { showAuthModal: show } = storeToRefs(useAuthStore())
</script>

<style scoped></style>
