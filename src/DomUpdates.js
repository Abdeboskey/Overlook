class DomUpdates {
  constructor() {}

  showLoginError(usernameInput, passwordInput, loginResult) {
    let invalidInfo = document.querySelector(".login-error-message");
    usernameInput.value = ""; //dom
    passwordInput.value = ""; // dom
    invalidInfo.innerText = loginResult;
    this.displayElement("login-error-message");
  }

  formatDate(date) {
    date = date.split("/");
    date.push(date.shift());
    if (date[0].charAt(0) === "0") date[0] = date[0].slice(1);
    if (date[1].charAt(0) === "0") date[1] = date[1].slice(1);
    return date.join("/");
  }

  updateGuestLog(currentGuestName, costofBookings) {
    const guestName = document.querySelector(".guest-name");
    const spendings = document.querySelector(".guest-spendings");
    guestName.innerText = `Welcome, ${currentGuestName}`;
    spendings.innerText = `Total spent at The Overlook: $${costofBookings}`;
  }

  updateManagersLog(
    percentageOccupied,
    availableRooms,
    todaysTotalRevenue,
    currentDate
  ) {
    const date = document.querySelector(".manager-date");
    const revenue = document.querySelector(".revenue-today");
    const occupied = document.querySelector(".percentage-occupied");
    const available = document.querySelector(".rooms-available");
    date.innerText = `• Manager's Log - Stardate ${this.formatDate(
      currentDate
    )} •`;
    revenue.innerText = `▶ Total Revenue Today: $${todaysTotalRevenue}`;
    occupied.innerText = `▶ ${percentageOccupied}% of rooms are currently occupied`;
    available.innerText = `▶ ${availableRooms} rooms are currently available`;
  }

  showManagerDashboard(percentage, available, todaysRevenue, currentDate) {
    this.updateManagersLog(percentage, available, todaysRevenue, currentDate);
    this.hideElement("landing");
    this.displayElement("manager-dashboard");
  }

  showGuestDashboard(guestName, costOfBookings) {
    this.updateGuestLog(guestName, costOfBookings)
    this.hideElement("landing")
    this.displayElement("guest-dashboard")
  }

  hideElement(className) {
    document.querySelector(`.${className}`).classList.add("hidden");
  }

  displayElement(className) {
    document.querySelector(`.${className}`).classList.remove("hidden");
  }
}

export default DomUpdates;