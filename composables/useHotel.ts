import { hotelApi } from '~/apis/hotel'

function useHotel() {
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
    searchHotel
  }
}

export default useHotel
