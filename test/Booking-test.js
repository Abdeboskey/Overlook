import chai from "chai"
import Booking from "../src/Booking"
const expect = chai.expect

describe.only('Booking', () => {
  
  const booking = {
    id: "5fwrgu4i7k55hl6sz",
    userID: 9,
    date: "2020/04/22",
    roomNumber: 15,
    roomServiceCharges: [],
  }

  const booking2 = {
    id: "5fwrgu4i7k55hl6t5",
    userID: 43,
    date: "2020/01/24",
    roomNumber: 24,
    roomServiceCharges: [],
  }

  it('should be a function', () => {
    expect(Booking).to.be.a('function')
  })

  it('should be an instance of Booking', () => {
    const reservation = new Booking(booking)
    
    expect(reservation).to.be.an.instanceof(Booking)
  })
  
  it('should have a booking id', () => {
    const reservation = new Booking(booking)
    const anotherReservation = new Booking(booking2)

    expect(reservation.id).to.equal("5fwrgu4i7k55hl6sz")
    expect(anotherReservation.id).to.equal("5fwrgu4i7k55hl6t5")
  })

  it('should have a user id', () => {
    const reservation = new Booking(booking)
    const anotherReservation = new Booking(booking2)

    expect(reservation.userId).to.equal(9)
    expect(anotherReservation.userId).to.equal(43)
  })
})