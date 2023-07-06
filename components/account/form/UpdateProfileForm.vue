<template lang="pug">
FormKit(type='form' v-model:model-value="updateData" name='update_profile_form' id='update_profile_form' @submit="doUpdate" :actions='false' style='width: 100%; padding: 16px;')
  .flex.flex-col.gap-2
    FormKit(type='text' :label='$t("form.update_profile.first_name")'  name="first_name" :placeholder='$t("form.update_profile.first_name_placeholder")' validation="required")
    FormKit(type='text' :label='$t("form.update_profile.last_name")'  name="last_name" :placeholder='$t("form.update_profile.last_name_placeholder")' validation="required")
    FormKit(type='text' :label='$t("form.update_profile.phone")' name="phone" :placeholder='$t("form.update_profile.phone_placeholder")' validation="required")
    FormKit(type="submit" name='update' input-class='w-full') {{$t("form.update_profile.change")}}


</template>

<script setup lang="ts">
import { useAccountStore } from '~/stores/account'

// Define Emits
const emit = defineEmits<{
  (e: 'closeModal'): void
}>()

// TRANSLATE HANLDER
const { t } = useI18n()
// TOAST HANDLER
const toast = useToast()
// UPDATE PROFILE HANDLER
// Define update profile form
const { account } = storeToRefs(useAccountStore())
const updateData = reactive({
  first_name: account.value?.first_name ?? '',
  last_name: account.value?.last_name ?? '',
  phone: account.value?.phone ?? ''
})
// Destruct composable useAuth
const { updateProfile } = useAuth()
// Destruct api call function
const { executeAPI: executeUpdate } = updateProfile(updateData)
async function doUpdate() {
  try {
    // Call api login
    await executeUpdate()
    // close modal
    emit('closeModal')
    // show notification
    toast.add({
      id: 'update_profile_form',
      title: t('toast.notification'),
      description: t('toast.update_profile_form.success'),
      color: 'primary'
    })
  } catch (error: any) {
    // close modal
    emit('closeModal')
    // show notification
    toast.add({
      id: 'update_profile_form',
      title: t('toast.an_error_occurred'),
      description: t('toast.update_profile_form.error'),
      color: 'rose'
    })
  }
}
</script>

<style scoped></style>
