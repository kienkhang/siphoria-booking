interface IHotel {
  // Basic
  hotelier_id: string
  id: string
  name: string
  overview: string
  activate: boolean
  hotel_photos: string
  raw_address: string
  bank_account: string
  bank_name: string
  bank_beneficiary: string
  // Additional & Hotel Type
  hotel: boolean
  apartment: boolean
  resort: boolean
  villa: boolean
  camping: boolean
  motel: boolean
  homestay: boolean
  beach: boolean
  pool: boolean
  bar: boolean
  no_smoking_room: boolean
  fitness: boolean
  bath: boolean
  wifi: boolean
  breakfast: boolean
  casio: boolean
  parking: boolean
  spa: boolean
  // district & province & ward
  district: number
  province: number
  ward: number
  bussiness_license: string
  // Facilities
  hotel_facility?: {
    bar: boolean
    bath: boolean
    beach: boolean
    breakfast: boolean
    casino: boolean
    fitness: boolean
    hotel_id: string
    no_smoking_room: boolean
    parking: boolean
    pool: boolean
    spa: boolean
    wifi: boolean
  }
  // Hotel Type
  hotel_type?: {
    apartment: boolean
    camping: boolean
    homestay: boolean
    hotel: true
    hotel_id: string
    motel: boolean
    resort: boolean
    villa: boolean
  }
}

interface IHotelSearch {
  id: string
  name: string
  overview: string
  rating_code: number
  province_code: number
  raw_address: string
  hotel_photos: string
  is_available: string
  avg_price: string | number
}

interface IHotelDetail {
  activated: boolean
  city_code: string
  country_code: string
  district_code: string
  raw_address: string
  facilities: {
    beach: boolean
    pool: boolean
    bar: boolean
    no_smoking_room: boolean
    fitness: boolean
    spa: boolean
    bath: boolean
    wifi: boolean
    breakfast: boolean
    casio: boolean
    parking: boolean
  }
  id: string
  created_at: number
  name: string
  overview: string
  hotel_photos: string[]
  rating: number
  room_types: {
    description: string
    facilities: {
      air_conditional: boolean
      bbq: boolean
      desk: boolean
      fruit: boolean
      fryer: boolean
      hairdry: boolean
      iron: boolean
      kitchen: boolean
      kitchen_tool: boolean
      private_pool: boolean
      shower: boolean
      slippers: boolean
      sofa: boolean
      soundproof: boolean
      tivi: boolean
      toiletries: boolean
      towels: boolean
      wine: boolean
    }
    id: string
    max_adult: number
    max_children: number
    bed_nums: number
    bathroom_nums: number
    name: string
    photos: string[]
    room_nights: {
      id: string
      inventory: number
      remain: number
      availability_at: string
      updated_at: number
    }[]
    rate_plans: {
      id: string
      name: string
      type: number
      status: number
      free_breakfast: boolean
      free_lunch: boolean
      free_dinner: boolean
      rate_packages: {
        available_at: string
        currency: string
        price: number
        updated_at: number
      }[]
    }[]
    views: {
      beach: boolean
      city: boolean
      lake: boolean
      mountain: boolean
      private_balcony: boolean
      bay: boolean
      sea: boolean
      ocean: boolean
      garden?: boolean
      river?: boolean
    }
  }[]
  updated_at: number
}

type IHotelAdd = Omit<IHotel, 'id' | 'hotel_photos' | 'bussiness_license'>
type IHotelUpdate = Omit<IHotel, 'id' | 'hotel_photos' | 'bussiness_license'>

export { IHotel, IHotelAdd, IHotelUpdate, IHotelSearch, IHotelDetail }
