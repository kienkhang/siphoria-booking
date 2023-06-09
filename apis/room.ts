const path = 'rooms'
// const admin = 'admin/'
class Room {
  getDetails = (roomId: string) => {
    const url = `${path}/${roomId}`
    return useGet({ url, requiredToken: true })
  }
}

const roomsApi = new Room()

export { roomsApi }
