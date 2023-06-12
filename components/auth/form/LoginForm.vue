<template lang="pug">
FormKit(type='form' v-model:model-value="loginData" name='login_form' id='login_form' @submit="doLogin()" :actions='false' style='width: 100%; padding: 16px;')
  .flex.flex-col.gap-2
    FormKit(type='text' label='Email' name="email" :placeholder='$t("form.login_form.email_placeholder")' validation="required|email")
    FormKit(type="password" :label='$t("form.login_form.password")' name='password' :placeholder='$t("form.login_form.password_placeholder")' validation="required|length:6")
    .flex(class='flex-row-reverse')
      .forgot-pass.font-medium.capitalize.cursor-pointer.select-none.text-crayola.text-sm(class='hover:opacity-90') {{$t('form.login_form.forgot')}}
    FormKit(type="submit" name='login' input-class='w-full') {{$t('form.login_form.login')}}


</template>

<script setup lang="ts">
// Define Emits
const emit = defineEmits<{
  (e: 'closeModal'): void
}>()

// TOAST HANDLER
const toast = useMessage()
// LOGIN HANDLER
// Define login form
const loginData = reactive({
  email: '',
  password: ''
})
// Destruct composable useAuth
const { login, getMe } = useAuth()
// Destruct api call function
const { executeAPI: executeLogin } = login(loginData)
const { executeAPI: fetchAccount } = getMe()
async function doLogin() {
  try {
    // Call api login
    await executeLogin()
    // then fetch after
    await fetchAccount()
    // close modal
    emit('closeModal')
    // show notification
    toast.success('Đăng nhập thành công')
  } catch (error: any) {
    // close modal
    emit('closeModal')
    // show notification
    toast.error(error?.response?.data?.message)
  }
}
</script>

<style scoped></style>
