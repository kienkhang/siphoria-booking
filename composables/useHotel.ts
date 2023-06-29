import { hotelApi } from '~/apis/hotel'
import { useHotelStore } from '~/stores/hotel'

function useHotel() {
  const { hotels } = storeToRefs(useHotelStore())
  // Get Hotel Details API
  function getDetails(params: Ref<{} | any>, hotelId: Ref<string>) {
    const usedGet = hotelApi.details(params.value, hotelId.value)
    // destructuring search hotel
    const { execute } = usedGet
    // custom execute api
    const executeApi = async () => {
      try {
        await execute({ params: params.value })
      } catch (e: any) {
        throw new Error(e)
      }
    }
    return {
      ...usedGet,
      executeApi
    }
  }

  // Search Hotel API
  function searchHotel(params: Ref<any | {}>) {
    const usedSearch = hotelApi.search(params.value)
    // destructuring search hotel
    const { execute, data } = usedSearch
    // custom execute api
    const executeApi = async () => {
      try {
        await execute({ params: params.value })
        hotels.value = data.value
      } catch (e: any) {
        throw new Error(e)
      }
    }
    return {
      ...usedSearch,
      executeApi
    }
  }

  return {
    hotels,
    searchHotel,
    getDetails
  }
}

export default useHotel
