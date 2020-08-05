class DomUpdates {
  constructor() {}

  showLoginError(usernameInput, passwordInput, loginResult) {
    let invalidInfo = document.querySelector('.login-error-message')
    usernameInput.value = ''
    passwordInput.value = ''
    invalidInfo.innerText = loginResult
    this.displayElement('login-error-message')
  }

  formatDate(date) {
    date = date.split('/')
    date.push(date.shift())
    if (date[0].charAt(0) === '0') date[0] = date[0].slice(1)
    if (date[1].charAt(0) === '0') date[1] = date[1].slice(1)
    return date.join('/')
  }

  updateGuestLog(currentGuestName, costOfBookings) {
    const guestName = document.querySelector('.guest-name')
    const spendings = document.querySelector('.guest-spendings')
    guestName.innerText = `Signed in as ${currentGuestName}`
    spendings.innerHTML = `
    <p>Hello ${currentGuestName.split(" ")[0]}</p>
    <p>. . . ☺︎</p>
    <p>You have spent a total of $${costOfBookings}</p>
    <p> at The Overlook Hotel.</p>
    <p>What would you like to do? ☞</p>`;
  }

  updateManagersLog(
    percentageOccupied,
    availableRooms,
    todaysTotalRevenue,
    currentDate
  ) {
    const date = document.querySelector('.manager-date')
    const revenue = document.querySelector('.revenue-today')
    const occupied = document.querySelector('.percentage-occupied')
    const available = document.querySelector('.rooms-available')
    date.innerText = `☄︎ Manager's Log - Stardate ${this.formatDate(
      currentDate
    )} ☄︎`;
    revenue.innerText = `▶ Total Revenue Today: $${todaysTotalRevenue}`
    occupied.innerText = `▶ ${percentageOccupied}% of rooms are currently occupied`
    available.innerText = `▶ ${availableRooms} rooms are currently available`
  }

  showManagerDashboard(percentage, available, todaysRevenue, currentDate) {
    this.updateManagersLog(percentage, available, todaysRevenue, currentDate)
    this.hideElement('landing')
    this.displayElement('manager-dashboard')
  }

  showGuestDashboard(guestName, costOfBookings) {
    this.updateGuestLog(guestName, costOfBookings)
    this.hideElement('landing')
    this.displayElement('guest-dashboard')
  }

  hideElement(className) {
    document.querySelector(`.${className}`).classList.add('hidden')
  }

  displayElement(className) {
    document.querySelector(`.${className}`).classList.remove('hidden')
  }

  stopAnimation() {
    document.querySelector(`.body`).classList.remove("animate-background");
  }

  showTodaysReservations(reservations, rooms) {
    const guestLog = document.querySelector('.guest-log')
    if (!reservations.length) {
      guestLog.innerHTML = `
        <section class="room card">
          <p>I'm Sorry,</p>
          <p>☹︎</p>
          <p>you do not have any reservations today.</p><br>
          <p>Would you like to make one?</p>
        </section>
      `; // Maybe add actual yes/no buttons here
    } else {
      guestLog.innerHTML = `<p> Ok, Here are your reservations:</p><br>`;
      reservations.forEach(reservation => {
        let room = rooms.find(room => room.number === reservation.roomNumber)
        guestLog.innerHTML += `
          <section class="room-card">
            <p>▶ ${this.formatDate(reservation.date)}</p>
            <p>• Your room is ${room.roomType} #${room.number}</p>
            <p>• You have ${room.numBeds} ${room.bedSize} bed(s)</p>
            <p>• This will cost you $${room.costPerNight}</p><br>
          </section>
        `;
      }) // numBeds should only be plural if more than one bed in a room!
    }
  } // store each t



  showLoadingScreen(elementToHide, elementToShow) {
    this.hideElement(elementToHide)
    this.displayElement('loading')

  }
}

export default DomUpdates