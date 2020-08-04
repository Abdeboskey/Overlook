import './css/base.scss'
import './images/Stars.png'
import Room from './Room'
import Booking from './Booking'
import Login from './Login'
import Guest from './Guest'
import DomUpdates from './DomUpdates'

let hotel = []
let reservations = []
let guests = []
let currentGuest
let currentDate = "2020/02/26"
const domUpdate = new DomUpdates()

window.onload = buildHotel()
document.addEventListener('click', clickWhat)

function clickWhat(event) {
  if (event.target.classList.contains('login-button')) {
    event.preventDefault()
    loginAction()
  } else if (event.target.innerText === '🧑🏼‍🚀') {
    buildHotel()
  }
}

function findGuest(guestInfo) { // Should probably be in manager class
  if (typeof guestInfo === 'number') {
    return guests.find(guest => guest.id === guestInfo)
  } else if (typeof guestInfo === 'string') {
    return guests.find(guest => guest.name === guestInfo) // should this work for only last names?
  }
}

function getPercentageOccupied(date) { // Manager Class
  let available = getAvailableRooms(date)
  let occupied = hotel.length - available
  let percentage = (occupied / hotel.length) * 100
  return Math.round(percentage)
}

function getAvailableRooms(date) { // Manager Class
  let rooms = hotel.length - getReservationsByDate(date).length
  return rooms
}

function getReservationsByDate(date) { // method on User class
  return reservations.filter((booking) => {
    return booking.date === date;
  });
}

function getTodaysTotalRevenue(date) { // method on User class
  let todaysReservations = getReservationsByDate(date)
  return getTotalCostOfBookings(todaysReservations)
}

function getTotalCostOfBookings(bookings) { // method on User class
  return bookings.reduce((totalCost, booking) => {
    let room = hotel.find(room => room.number === booking.roomNumber)
    totalCost += room.costPerNight
    totalCost += booking.getRoomServiceBill()
    return totalCost
  }, 0).toFixed(2)
}

//api.getRooms().then(roomData => storeRoom(roomdatat)).the(f)
function buildHotel() { // move to API calls
  Promise.allSettled([getRooms(), getBookings()])
  // getRooms()
  //   .then(() => getBookings())
    .then(() => getGuests())
    .catch(error => console.log(error))
}

function getRooms() { // move to API calls
  return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms/')
    .then(data => data.json())
    .then(data => storeRooms(data)) // instead of storeRooms(data) return roomData
    .catch(error => console.log(error))
}

function storeRooms(data) { // move to API calls
  hotel = []
  data.rooms.forEach(room => {  //roomData.forEach
    let roomIsReady = new Room(room)
    hotel.push(roomIsReady)
  })
}

function getBookings() { // move to API calls
  return fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
    .then(data => data.json())
    .then(data => storeBookings(data))
    .catch(error => console.log(error))
}

function storeBookings(data) { // move to API calls
  reservations = []
  data.bookings.forEach(booking => {
    let newBooking = new Booking(booking)
    reservations.push(newBooking)
  })
}

function getGuests() { // move to API calls
  return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(data => data.json())
    .then(data => storeGuest(data))
    .catch(error => console.log(error))
}

function storeGuest(data) { // move to API calls
  guests = []
  data.users.forEach(user => {
    let newUser = new Guest(user)
    newUser.bookings = findGuestReservations(newUser.id)
    guests.push(newUser)
  })
}

function findGuestReservations(id) { 
  return reservations.filter(reservation => reservation.userId === id) 
}

function loginAction() { // Dom updates
  let username = document.querySelector('.username-input')
  let password = document.querySelector('.password-input')
  let login = new Login(username.value, password.value)
  let result = login.authenticateUser()
  if (result === 'manager') {
    domUpdate.showManagerDashboard(
      getPercentageOccupied(currentDate),
      getAvailableRooms(currentDate),
      getTodaysTotalRevenue(currentDate),
      currentDate
    );
  } else if (result === 'guest') {
    assignCurrentGuest(login)
    domUpdate.showGuestDashboard(currentGuest.name, getTotalCostOfBookings(currentGuest.bookings))
  } else if (result.charAt(0) === 'I' || result.charAt(0) === 'V') {
    domUpdate.showLoginError(username, password, result)
  }
}

function assignCurrentGuest(login) {
  currentGuest = guests.find(guest => guest.id === Number(login.username.slice(8)))
}







// Need to make all css responsive -
//// set breakpoints and mediaQueries

// Bob Gu Pseudo:

// 3. Customer Interaction
// As a customer:
// I should be able to select a date for which I'd like to book a room for myself
// Upon selecting a date, I should be shown a list of room details for only rooms that are available on that date

// Your page loads
// You have a calendar where you can select a date
// Once a date is selected it fires off an event handler that then takes that date
// You fetch all the bookings using fetch
// Each booking has a date field on it
// If the booking has the same date as the date you selected on the event handler, you know that room is booked, so don't include those results
// We probably just want to return an array of roomNumbers from bookings because we still need to look up room info to display to the user
// Starting with an array of roomNumbers
// Call a fetch on the rooms class since you need the Room data
// Filter on that rooms data, for only room numbers that only match the roomNumbers.
// Display on the page all the available rooms

// Peudocode everything that you are gonna do, here.