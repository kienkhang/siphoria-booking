import type { IHotelSearch } from '~/dtos/hotel'

const useHotelStore = defineStore('hotel__store', () => {
  const hotels = ref<IHotelSearch[]>([])

  return {
    hotels
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useHotelStore, import.meta.hot))

export { useHotelStore }
