const startBtn = document.getElementById("start-btn");
const welcomeScr = document.getElementById("welcome-screen");
const timerReadout = document.getElementById("timer-readout");
const questionScr = document.getElementById("question-screen");
const questionText = document.getElementById("question-text");
const answersList = document.getElementById("answers-list");

var gameDuration = 60;
var timerInterval;
var currentQuestionIdx = 0;
var score = 0;

// ======================================================
// QUESTION AND ANSWER BANK

const questionBank = [
  {
    question: "In what year was Javascript founded?",
    answers: [
      { text: "1997", correct: false },
      { text: "1985", correct: false },
      { text: "1995", correct: true },
      { text: "1996", correct: false },
    ],
  },
  {
    question: "What does the word DOM mean?",
    answers: [
      { text: "Disk Operating Modem", correct: false },
      { text: "Document Object Model", correct: true },
      { text: "Detail Oriented Machine", correct: false },
      { text: "Document Objective Memory", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a way to declare a variable?",
    answers: [
      { text: "var", correct: false },
      { text: "const", correct: false },
      { text: "let", correct: false },
      { text: "temp", correct: true },
    ],
  },
  {
    question: "What is the correct  way to name the random method on the Math global object?",
    answers: [
      { text: "Math.Random[]", correct: false },
      { text: "Math(random)", correct: false },
      { text: "math.random{}", correct: false },
      { text: "Math.random()", correct: true },
    ],
  },
  {
    question: "What should string values be enclosed within when being assigned to variables?",
    answers: [
      { text: "quotes", correct: true },
      { text: "commas", correct: false },
      { text: "nothing", correct: false },
      { text: "curly brackets", correct: false },
    ],
  },
  {
    question: "Which of the following data types are not commonly used?",
    answers: [
      { text: "number", correct: false },
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
    ],
  },
  {
    question: "Which of the following is used when making a strict equality statement",
    answers: [
      { text: "!==", correct: false },
      { text: "===", correct: true },
      { text: "=+=", correct: false },
      { text: "+++", correct: false },
    ],
  },
  {
    question: "Who is the creator of the Javascript Programming Language?",
    answers: [
      { text: "Mark Zuckerburg", correct: false },
      { text: "Bill Gates", correct: false },
      { text: "Brendan Eich", correct: true },
      { text: "Elon Musk", correct: false },
    ],
  },
  {
    question: "Which of the following is used to express an object?",
    answers: [
      { text: "{}", correct: true },
      { text: "[]", correct: false },
      { text: "()", correct: false },
      { text: "||", correct: false },
    ],
  },
  {
    question: "A tool used in development and debugging for printing content to a debugger is?",
    answers: [
      { text: "function", correct: false },
      { text: "array", correct: false },
      { text: "console.log", correct: true },
      { text: "for loops", correct: false },
    ],
  },
];

// ======================================================
// EVENT LISTENERS

startBtn.addEventListener("click", startGame);

function startGame() {
  //hide the welcome screen
  welcomeScr.classList.add("hidden");
  //show the question screen
  questionScr.classList.remove("hidden");
  //start timer
  startTimer();

  loadQuestion();
}

function startTimer() {
  //TODO: display timer to user
  timerInterval = setInterval(function () {
    timerReadout.textContent = gameDuration;
    gameDuration--;
    if (gameDuration <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function loadQuestion() {
  while (answersList.firstChild) {
    answersList.removeChild(answersList.firstChild);
  }

  var currentQuestion = questionBank[currentQuestionIdx];
  questionText.textContent = currentQuestion.question;

  for (let i = 0; i < currentQuestion.answers.length; i++) {
    //create button
    var answerItem = document.createElement("button");
    answerItem.dataset.index = i;
    answerItem.addEventListener("click", checkAnswer);
    //put the answer text in it
    answerItem.textContent = currentQuestion.answers[i].text;
    //append it to the div
    answersList.append(answerItem);
  }
}

function checkAnswer(e) {
  console.log(e.target.dataset.index);
  currentQuestionIdx++;
  //check if they clicked the correct answer
  //if correct: add points to score
  //if incorrecct: take time off timer
  loadQuestion();
}
