const path = 'hotels'
class Hotel {
  // Search hotel
  search = (params: any | {}) => {
    const url = `${path}/search`
    return useGet({ url, params })
  }

  // Get hotel details
  details = (params: any | {}, hotelId: string) => {
    const url = `${path}/${hotelId}`
    return useGet({ url, params })
  }
}

const hotelApi = new Hotel()

export { hotelApi }
