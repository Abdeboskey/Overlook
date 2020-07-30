import chai from "chai"
const spies = require("chai-spies")
const expect = chai.expect
import Room from "../src/Room"

describe('Room', () => {
  it('should be a function', () => {
    expect(Room).to.be.a('function')
  })

  it('should instantiate a Room', () => {
    const room = new Room()
    expect(room).to.be.an.instanceOf(Room)
  })

  it('should have a room number', () => {
    
  })
})