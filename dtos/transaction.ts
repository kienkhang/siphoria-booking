interface ITransaction {
  id: string
  wallet_id: string
  amount: number
  method: string
  currency: string
  status: string
  description: string
  created_at: string
  updated_at: string
}
