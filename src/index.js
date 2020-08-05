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
let currentDate = '2020/08/04'
const domUpdate = new DomUpdates()

window.onload = buildHotel()
document.addEventListener('click', clickWhat)

function clickWhat(event) {
  if (event.target.classList.contains('login-button')) {
    event.preventDefault()
    // domUpdate.showLoadingScreen('landing', '')
    loginAction()
  } else if (event.target.innerText === '🧑🏼‍🚀') {
    buildHotel()
  } else if (event.target.classList.contains('todays-reservations')) {
    const todaysReservations = getReservationsByDate(currentDate, currentGuest.bookings)
    console.log(todaysReservations)
    domUpdate.showTodaysReservations(todaysReservations, hotel)
  }
}

function findGuest(guestInfo) {
  if (typeof guestInfo === 'number') {
    return guests.find(guest => guest.id === guestInfo)
  } else if (typeof guestInfo === 'string') {
    return guests.find(guest => guest.name === guestInfo)
  }
}

function getPercentageOccupied(date) {
  let available = getAvailableRooms(date)
  let occupied = hotel.length - available
  let percentage = (occupied / hotel.length) * 100
  return Math.round(percentage)
}

function getAvailableRooms(date) {
  let rooms = hotel.length - getReservationsByDate(date, reservations).length
  return rooms
}

function getReservationsByDate(date, reservations) {
  return reservations.filter((booking) => {
    return booking.date === date
  })
}

function getTodaysTotalRevenue(date) {
  let todaysReservations = getReservationsByDate(date, reservations)
  return getTotalCostOfBookings(todaysReservations)
}

function getTotalCostOfBookings(bookings) {
  return bookings.reduce((totalCost, booking) => {
    let room = hotel.find(room => room.number === booking.roomNumber)
    totalCost += room.costPerNight
    totalCost += booking.getRoomServiceBill()
    return totalCost
  }, 0).toFixed(2)
}


function buildHotel() {
  Promise.allSettled([getRooms(), getBookings()])
    .then(() => getGuests())
    .catch(error => console.log(error))
}

function getRooms() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms/')
    .then(data => data.json())
    .then(data => storeRooms(data))
    .catch(error => console.log(error))
}

function storeRooms(data) {
  hotel = []
  data.rooms.forEach(room => {
    let roomIsReady = new Room(room)
    hotel.push(roomIsReady)
  })
}

function getBookings() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(data => data.json())
    .then(data => storeBookings(data))
    .catch(error => console.log(error))
}

function storeBookings(data) {
  reservations = []
  data.bookings.forEach(booking => {
    let newBooking = new Booking(booking)
    reservations.push(newBooking)
  })
}

function getGuests() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(data => data.json())
    .then(data => storeGuest(data))
    .catch(error => console.log(error))
}

function storeGuest(data) {
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

function loginAction() {
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
    )
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
