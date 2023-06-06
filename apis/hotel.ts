const path = 'hotels'
const admin = 'admin'


interface UploadPhoto {
  images: FormData,
  text: FormData
}
class Hotel {
  createHotel = (data: any | {}) => {
    const url = path
    return usePost({ url, data, requiredToken: true })
  }
  updateHotel = (data: any | {}, hotelId: string) => {
    const url = path + '/' + hotelId
    return usePatch({ url, data, requiredToken: true })
  }
  getHotels = (params: any | {}) => {
    const url = admin + '/hotels'
    return useGet({ url, params, requiredToken: true })
  }
  acceptHotel = (data: any | {}, hotelId: string) => {
    const url = admin + `/accept/${hotelId}`
    return usePatch({ url, data, requiredToken: true })
  }
  updateCmsrate = (data: any | {}, hotelId: string) => {
    const url = admin + `/update-cmsrate/${hotelId}`
    return usePatch({ url, data, requiredToken: true })
  }
  updateRating = (data: any | {}, hotelId: string) => {
    const url = admin + `/update-rating/${hotelId}`
    return usePatch({ url, data, requiredToken: true })
  }
  sendPayout = (data: any | {}, hotelId: string) => {
    const url = path + '/' + `${hotelId}/payout`
    return usePost({ url, data, requiredToken: true })
  }
  resolvePayout = (data: any | {}, payoutId: string) => {
    const url = admin + `/payouts/${payoutId}`
    return usePatch({ url, data, requiredToken: true })
  }
  getPayouts = (params: any | {}) => {
    const url = admin + '/payouts'
    return useGet({ url, params, requiredToken: true })
  }
  getPayoutDetails = (params: any | {}, hotelId: string) => {
    const url = admin + `/payouts/${hotelId}`
    return useGet({ url, params, requiredToken: true })
  }
  partnerGetHotel = (params: any | {}) => {
    const url = path
    return useGet({ url, params, requiredToken: true })
  }
  getRoomsByHotel = (params: any | {}, hotelId: string) => {
    const url = path + '/' + `${hotelId}/rooms`
    return useGet({ url, params, requiredToken: true })
  }
  updatePhotos = (params: UploadPhoto, hotelId: string) => {
    const url = `${path}/${hotelId}/photos`
    return usePost({
      url,
      data: params,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

const hotelsApi = new Hotel()

export { hotelsApi }
