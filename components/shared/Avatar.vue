<template lang="pug">
.rounded-full.h-48.w-48.border-8.relative.select-none(class='border-platinum')
  img(:src='account?.avatar || appIcon' loading='lazy' decoding='async' class='object-cover w-full h-full rounded-full')
  .absolute.right-0.bottom-0.w-10.h-10.cursor-pointer.rounded-full(class='flex items-center justify-center bg-gray-600 border-8 border-platinum' @click='openWindowSelect')
    div(class='w-4 h-4 i-mdi:camera-outline?mask text-white')
  input.hidden(
    ref='fileSelect'
    type='file'
    @change='doChange'
    accept='image/*'
    :multiple='false'
  )

</template>

<script setup lang="ts">
import appIcon from '@/assets/images/logo-origin.jpg'

import { useAccountStore } from '~/stores/account'

// destruct account store
const { account } = storeToRefs(useAccountStore())

// TRANSLATE HANLDER
const { t } = useI18n()
// TOAST HANDLER
const toast = useToast()
/* 
select image includes 2 step: 
1. click open window select 
2. select image invoke onChange -> update avatar 
*/

const { changeAvatar } = useAuth()
const { executeApi } = changeAvatar()

// define file input ref
const fileSelect = ref<HTMLInputElement | null>(null)

// function open window to select file
function openWindowSelect() {
  function openFile() {
    fileSelect.value && fileSelect.value.click()
  }
  openFile()
}
// function invoke change avatar
function doChange() {
  // If exist target
  if (fileSelect.value) {
    // binding files get from input
    const files = fileSelect.value.files

    // check file > 5 MB
    if (files && files[0].size > 1024 * 1024 * 2) {
      toast.add({
        id: 'update_profile_form',
        title: t('toast.an_error_occurred'),
        description: t('toast.change_avatar.file_large'),
        color: 'rose'
      })
      return
    }
    // Check file is image ?
    if (files && files[0].type.indexOf('image') == -1) {
      toast.add({
        id: 'update_profile_form',
        title: t('toast.an_error_occurred'),
        description: t('toast.change_avatar.be_image'),
        color: 'rose'
      })
      return
    }
    // Call api update avatar
    if (files) {
      executeApi({ images: files[0] })
        .then(() => {
          toast.add({
            id: 'update_profile_form',
            title: t('toast.notification'),
            description: t('toast.change_avatar.success'),
            color: 'primary'
          })
        })
        .catch(() => {
          toast.add({
            id: 'update_profile_form',
            title: t('toast.an_error_occurred'),
            description: t('toast.change_avatar.error'),
            color: 'rose'
          })
        })
    }
  }
}
</script>

<style scoped></style>
