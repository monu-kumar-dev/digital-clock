const clock = document.getElementById("clock");

function timer() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  // console.log(time);
  clock.textContent = time;
}

timer();
setInterval(timer, 1000);
