import type { IHotelDetail } from '~/dtos/hotel'

const useHotelDetail = defineStore('hotel_detail', () => {
  const hotel = ref<IHotelDetail | null>()

  const hotelFacilities = computed(() => hotel.value?.facilities)
  const roomTypes = computed(() => hotel.value?.room_types)

  return {
    hotel,
    hotelFacilities,
    roomTypes
  }
})

export { useHotelDetail }
