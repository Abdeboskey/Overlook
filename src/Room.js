class Room {
  constructor(room) {
    this.number = room.number
    this.roomType = room.roomType
    this.hasBidet = room.bidet
    this.bedSize = room.bedSize
    this.numBeds = room.numBeds
  }
}

export default Room 