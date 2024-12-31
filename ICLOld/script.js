<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>IELTS Writing Practice</title>
  <!-- Link to external CSS -->
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- HEADER -->
  <header>
    <img src="https://i.imgur.com/xW2ulG6.png" alt="My Logo" />
    
    <!-- STOPWATCH SECTION -->
    <div id="stopwatch-container">
      <h2>Stopwatch</h2>
      <div id="stopwatch">
        <span id="stopwatchDisplay">00:00:00</span>
        <button id="stopwatchStartBtn">Start</button>
        <button id="stopwatchStopBtn">Stop</button>
        <button id="stopwatchResetBtn">Reset</button>
      </div>
    </div>
    
    <!-- TIMER SECTION -->
    <div id="timer-container">
      <h2>Timer</h2>
      <label for="timerInput">Set Minutes:</label>
      <input id="timerInput" type="number" min="1" value="30" />
      <div id="timer">
        <span id="timerDisplay">00:00:00</span>
        <button id="timerStartBtn">Start</button>
        <button id="timerPauseBtn">Pause</button>
        <button id="timerResetBtn">Reset</button>
      </div>
    </div>
  </header>

  <!-- MAIN CONTENT: ESSAY QUESTION & TEXT EDITOR -->
  <main>
    <!-- Editable question area (inline text, no text box) -->
    <div id="essay-question">
      <h2>Essay Question</h2>
      <div id="questionPrompt" contenteditable="true">
        "What does being healthy mean to you, beyond just physical fitness? 
        How has your perception of health changed as you've gotten older?"
      </div>
    </div>

    <!-- Text Editor for writing the essay -->
    <textarea 
      id="editor" 
      placeholder="Type your essay here..." 
      spellcheck="false"
    ></textarea>
    
    <div id="wordCount">Word Count: 0</div>
  </main>

  <!-- Link to external JavaScript -->
  <script src="script.js"></script>
</body>
</html>
