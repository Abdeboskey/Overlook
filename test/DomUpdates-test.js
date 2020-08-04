import chai from 'chai'
const spies = require('chai-spies')
const expect = chai.expect
import DomUpdates from '../src/DomUpdates'

chai.use(spies)

describe('DomUpdates', () => {

  let domUpdate,
    userNameInput,
    passwordInput,
    loginResult,
    date,
    currentGuestName,
    costOfBookings,
    percentageOccupied,
    availableRooms,
    todaysTotalRevenue,
    currentDate,
    percentage,
    available,
    todaysRevenue,
    guestName,
    className

  beforeEach(() => {
    domUpdate = new DomUpdates()
    userNameInput = {}
    passwordInput = {}
    loginResult = ''
    date = '2020/08/04'
    currentGuestName = ''
    costOfBookings = 0
    percentageOccupied = 0
    availableRooms = 0
    todaysTotalRevenue = 0
    currentDate = ''
    guestName = ''
    className = ''
  })

  afterEach(() => {
    chai.spy.restore(domUpdate)
  })

  it('should be a function', () => {
    expect(DomUpdates).to.be.a('function')
  })

  it('should be an instance of DomUpdates', () => {
    expect(domUpdate).to.be.an.instanceOf(DomUpdates)
  })

  it('should be able to show a login error if invalid login information is used', () => {
    chai.spy.on(domUpdate, ['showLoginError'], () => {})

    domUpdate.showLoginError(userNameInput, passwordInput, loginResult)

    expect(domUpdate.showLoginError).to.have.been.called(1)
    expect(domUpdate.showLoginError).to.have.been.called.with(userNameInput, passwordInput, loginResult)
  })

  it('should be able to reformat the date from yyyy/mm/dd to mm/dd/yyyy format', () => {
    const correctDate = domUpdate.formatDate(date)
    expect(correctDate).to.equal('8/4/2020')
  })

  it('should be able to update the Guest Log on the guest dashboard', () => {
    chai.spy.on(domUpdate, ['updateGuestLog'], () => {})

    domUpdate.updateGuestLog(currentGuestName, costOfBookings)

    expect(domUpdate.updateGuestLog).to.have.been.called(1)
    expect(domUpdate.updateGuestLog).to.have.been.called.with(currentGuestName, costOfBookings)
  })
  
  it('should be able to update the Manager Log on the Manager dashboard', () => {
    chai.spy.on(domUpdate, ['updateManagersLog'], () => {})

    domUpdate.updateManagersLog(
      percentageOccupied,
      availableRooms,
      todaysTotalRevenue,
      currentDate
    )

    expect(domUpdate.updateManagersLog).to.have.been.called(1)
    expect(domUpdate.updateManagersLog).to.have.been.called.with(
      percentageOccupied,
      availableRooms,
      todaysTotalRevenue,
      currentDate
    )
  })

  it('should be able to show the manager dashboard when the manager logs in', () => {
    chai.spy.on(domUpdate, ['showManagerDashboard'], () => {})

    domUpdate.showManagerDashboard(percentage, available, todaysRevenue, currentDate)

    expect(domUpdate.showManagerDashboard).to.have.been.called(1)
    expect(domUpdate.showManagerDashboard).to.have.been.called.with(
      percentage,
      available,
      todaysRevenue,
      currentDate
    )
  })

  it('should be able to show the guest dashboard when the manager logs in', () => {
    chai.spy.on(domUpdate, ['showGuestDashboard'], () => {})

    domUpdate.showGuestDashboard(guestName, costOfBookings)

    expect(domUpdate.showGuestDashboard).to.have.been.called(1)
    expect(domUpdate.showGuestDashboard).to.have.been.called.with(
      guestName,
      costOfBookings
    )
  })

  it('should be able to hide an element', () => {
    chai.spy.on(domUpdate, ['hideElement'], () => {})

    domUpdate.hideElement(className)

    expect(domUpdate.hideElement).to.have.been.called(1)
    expect(domUpdate.hideElement).to.have.been.called.with(className)
  })
  
  it('should be able to display a hidden element', () => {
    chai.spy.on(domUpdate, ['displayElement'], () => {})

    domUpdate.displayElement(className)

    expect(domUpdate.displayElement).to.have.been.called(1)
    expect(domUpdate.displayElement).to.have.been.called.with(className)
  })
})