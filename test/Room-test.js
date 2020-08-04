import chai from 'chai'
import Room from '../src/Room'
const expect = chai.expect

describe('Room', () => {
  
  const room24 = {
    number: 24,
    roomType: 'suite',
    bidet: false,
    bedSize: 'queen',
    numBeds: 1,
    costPerNight: 327.24
  }
  
  const room11 = {
    number: 11,
    roomType: 'single room',
    bidet: true,
    bedSize: 'twin',
    numBeds: 2,
    costPerNight: 207.24,
  }

  it('should be a function', () => {
    expect(Room).to.be.a('function')
  })

  it('should instantiate a Room', () => {
    const room = new Room(room24)
    expect(room).to.be.an.instanceOf(Room)
  })

  it('should have a room number', () => {
    const room = new Room(room24)
    expect(room.number).to.equal(24)
  })
  
  it('should be able to have a different room number', () => {
    const room = new Room(room11)
    expect(room.number).to.equal(11)
  })

  it('should have a room size', () => {
    const room = new Room(room24)
    expect(room.roomType).to.equal('suite')
  })

  it('should be able to have a different room size', () => {
    const room = new Room(room11)
    expect(room.roomType).to.equal('single room')
  })
  
  it('should tell you if the room has a bidet', () => {
    const room = new Room(room24)
    expect(room.hasBidet).to.equal(false)
  })
  
  it('should tell you the size of the beds in the room', () => {
    const room = new Room(room24)
    const otherRoom = new Room(room11)
    
    expect(room.bedSize).to.equal('queen')
    expect(otherRoom.bedSize).to.equal('twin')
  })
  
  it('should tell you how many beds are in a room', () => {
    const room = new Room(room24)
    const otherRoom = new Room(room11)
    
    expect(room.numBeds).to.equal(1)
    expect(otherRoom.numBeds).to.equal(2)
  })
  
  it('should have a cost per night', () => {
    const room = new Room(room24)
    const otherRoom = new Room(room11)
    
    expect(room.costPerNight).to.equal(327.24)
    expect(otherRoom.costPerNight).to.equal(207.24)
  })
})