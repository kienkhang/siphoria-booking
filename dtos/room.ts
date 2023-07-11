interface IRoom {
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
}
// [more: string]: any
