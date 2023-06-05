<template lang="pug">
FormKit(type='form' v-model:model-value="loginData" name='login_form' id='login_form' @submit="doLogin()" :actions='false' style='width: 100%; padding: 16px;')
  FormKit(type='text' label='Email' name="email" placeholder='Nhập email của bạn' validation="required|email")
  FormKit(type="password" label='Password' name='password' placeholder='Nhập mật khẩu của bạn' validation="required|length:1")
  FormKit(type="submit" name='login') Login


</template>

<script setup lang="ts">


const loginData = reactive({
  email: '',
  password: ''
})

const doLogin = async () => {
  console.log('😃😦😧 ~ loginData:', { ...loginData })
}
</script>

<style scoped></style>
