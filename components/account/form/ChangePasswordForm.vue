<template lang="pug">
FormKit(type='form' v-model:model-value="changeData" name='update_profile_form' id='update_profile_form' @submit="doUpdate" :actions='false' style='width: 100%; padding: 16px;')
  .flex.flex-col.gap-2
    FormKit(type="password" :label='$t("form.change_password.current")' name='password' :placeholder='$t("form.change_password.current_placeholder")' validation="required|length:6")
    FormKit(type="password" :label='$t("form.change_password.new")' name='new_password' :placeholder='$t("form.change_password.new_placeholder")' validation="required|length:6")
      //- Confirm rule: ``name = [field_name]_confirm & validation: confirm
    FormKit(type="password" :label='$t("form.change_password.confirm")' name='new_password_confirm' :placeholder='$t("form.change_password.confirm_placeholder")' validation="required|confirm")
    FormKit(type="submit" name='update' input-class='w-full') {{$t("form.change_password.change")}}
</template>

<script setup lang="ts">
// Define Emits
const emit = defineEmits<{
  (e: 'closeModal'): void
}>()

// TRANSLATE HANDLER
const { t } = useI18n()
// TOAST HANDLER
const toast = useToast()
// UPDATE PASSWORD HANDLER
// Define change password form
const changeData = reactive({
  password: '',
  new_password: ''
})
// Destruct composable useAuth
const { changePassword } = useAuth()
// Destruct api call function
const { executeAPI: executeChange } = changePassword(changeData)
async function doUpdate() {
  try {
    // Call api login
    await executeChange()
    // close modal
    emit('closeModal')
    // show notification
    toast.add({
      id: 'change_password',
      title: t('toast.notification'),
      description: t('toast.change_password_form.success'),
      color: 'primary'
    })
  } catch (error: any) {
    // close modal
    emit('closeModal')
    // show notification
    toast.add({
      id: 'change_password',
      title: t('toast.an_error_occurred'),
      description: t('toast.change_password_form.error'),
      color: 'rose'
    })
  }
}
</script>

<style scoped></style>
