let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

homeScore.textContent = 0;
guestScore.textContent = 0;

let countHome = 0;
let countGuest = 0;

function addToHome(count) {
  countHome += count;
  homeScore.textContent = countHome;
}

function addToGuest(count2) {
  countGuest += count2;
  guestScore.textContent = countGuest;
}

function reset() {
  countHome = 0;
  countGuest = 0;
  homeScore.textContent = 0;
  guestScore.textContent = 0;
}
