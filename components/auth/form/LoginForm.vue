<template lang="pug">
FormKit(type='form' v-model:model-value="loginData" name='login_form' id='login_form' @submit="doLogin()" :actions='false' style='width: 100%; padding: 16px;')
  .flex.flex-col.gap-2
    FormKit(type='text' label='Email' name="email" :placeholder='$t("form.login_form.email_placeholder")' validation="required|email")
    FormKit(type="password" :label='$t("form.login_form.password")' name='password' :placeholder='$t("form.login_form.password_placeholder")' validation="required|length:6")
    .flex(class='flex-row-reverse')
      .forgot-pass.font-medium.capitalize.cursor-pointer.select-none.text-crayola(class='hover:opacity-90') {{$t('form.login_form.forgot')}}
    FormKit(type="submit" name='login' input-class='w-full') {{$t('form.login_form.login')}}


</template>

<script setup lang="ts">
const loginData = reactive({
  email: '',
  password: ''
})

async function doLogin() {
  console.log('😃😦😧 ~ loginData:', { ...loginData })
}
</script>

<style scoped></style>
