import chai from 'chai'
const spies = require('chai-spies')
const expect = chai.expect
import Login from '../src/Login'
import DomUpdates from '../src/DomUpdates'

chai.use(spies)

describe.only('DomUpdates', () => {

  let domUpdate,
    login,
    userNameInput, 
    passwordInput, 
    loginResult,
    date,
    currentGuestName,
    costOfBookings,
    percentageOccupied,
    availableRooms,
    todaysTotalRevenue,
    currentDate

  beforeEach(() => {
    domUpdate = new DomUpdates()
    login = {}
    userNameInput = {}
    passwordInput = {}
    loginResult = ''
    date = ''
    currentGuestName = ''
    costOfBookings = 0
    percentageOccupied = 0
    availableRooms = 0
    todaysTotalRevenue = 0
    currentDate = ''
  })

  afterEach(() => {
    chai.spy.restore(domUpdate);
  })

  it('should be a function', () => {
    expect(DomUpdates).to.be.a('function')
  })

  it('should be an instance of DomUpdates', () => {
    expect(domUpdate).to.be.an.instanceOf(DomUpdates)
  })

  it('should be able to show a login error if invalid login information is used', () => {
    global.domUpdate;
    chai.spy.on(domUpdate, ["showLoginError"], () => {})

    domUpdate.showLoginError(userNameInput, passwordInput, loginResult)

    expect(domUpdate.showLoginError).to.have.been.called(1);
    expect(domUpdate.showLoginError).to.have.been.called.with(userNameInput, passwordInput, loginResult)
  })

  
})