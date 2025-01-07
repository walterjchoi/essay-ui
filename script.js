/*******************************************
  STOPWATCH FUNCTIONALITY
********************************************/
const stopwatchDisplay = document.getElementById("stopwatchDisplay");
const stopwatchStartBtn = document.getElementById("stopwatchStartBtn");
const stopwatchStopBtn = document.getElementById("stopwatchStopBtn");
const stopwatchResetBtn = document.getElementById("stopwatchResetBtn");

let stopwatchElapsedTime = 0;  // total elapsed time in ms
let stopwatchIntervalId = null;
let stopwatchStartTime = 0;

function updateStopwatch() {
  const currentTime = Date.now();
  stopwatchElapsedTime = currentTime - stopwatchStartTime;
  displayStopwatch();
}

function displayStopwatch() {
  let totalSeconds = Math.floor(stopwatchElapsedTime / 1000);
  let hours   = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  // Format with leading zeros
  hours   = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

stopwatchStartBtn.addEventListener("click", () => {
  // Only start if not already running
  if (!stopwatchIntervalId) {
    // Capture the start time minus what’s already elapsed
    stopwatchStartTime = Date.now() - stopwatchElapsedTime;
    stopwatchIntervalId = setInterval(updateStopwatch, 1000);
  }
});

stopwatchStopBtn.addEventListener("click", () => {
  if (stopwatchIntervalId) {
    clearInterval(stopwatchIntervalId);
    stopwatchIntervalId = null;
  }
});

stopwatchResetBtn.addEventListener("click", () => {
  clearInterval(stopwatchIntervalId);
  stopwatchIntervalId = null;
  stopwatchElapsedTime = 0;
  displayStopwatch();
});


/*******************************************
  TIMER (COUNTDOWN) FUNCTIONALITY
********************************************/
const timerDisplay = document.getElementById("timerDisplay");
const timerInput = document.getElementById("timerInput");
const timerStartBtn = document.getElementById("timerStartBtn");
const timerPauseBtn = document.getElementById("timerPauseBtn");
const timerResetBtn = document.getElementById("timerResetBtn");

let timerTotalMs = 0;     
let timerIntervalId = null;
let timeRemaining = 0;   
let timerIsRunning = false;

function displayTimer(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours   = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  // Format with leading zeros
  hours   = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function updateTimer() {
  timeRemaining -= 1000;
  
  if (timeRemaining <= 0) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
    timerIsRunning = false;
    timeRemaining = 0;
    displayTimer(timeRemaining);
    alert("Time’s up!");
  } else {
    displayTimer(timeRemaining);
  }
}

// START button: Only reset time if it hasn't started or has reached 0
timerStartBtn.addEventListener("click", () => {
  if (!timerIsRunning) {
    if (!timerIntervalId && timeRemaining <= 0) {
      let minutesToCount = parseInt(timerInput.value, 10) || 0;
      timerTotalMs = minutesToCount * 60 * 1000;
      timeRemaining = timerTotalMs;
    }
    timerIsRunning = true;
    timerIntervalId = setInterval(updateTimer, 1000);
  }
});

// PAUSE button: Stop countdown but keep remaining time
timerPauseBtn.addEventListener("click", () => {
  if (timerIsRunning) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
    timerIsRunning = false;
  }
});

// RESET button: Stop everything and set back to user’s input value
timerResetBtn.addEventListener("click", () => {
  clearInterval(timerIntervalId);
  timerIntervalId = null;
  timerIsRunning = false;
  
  let minutesToCount = parseInt(timerInput.value, 10) || 0;
  timerTotalMs = minutesToCount * 60 * 1000;
  timeRemaining = timerTotalMs;
  displayTimer(timeRemaining);
});

// Initialize displays
displayStopwatch();  // for stopwatch
displayTimer(0);     // for countdown timer


/*******************************************
  TEXT EDITOR WORD COUNT
********************************************/
const editor = document.getElementById("editor");
const wordCountEl = document.getElementById("wordCount");

editor.addEventListener("input", () => {
  const text = editor.value.trim();
  const words = text.split(/\s+/).filter(word => word.length > 0);
  wordCountEl.textContent = `Word Count: ${words.length}`;
});
