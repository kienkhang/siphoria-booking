import { usePost } from '@/composables/useHttp'

function uploadFiles(files: FormData | {}) {
  const url = 'upload/files'
  return usePost({
    url,
    data: files,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export { uploadFiles }
