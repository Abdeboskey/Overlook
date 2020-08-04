import chai from 'chai'
import Guest from '../src/Guest'
const expect = chai.expect

describe('Guest', () => {

  let user, newUser, guest, nuGuest

  before(() => {
    user = {
      id: 1,
      name: 'Max Headroom'
    }
  
    newUser = {
      id: 24,
      name: 'Gingerboat Forgotten'
    }

    guest = new Guest(user)
    nuGuest = new Guest(newUser)
  })

  it('should be a function', () => {
    expect(Guest).to.be.a('function')
  })

  it('should be an instance of Guest', () => {
    expect(guest).to.be.an.instanceof(Guest)
  })

  it('should have an ID number', () => {
    expect(guest.id).to.equal(1)
    expect(nuGuest.id).to.equal(24)
  })
  
  it('should have a name', () => {
    expect(guest.name).to.equal('Max Headroom')
    expect(nuGuest.name).to.equal('Gingerboat Forgotten')
  })

  it('should start with no bookings', () => {
    expect(guest.bookings).to.eql([])
  })
})