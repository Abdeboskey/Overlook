# Overlook

#### Overlook is a hotel management application that allows users to login as either a manager or a guest. 
##### Due to some personal challenges, the application currently has some limited functionality.

##### As a Manager, users of this application can currently:

* Log In.
* View the total rooms available for today's date.
* View the percentage of rooms occupied for today's date.
* View the total revenue for today's date.

##### As a guest, users of this application can currently:

* Log In.
* View the total amount of money they have spent ot the Hotel Overlook.

#### This was a Mod 2 project in Turing School of Software and Design's Front End Engineering program during the 2006 inning. The project was designed to help students better understand how to:

* Follow a specification to make a working application.
* Use OOP to drive the design of the application and the code
* Write modular, reusable code that is DRY and follows SRP (Single Responsibility Principle).
* Implement a robust testing suite using TDD, and use `chai-spies` where appropriate
* Use array prototype methods to perform data manipulation.
* Work with an API to send and recieve data. 
* Create a user interface that is easy to use and displays information in a clear way.

## Setup/Install

* Open your terminal and clone the repo using `git clone git@github.com:Abdeboskey/Overlook.git`.

* `cd` into the repository and open it in your favorite text editor.

* From the root of this directory, run `npm install` to download the dependencies.

* To get dependencies for testing with chai-spies, run `npm install chai-spies`.

* If you would like to run tests, run `npm test` from the root directory in your terminal.

* To launch the application run `npm start` and navigate to `http://localhost:8080/` in your favorite browser.

## Application in Action

* Navigate to the website, and login with the username `manager` and the password `overlook2020`

![gif of manager loggin in](src/gifs/manager_login.gif)

* Refresh the page, and login with the username `customer[number 1-50]` and the password `overlook2020`

![gif of guest logging in](src/gifs/customer_login.gif)

* When a user types an incorrect username or password, an error message will be shown asking them to try again.

![gif of 'invalid information' message](src/gifs/invalid_info.gif)


## Challenges/Wins

#### Setbacks

This project was by far the biggest solo project I have been assigned during my time at Turing. I had quite honestly not done a great job of taking good care of myself up until this point of this mod, and by the time I started working on this application I was already quite burned out. I became very overwhelmed by the size of this project, and my brain just seemed to short circuit. I had a very hard time making much progress, and when I did it was very slow going. 

Part of the challenge came from not completing enough of my previous projects to feel like I knew how to do the things that this project required. All in all, it contributed to this project seeming like an "impossible task", and me having a really hard time overcoming that.

#### Some Wins

Despite not completing much functionality, I am very proud of the design and the UI on this application. I learned some exciting new tools with scss, and I will definitely count the UI and design as a win. 

I was able to achieve an accessibility score of 100 using lighthouse in the devtools to audit the application.

I was able to correctly fetch the starting data from the APIs, and use it to dynamically update the guest and manager dashboards.

I successfully put all Dom-Manipulation methods in their own class and implemented `chai-spies` in testing, which was a first for me and a personal learning goal on this project.

### Future Iterations

* On Login, guests would be able to click buttons to view their past, present, and future reservations at The Overlook.
* Guests should be able to search for a reservation by date, and filter the results by room type, and book a room for a future stay at the Overlook. The new booking would send a `POST` request to the API and update the database with the booking.


* Managers would be able to search for a guest by name or ID, view their information, (name, all bookings, and total amount spent at the Overlook) and add bookings or cancel future bookings for that guest.

## Contributors

* This project was submitted on 8/4/2020 by [Aaron Burris-DeBoskey](https://github.com/Abdeboskey).
