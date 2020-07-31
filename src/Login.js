class Login {
  constructor(username, password) {
    this.username = username;
    this.attemptedPassword = password;
    this.correctPassword = 'overlook2020';
  }

  checkPassword() {
    return this.attemptedPassword === this.correctPassword;
  }

  checkIfCustomer() {
    let name = this.username.trim().slice(0, 8).toLowerCase();
    return name === 'customer';
  }
  
  validateCustomerId() {
    let number = Number(this.username.trim().slice(-2));
    return number > 0 && number <= 50;
  }

  checkIfManager() {
    let name = this.username.trim().toLowerCase();
    return name === 'manager';
  }

  authenticateUser() {
    if (this.checkIfManager() && this.checkPassword()) {
      return 'manager';
    } else if (this.checkIfCustomer() && this.validateCustomerId() && this.checkPassword()) {
      return 'guest';
    } else if ((!this.checkIfCustomer() || !this.validateCustomerId()) && !this.checkIfManager()) {
      return 'Invalid Username. Please Try Again.';
    } else if (!this.checkPassword()) {
      return 'Incorrect Password. Please Try Again.';
    } else {
      return 'Valid Username and Password Required.';
    }
  }
}

export default Login
