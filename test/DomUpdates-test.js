import chai from "chai"
const spies = require("chai-spies")
const expect = chai.expect
import DomUpdates from "../src/DomUpdates"

describe('DomUpdates', () => {
  it('should be a function', () => {
    expect(DomUpdates).to.be.a('function')
  })

  it('should be an instance of DomUpdates', () => {
    const domStuff = new DomUpdates()

    expect(domStuff).to.be.an.instanceOf(DomUpdates)
  })

  it('should have a ')
})