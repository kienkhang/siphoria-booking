const path = 'hotels'
class Hotel {
  // Search hotel
  search = (params: any | {}) => {
    const url = `${path}/search`
    return useGet({ url, params })
  }

  // Get hotel details
  details = () => {}
}

const hotelApi = new Hotel()

export { hotelApi }
