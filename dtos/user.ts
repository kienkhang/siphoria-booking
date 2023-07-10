interface IUser {
  id: string
  avatar: string
  email: string
  first_name: string
  last_name: string
  full_name: string
  phone: string
  gender: boolean
  role: string
  status: number
  user_key_firebase: string
  created_at: string
  updated_at: string
  password?: string
  user_rank: {
    id: string
    user_id: string
    rank_id: string
    rank: {
      id: string
      name: string
      price: number
      discount: number
      created_at: string
      updated_at: string
    }
    begin_at: string
    created_at: string
    updated_at: string
    expired_at: string
  }
  wallet: {
    id: string
    user_id: string
    name: string
    balance: number
    currency: string
    created_at: string
    updated_at: string
  }
}

type IAddUser = Pick<IUser, 'first_name' | 'last_name' | 'email' | 'role' | 'password'>
type IUpdateUser = Pick<IUser, 'first_name' | 'last_name' | 'status' | 'password' | 'id'>

export { IUser, IAddUser, IUpdateUser }
