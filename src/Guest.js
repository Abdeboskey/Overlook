class Guest {
  constructor(user) {
    this.id = user.id
    this.name = user.name
    this.bookings = []
  }
}

export default Guest