import chai from "chai"
import Booking from "../src/Booking"
const expect = chai.expect

describe('Booking', () => {
  
  const booking = {
    id: "5fwrgu4i7k55hl6sz",
    userID: 9,
    date: "2020/04/22",
    roomNumber: 15,
    roomServiceCharges: []
  }

  const booking2 = {
    id: "5fwrgu4i7k55hl6t5",
    userID: 43,
    date: "2020/01/24",
    roomNumber: 24,
    roomServiceCharges: []
  }

  const bltSandwich = {
    item: "BLT Sandwich",
    price: 15.5
  }

  const chickenTenders = {
    item: "Chicken Tenders",
    price: 12.4
  }

  let reservation
  let anotherReservation

  beforeEach(() => {
    reservation = new Booking(booking)
    anotherReservation = new Booking(booking2)
  })

  it('should be a function', () => {
    expect(Booking).to.be.a('function')
  })

  it('should be an instance of Booking', () => {
    const reservation = new Booking(booking)
    
    expect(reservation).to.be.an.instanceof(Booking)
  })
  
  it('should have a booking id', () => {
    expect(reservation.id).to.equal("5fwrgu4i7k55hl6sz")
    expect(anotherReservation.id).to.equal("5fwrgu4i7k55hl6t5")
  })

  it('should have a user id', () => {    
    expect(reservation.userId).to.equal(9)
    expect(anotherReservation.userId).to.equal(43)
  })
  
  it('should have a booking date', () => {
    expect(reservation.date).to.equal("2020/04/22")
    expect(anotherReservation.date).to.equal("2020/01/24")
  })
  
  it('should have a room number', () => {
    expect(reservation.roomNumber).to.equal(15)
    expect(anotherReservation.roomNumber).to.equal(24)
  })
  
  it('should be able to keep track of room service charges', () => {
    expect(reservation.roomServiceCharges).to.deep.equal([])
  })

  it('should be able to add room service charges', () => {
    reservation.orderRoomService(chickenTenders)
    
    expect(reservation.roomServiceCharges[0]).to.equal(12.4)
  })
  
  it('should be able to get the total amount of room service charges made during a booking', () => {
    reservation.orderRoomService(bltSandwich)
    reservation.orderRoomService(chickenTenders)
    
    expect(reservation.getRoomServiceBill()).to.equal(27.9)
  })
})