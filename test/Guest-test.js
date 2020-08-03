import chai from 'chai'
import Guest from '../src/Guest'
const expect = chai.expect

describe.only('Guest', () => {

  const user = {
    id: 1,
    name: "Max Headroom"
  }

  const newUser = {
    id: 24,
    name: "Gingerboat Forgotten"
  };

  it('should be a function', () => {
    expect(Guest).to.be.a('function')
  })

  it('should be an instance of Guest', () => {
    const guest = new Guest(user)
    expect(guest).to.be.an.instanceof(Guest)
  })

  it('should have an ID number', () => {
    const guest = new Guest(user)
    expect(guest.id).to.equal(1)
    
    const nuGuest = new Guest(newUser)
    expect(nuGuest.id).to.equal(24)
  })
  
  it('should have a name', () => {
    const guest = new Guest(user)
    expect(guest.name).to.equal("Max Headroom");
    
    const nuGuest = new Guest(newUser)
    expect(nuGuest.name).to.equal("Gingerboat Forgotten");
  })

  
})