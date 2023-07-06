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
const toast = useToast()
// LOGIN HANDLER
// Define login form
const loginData = reactive({
  email: '',
  password: ''
})
// Destruct composable useAuth
const { login } = useAuth()
// Destruct api call function
const { executeAPI: executeLogin } = login(loginData)
async function doLogin() {
  try {
    // Call api login
    await executeLogin()
    // close modal
    emit('closeModal')
    // show notification
    toast.add({
      id: 'auth__login',
      title: 'Thông báo',
      description: 'Đăng nhập thành công',
      color: 'primary'
    })
  } catch (error: any) {
    // close modal
    emit('closeModal')
    // show notification
    toast.add({
      id: 'auth__login',
      title: 'Có lỗi xảy ra',
      description: 'Đăng nhập thất bại',
      color: 'rose'
    })
  }
}
</script>

<style scoped></style>
