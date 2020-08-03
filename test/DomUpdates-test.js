import chai from "chai"
const spies = require("chai-spies")
const expect = chai.expect
import Login from "../src/Login";
import DomUpdates from "../src/DomUpdates"

describe('DomUpdates', () => {

  let DomUpdates
  let guestlogin
  beforeEach(() => {
    guestlogin = new Login('customer24', 'overlook2020')
    domUpdates = new DomUpdates()
  })

  it('should be a function', () => {
    expect(DomUpdates).to.be.a('function')
  })

  it('should be an instance of DomUpdates', () => {
    const domStuff = new DomUpdates()

    expect(domStuff).to.be.an.instanceOf(DomUpdates)
  })

  it('should be able to update the page based on the login')
})