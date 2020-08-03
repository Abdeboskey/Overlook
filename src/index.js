import './css/base.scss';
import './images/Stars.png';
import Room from './Room';
import Booking from './Booking';
import Login from './Login';
import Guest from './Guest'
import DomUpdates from './DomUpdates';

const hotel = [];
const guests = [];
const reservations = [];
const domUpdate = new DomUpdates();
let currentGuest;

// window.onload(getRooms());
document.addEventListener('click', clickWhat)

function clickWhat(event) {
  if (event.target.classList.contains("login-button")) {
    event.preventDefault()
    loginAction()
  }
}



function loginAction() {
  let username = document.querySelector('.username-input')
  let password = document.querySelector('.password-input')
  let invalidInfo = document.querySelector('.login-error-message')
  let login = new Login(username.value, password.value)
  let result = login.authenticateUser()
  if (result === 'manager') {
    showManagerDashboard()
  } else if (result === 'guest') {
    showGuestDashboard()
    currentGuest = new Guest(guests.find(guest => {
      return guest.id === Number(login.username.slice(8))
    }))
    console.log(currentGuest)
  } else if (result.charAt(0) === 'I' || result.charAt(0) === 'V') {
    username.value = ''
    password.value = ''
    invalidInfo.innerText = result
    displayElement('login-error-message');
  }
}

function showManagerDashboard() {
  hideElement('landing')
  displayElement('manager-dashboard')
}

function showGuestDashboard() {
  hideElement('landing')
  displayElement('guest-dashboard')
}

function hideElement(className) {
  document.querySelector(`.${className}`).classList.add("hidden");
}

function displayElement(className) {
  document.querySelector(`.${className}`).classList.remove("hidden");
}





//
// to re-format the date, do a date = date.split('/');
////////////////////////////// date.push(date.shift);
////////////////////////////// date.join('-');

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