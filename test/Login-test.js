import chai from 'chai'
import Login from '../src/Login'
const expect = chai.expect

describe('Login', () => {
  it('should be a function', () => {
    expect(Login).to.be.a('function')
  })

  it('should be an instance of Login', () => {
    const login = new Login()
    expect(login).to.be.an.instanceof(Login)
  })

  it('should store a correct password', () => {
    const login = new Login()
    expect(login.correctPassword).to.equal('overlook2020')
  })
  
  it('should be able to accept an attempted password', () => {
    const login = new Login('rontron', 'banana123')
    expect(login.attemptedPassword).to.equal('banana123')
  })
  
  it('should be able to accept an attempted username', () => {
    const login = new Login('Fruitstripe123', 'banana123')
    expect(login.username).to.equal('Fruitstripe123')
  })

  it('should determine if the passwords match', () => {
    const login = new Login('Fruitstripe123', 'banana123')
    const isValidated = login.checkPassword()
    
    expect(isValidated).to.deep.equal(false)

    const loginAgain = new Login('Fruitstripe123', 'overlook2020')
    const isAlsoValidated = loginAgain.checkPassword()
    
    expect(isAlsoValidated).to.deep.equal(true)
  })

  it('should determine if the user is a customer', () => {
    const login = new Login('customer24', 'banana123')
    const isCustomer = login.checkIfCustomer()

    expect(isCustomer).to.equal(true)

    const loginAgain = new Login('franklin24', 'banana123')
    const isAlsoCustomer = loginAgain.checkIfCustomer()

    expect(isAlsoCustomer).to.equal(false)
  })

  it('should determine if customer number is between 1 and 50', () => {
    const login = new Login("customer24", "banana123")
    const validId = login.validateCustomerId()

    expect(validId).to.equal(true)

    const loginAgain = new Login("customer0", "banana123")
    const isAnotherCustomer = loginAgain.validateCustomerId()

    expect(isAnotherCustomer).to.equal(false)
    
    const loginOnceMore = new Login("customer52", "banana123")
    const oneMoreCustomer = loginOnceMore.validateCustomerId()

    expect(oneMoreCustomer).to.equal(false)
  })

  it('should determine if the user is a manager', () => {
    const login = new Login('manager', 'banana123')
    const isManager = login.checkIfManager()

    expect(isManager).to.equal(true)

    const loginAgain = new Login('franklin24', 'banana123')
    const isAlsoManager = loginAgain.checkIfManager()

    expect(isAlsoManager).to.equal(false)
  })

  it('should not be case-sensitive or sensitive to extra whitespace when checking username', () => {
    const login = new Login(' CuStOmer24', 'banana123')
    const isCustomer = login.checkIfCustomer()
    
    expect(isCustomer).to.equal(true)
    
    const loginAgain = new Login('mANaGer ', 'banana123')
    const isManager = loginAgain.checkIfManager()
    
    expect(isManager).to.equal(true)
  })
  
  it('should login as a manager if the username is manager and the password is correct', () => {
    const login = new Login('manager', 'overlook2020')
    const whoIsIt = login.authenticateUser()
    
    expect(whoIsIt).to.equal('manager')
  })
  
  it('should login as a guest if the username is a valid customer username and the password is correct', () => {
    const login = new Login(' CuStOmer24', 'overlook2020')
    const whoIsIt = login.authenticateUser()
    
    expect(whoIsIt).to.equal('guest')
  })
  
  it('should tell the user if the username is invalid', () => {
    const login = new Login(' CoStumer24', 'overlook2020')
    const whoIsIt = login.authenticateUser()
  
    expect(whoIsIt).to.equal('Invalid Username. Please Try Again.')

    const loginAgain = new Login(' CuStomer82', 'overlook2020')
    const nowWhoIsIt = loginAgain.authenticateUser()
  
    expect(nowWhoIsIt).to.equal('Invalid Username. Please Try Again.')

    const loginOnceMore = new Login('', 'overlook2020')
    const whoIsItNow = loginOnceMore.authenticateUser()
  
    expect(whoIsItNow).to.equal('Invalid Username. Please Try Again.')
  })

  it('should tell the user if the password is incorrect when username is correct but password isn\'t', () => {
    const login = new Login(' CuStOmer24 ', 'overview2020')
    const whoIsIt = login.authenticateUser()

    expect(whoIsIt).to.equal('Incorrect Password. Please Try Again.')

    const loginAgain = new Login(' MANAGER', 'overview2020')
    const nowWhoIsIt = loginAgain.authenticateUser()

    expect(nowWhoIsIt).to.equal('Incorrect Password. Please Try Again.')
  })
})