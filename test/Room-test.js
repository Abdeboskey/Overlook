import chai from "chai"
const spies = require("chai-spies")
const expect = chai.expect
import Room from "../src/Room"

describe.only('Room', () => {
  it('should be a function', () => {
    expect(Room).to.be.a('function')
  })

  it('should instantiate a Room', () => {
    const room = new Room()
    expect(room).to.be.an.instanceOf(Room)
  })

  it('should have a room number', () => {
    const room = new Room(24);
    expect(room.number).to.equal(24)
  })
  
  it('should be able to have a different room number', () => {
    const room = new Room(37);
    expect(room.number).to.equal(37)
  })

  it('should have a room size', () => {
    const room = new Room(24, 'junior suite')
    expect(room.roomType).to.equal('junior suite')
  })

  it('should be able to have a different room size', () => {
    const room = new Room(24, 'single')
    expect(room.roomType).to.equal('single')
  })
})