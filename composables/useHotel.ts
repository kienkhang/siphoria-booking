import { hotelApi } from '~/apis/hotel'

function useHotel() {
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
    const { execute } = usedSearch
    // custom execute api
    const executeApi = async () => {
      try {
        await execute({ params: params.value })
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
    searchHotel,
    getDetails
  }
}

export default useHotel
