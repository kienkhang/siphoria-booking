interface ICart {
  id: string
  is_sold_out: boolean
  rank_price: number
  converted_price: number
  total_price: number
  start_at: string
  end_at: string
  total_day: number
  rate_plan_id: string
  rate_plans: {
    id: string
    name: string
    type: string
    status: number
    activate: boolean
    created_at: string
    updated_at: string
    free_breakfast: boolean
    free_lunch: boolean
    free_dinner: boolean
    room_type_id: string
    prices: any
  }
  user_id: string
  room_type_id: string
  room_type: {
    id: string
    activated: boolean
    name: string
    description: string
    max_adult: number
    max_children: number
    bed_nums: number
    bathroom_nums: number
    photos: string
    created_at: string
    updated_at: string
    hotel_id: string
    hotel: any
    room_type_facility: {
      room_type_id: string
      air_conditional: boolean
      tivi: boolean
      kitchen: boolean
      private_pool: boolean
      heater: boolean
      iron: boolean
      sofa: boolean
      desk: boolean
      soundproof: boolean
      towels: boolean
      toiletries: boolean
      shower: boolean
      slippers: boolean
      hairdry: boolean
      fruit: boolean
      bbq: boolean
      wine: boolean
      fryer: boolean
      kitchen_tool: boolean
      created_at: string
      updated_at: string
    }
    room_nights: any
    rate_plans: any
    room_type_views: {
      room_type_id: string
      bay: boolean
      sea: boolean
      beach: boolean
      ocean: boolean
      city: boolean
      garden: boolean
      lake: boolean
      mountain: boolean
      river: boolean
      private_balcony: boolean
      created_at: string
      updated_at: string
    }
  }
  hotel_id: string
  hotel: {
    id: string
    name: string
    overview: string
    rating: number
    commission_rate: number
    created_at: string
    updated_at: string
    status: number
    activate: boolean
    province_code: number
    district_code: number
    ward_code: number
    raw_address: string
    hotel_photos: string
    bank_account: string
    bank_beneficiary: string
    bank_name: string
    business_licence: string
    hotelier_id: string
    price_hotel: number
    discount_price: number
    discount_hotel: number
    hotel_type: any
    hotel_facility: {
      hotel_id: string
      beach: boolean
      pool: boolean
      bar: boolean
      no_smoking_room: boolean
      fitness: boolean
      spa: boolean
      bath: boolean
      wifi: boolean
      breakfast: boolean
      casino: boolean
      parking: boolean
      created_at: string
      updated_at: string
    }
    room_types: any
  }
  created_at: string
  updated_at: string
  details: {
    id: string
    remain: number
    adult_num: number
    children_num: number
    day_off: string
    price: number
    cart_id: string
    rate_package_id: string
    room_nights_id: string
    created_at: string
    updated_at: string
  }[]
}

export { ICart }