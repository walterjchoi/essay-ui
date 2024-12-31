/* ===== RESET & BASIC STYLES ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ===== HEADER & LAYOUT ===== */
header {
  background-color: #000000; /* header background color */
  color: #ffffff;            /* header text color */
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap; /* allows wrapping on smaller screens */
  gap: 20px;
  align-items: center;
  font-family: 'Noto Serif', serif; /* header font */
}

header img {
  height: 90px; /* reduce logo size, adjust as desired */
  margin-right: 20px;
}

/* Make sure button/input text are white as well */
#stopwatch-container button,
#timer-container button,
#timerInput {
  color: #ffffff;
  background-color: transparent;
}

/* STOPWATCH & TIMER */
#stopwatch-container,
#timer-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#stopwatch, 
#timer {
  display: flex;
  align-items: center;
  margin-top: 6px;
}

#stopwatch span,
#timer span {
  font-size: 1.2rem;
  width: 100px;
  text-align: center;
  margin-right: 10px;
}

#stopwatch button,
#timer button {
  margin-right: 5px;
  padding: 6px 10px;
  font-size: 0.9rem;
  cursor: pointer;
}

#timerInput {
  width: 60px;
  margin-top: 4px;
}

/* ===== MAIN CONTENT ===== */
main {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 20px;
}

/* Text Editor for answer */
textarea {
  flex: 1;
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  resize: vertical; /* allow vertical resizing only */
  min-height: 200px; /* ensure the box isn't too small */
}

#wordCount {
  margin-top: 10px;
  font-weight: bold;
}

/* Editable Essay Question */
#essay-question {
  margin-bottom: 20px; 
}

#essay-question h2 {
  margin-bottom: 8px;
}

#essay-question p {
  margin: 4px 0;
  line-height: 1.5;
}

#questionPrompt {
  /* Make it look like normal text (no border/background) */
  outline: none;
  border: none;
  background: transparent;
  margin: 6px 0;
  line-height: 1.5;
  font-size: 1rem;
}
