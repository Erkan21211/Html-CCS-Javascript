const math_num1 = document.querySelector(".number1");
const math_num2 = document.querySelector(".number2");
const math_operator = document.querySelector(".op");



const input_field = document.querySelector(".input-field");
const submit = document.querySelector(".btn")



const score_num = document.querySelector(".score-num");
const pointsNeeded = document.querySelector(".points-needed");
const mistakesAllowed = document.querySelector(".mistakes-allowed");
const endmessage = document.querySelector(".end-message");
const scoremessage = document.querySelector(".scoremessage");
const resetButton = document.querySelector(".reset-button");



let state = {
  score: 0,
  wrong: 0,
};

function updateProblem() {
  state.currentP = generateProblem();
  math_num1.innerHTML = `${state.currentP.numberOne}`;
  math_num2.innerHTML = `${state.currentP.numberTwo}`;
  math_operator.innerHTML = `${state.currentP.op}`;
  input_field.value = "";
  input_field.focus();
}

updateProblem();

function generateNumbers(max) {
  return Math.floor(Math.random() * (max + 1));
}

function generateProblem() {
  return {
    numberOne: generateNumbers(10),
    numberTwo: generateNumbers(10),
    op: ["+", "-", "*", "/"][generateNumbers(2)]
  };
}

input_field.addEventListener("submit", handleSubmit);
document.getElementById("btn").addEventListener("click", handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  

  let correctAnswer = 0;
  const p = state.currentP;


  if (p.op == "+") correctAnswer = p.numberOne + p.numberTwo;
  if (p.op == "-") correctAnswer = p.numberOne - p.numberTwo;
  if (p.op == "*") correctAnswer = p.numberOne * p.numberTwo;
  if (p.op == "/") correctAnswer = p.numberOne / p.numberTwo;
  

  // check
  if (parseInt(input_field.value, 10) == correctAnswer) {
    
    state.score += 1;
    pointsNeeded.textContent = 10 - state.score;
    score_num.textContent = state.score;
    updateProblem();
  } else {
    state.wrong += 1;
  }
  checkLogic();
}

function checkLogic() {
  // if win
  console.log(state);
  if (state.score === 10) {
    endmessage.textContent = "Congrats! You won.";
    document.body.classList.add("overlay-is-open");
    setTimeout(() => resetButton.focus(), 331);
  }
  // if lose
  if (state.wrong === 3){
    endmessage.textContent = "Sorry! You lost.";
    document.body.classList.add("overlay-is-open");
    setTimeout(() => resetButton.focus(), 331);
    // restart();
  }

}

function restart() {
  document.body.classList.remove("overlay-is-open");
  updateProblem();
  state.score = 0;
  state.wrong = 0;
  pointsNeeded.textContent = 10;
  mistakesAllowed.textContent = 2;
}
