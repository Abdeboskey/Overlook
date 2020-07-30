class Booking {
  constructor(booking) {
    this.id = booking.id
    this.userId = booking.userID
    this.date = booking.date
    this.roomNumber = booking.roomNumber
    this.roomServiceCharges = []
  }

  orderRoomService(menuItem) {
    this.roomServiceCharges.push(menuItem.price)
  }

  getRoomServiceBill() {
    return this.roomServiceCharges.reduce((total, charge) => {
      total += charge
      return total
    }, 0)
  }
}

export default Booking