const hourSpan = document.querySelector(".hour");
const minSpan = document.querySelector(".min");
const secSpan = document.querySelector(".sec");
const formatBtn = document.querySelector(".format");
const ampmSpan = document.querySelector(".am");
const themeToggle = document.querySelector(".theme-toggle");


let is24Hour = true;

const timer = () => {
  const now = new Date();

  let hour24 = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  // AM / PM decision (from 24-hour time)
  let ampm = hour24 >= 12 ? "PM" : "AM";

  let displayHour = hour24;

  // format logic
  if (!is24Hour) {
    displayHour = hour24 % 12 || 12;
    ampmSpan.innerText = ampm;
    ampmSpan.style.display = "inline";
    formatBtn.innerText = "Switch to 24 Hour";
  } else {
    ampmSpan.style.display = "none";
    formatBtn.innerText = "Switch to 12 Hour";
  }

  hourSpan.innerText = displayHour < 10 ? "0" + displayHour : displayHour;
  minSpan.innerText = min < 10 ? "0" + min : min;
  secSpan.innerText = sec < 10 ? "0" + sec : sec;
};

// button only flips state
formatBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  timer(); // instant update
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


timer();
setInterval(timer, 1000);