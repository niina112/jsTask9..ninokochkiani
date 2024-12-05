const timer = document.querySelector('.time-display');
const status1 = document.querySelector('.status');
const start1 = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');

let counter = 10;
let countdown;

function updateDisplay() {
  timer.textContent = `Remaining time: ${counter}s`;
}

function beginCountdown() {
  if (countdown) return
  status1.textContent = '';

  countdown = setInterval(() => {
    counter--;
    updateDisplay()
    if (counter === 0) {
      clearInterval(countdown)
      countdown = null
      setTimeout(() => {
        status1.textContent = "Time’s up!"
      }, 500)
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdown)
  status1.textContent = `Stopped at ${counter}s`
  countdown = null;
}

function resetCountdown() {
  clearInterval(countdown)
  counter = 10
  updateDisplay()
  status1.textContent = ''
  countdown = null;
}

start1.onclick = beginCountdown;
stopButton.onclick = stopCountdown;
resetButton.onclick = resetCountdown;

updateDisplay()