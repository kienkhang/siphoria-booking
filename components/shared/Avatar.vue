<template lang="pug">
.rounded-full.h-48.w-48.border-8.relative.select-none(class='border-platinum')
  img(:src='account?.avatar || appIcon' loading='lazy' decoding='async' class='w-full h-full bg-cover rounded-full')
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

const message = useMessage()
/* 
select image includes 2 step: 
1. click open window select 
2. select image invoke onChange -> update avatar 
*/

const { changeAvatar } = useAuth()
const { executeApi, isLoading } = changeAvatar({})

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
async function doChange(e: Event) {
  // If exist target
  if (fileSelect.value) {
    // binding files get from input
    const files = fileSelect.value.files
    console.log('😃😦😧 ~ doChange ~ files:', files)

    // check file > 5 MB
    if (files && files[0].size > 1024 * 1024 * 5) {
      message.error('File không được lớn hơn 5MB')
    }
    // Check file is image ?
    if (files && files[0].type.indexOf('image') == -1) {
      alert('File phải là hình ảnh')
      return
    }
    // Create form data ->
    let formData = new FormData()
    if (files) {
      for (let i = 0; i < files.length; i++) {
        console.log('fileI', files[i])
        formData.append(`images`, files[i])
        console.log('😃😦😧 ~ doChange ~ formData:', formData)
      }
      // await executeApi(formData)
    }
  }
}
</script>

<style scoped></style>
