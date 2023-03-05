import { Questions } from "./data.js";

var button1 = document.getElementsByClassName("roll-the-dice")[0];
var button2 = document.getElementsByClassName("roll-the-dice")[1];
var button3 = document.getElementsByClassName("roll-the-dice")[2];
var button4 = document.getElementsByClassName("roll-the-dice")[3];
var button5 = document.getElementsByClassName("roll-the-dice")[4];
var button6 = document.getElementsByClassName("roll-the-dice")[5];
var button7 = document.getElementsByClassName("roll-the-dice")[6];
var curLine1 = document.getElementsByClassName("curLine")[0];
var curLine2 = document.getElementsByClassName("curLine")[1];
var curLine3 = document.getElementsByClassName("curLine")[2];
var curLine4 = document.getElementsByClassName("curLine")[3];
var curLine5 = document.getElementsByClassName("curLine")[4];
var curLine6 = document.getElementsByClassName("curLine")[5];
var curLine7 = document.getElementsByClassName("curLine")[6];
var curBlock1 = document.getElementsByClassName("curBlock")[0];
var curBlock2 = document.getElementsByClassName("curBlock")[1];
var curBlock3 = document.getElementsByClassName("curBlock")[2];
var curBlock4 = document.getElementsByClassName("curBlock")[3];
var curBlock5 = document.getElementsByClassName("curBlock")[4];
var curBlock6 = document.getElementsByClassName("curBlock")[5];
var curBlock7 = document.getElementsByClassName("curBlock")[6];
var numberRolled = document.getElementsByClassName("numberRolled")[0];
var game_area = document.querySelector(".game-area");
let question_btn = document.getElementsByClassName("question")[0];
let question_placeholder = document.querySelector(".question-placeholder");
let true_answer = document.querySelector(".trueAnswer");
let answer_1 = document.querySelector(".answer1");
let answer_2 = document.querySelector(".answer2");
let answer_3 = document.querySelector(".answer3");
let answer_4 = document.querySelector(".answer4");
let score_1 = document.getElementsByClassName("score-1")[0];
let score_2 = document.getElementsByClassName("score-2")[0];
let score_3 = document.getElementsByClassName("score-3")[0];
let score_4 = document.getElementsByClassName("score-4")[0];
let score_5 = document.getElementsByClassName("score-5")[0];
let score_6 = document.getElementsByClassName("score-6")[0];
let score_7 = document.getElementsByClassName("score-7")[0];
var randNumber;
var index = { val: 0 };
let currentPosition_1 = { val: 0 };
let currentLine_1 = { val: 0 };
let currentPosition_2 = { val: 0 };
let currentLine_2 = { val: 0 };
let currentPosition_3 = { val: 0 };
let currentLine_3 = { val: 0 };
let currentPosition_4 = { val: 0 };
let currentLine_4 = { val: 0 };
let currentPosition_5 = { val: 0 };
let currentLine_5 = { val: 0 };
let currentPosition_6 = { val: 0 };
let currentLine_6 = { val: 0 };
let currentPosition_7 = { val: 0 };
let currentLine_7 = { val: 0 };
let curScore_1 = { val: 0 };
let curScore_2 = { val: 0 };
let curScore_3 = { val: 0 };
let curScore_4 = { val: 0 };
let curScore_5 = { val: 0 };
let curScore_6 = { val: 0 };
let curScore_7 = { val: 0 };

const dice = [
  "./dice/dice-six-faces-one.png",
  "./dice/dice-six-faces-two.png",
  "./dice/dice-six-faces-three.png",
  "./dice/dice-six-faces-four.png",
  "./dice/dice-six-faces-five.png",
  "./dice/dice-six-faces-six.png",
];

function returnDiceFace(randNumber) {
  return `<img src="${dice[randNumber - 1]}" alt="" class="dice-img"></img>`;
}

function handleButtonClick(currentLine, currentPosition, player, point) {
  game_area.children[currentLine.val].children[
    currentPosition.val
  ].classList.remove(player);
  numberRolled.innerHTML = "";
  randNumber = Math.floor(Math.random() * (7 - 1) + 1);
  var dice_face = returnDiceFace(randNumber);
  setTimeout(() => {
    numberRolled.innerHTML = dice_face;
  }, 500);

  currentPosition.val += randNumber;
  if (currentLine.val === 0 && currentPosition.val > 4) {
    currentLine.val++;
    currentPosition.val = currentPosition.val - 5;
  } else if (currentLine.val === 1 && currentPosition.val > 4) {
    currentLine.val++;
    currentPosition.val = currentPosition.val - 5;
  } else if (currentLine.val === 2 && currentPosition.val > 4) {
    currentLine.val++;
    currentPosition.val = currentPosition.val - 5;
  } else if (currentLine.val === 3 && currentPosition.val > 4) {
    currentLine.val = 0;
    currentPosition.val = currentPosition.val - 5;
  }
  if (
    game_area.children[currentLine.val].children[
      currentPosition.val
    ].classList.contains("plus1")
  ) {
    point.val += 1;
  } else if (
    game_area.children[currentLine.val].children[
      currentPosition.val
    ].classList.contains("plus2")
  ) {
    point.val += 2;
  } else if (
    game_area.children[currentLine.val].children[
      currentPosition.val
    ].classList.contains("plus3")
  ) {
    point.val += 3;
  } else if (
    game_area.children[currentLine.val].children[
      currentPosition.val
    ].classList.contains("minus2")
  ) {
    point.val -= 2;
  } else if (
    game_area.children[currentLine.val].children[
      currentPosition.val
    ].classList.contains("plus4")
  ) {
    point.val += 4;
  }

  setTimeout(() => {
    switch (player) {
      case "player-1":
        score_1.innerHTML = point.val;
        break;
      case "player-2":
        score_2.innerHTML = point.val;
        break;
      case "player-3":
        score_3.innerHTML = point.val;
        break;
      case "player-4":
        score_4.innerHTML = point.val;
        break;
      case "player-5":
        score_5.innerHTML = point.val;
        break;
      case "player-6":
        score_6.innerHTML = point.val;
        break;
      case "player-7":
        score_7.innerHTML = point.val;
        break;
    }
    game_area.children[currentLine.val].children[
      currentPosition.val
    ].classList.add(player);
  }, 1500);
}

function handleLinePos(lineValue) {
  switch (lineValue) {
    case 0:
      return "Bottom";
    case 1:
      return "Right";
    case 2:
      return "Top";
    case 3:
      return "Left";
    default:
      return "Ai đọc được cái này ngoài Thắng";
  }
}

button1.onclick = function () {
  handleButtonClick(currentLine_1, currentPosition_1, "player-1", curScore_1);
  curLine1.innerHTML = handleLinePos(currentLine_1.val);
  curBlock1.innerHTML = currentPosition_1.val;
};

button2.onclick = function () {
  handleButtonClick(currentLine_2, currentPosition_2, "player-2", curScore_2);
  curLine2.innerHTML = handleLinePos(currentLine_2.val);
  curBlock2.innerHTML = currentPosition_2.val;
};

button3.onclick = function () {
  handleButtonClick(currentLine_3, currentPosition_3, "player-3", curScore_3);
  curLine3.innerHTML = handleLinePos(currentLine_3.val);
  curBlock3.innerHTML = currentPosition_3.val;
};

button4.onclick = function () {
  handleButtonClick(currentLine_4, currentPosition_4, "player-4", curScore_4);
  curLine4.innerHTML = handleLinePos(currentLine_4.val);
  curBlock4.innerHTML = currentPosition_4.val;
};

button5.onclick = function () {
  handleButtonClick(currentLine_5, currentPosition_5, "player-5", curScore_5);
  curLine5.innerHTML = handleLinePos(currentLine_5.val);
  curBlock5.innerHTML = currentPosition_5.val;
};

button6.onclick = function () {
  handleButtonClick(currentLine_6, currentPosition_6, "player-6", curScore_6);
  curLine6.innerHTML = handleLinePos(currentLine_6.val);
  curBlock6.innerHTML = currentPosition_6.val;
};

button7.onclick = function () {
  handleButtonClick(currentLine_7, currentPosition_7, "player-7", curScore_7);
  curLine7.innerHTML = handleLinePos(currentLine_7.val);
  curBlock7.innerHTML = currentPosition_7.val;
};

function revealQuestion() {
  true_answer.innerHTML = "";
  question_placeholder.innerHTML = Questions[index.val].question;
  answer_1.innerHTML = Questions[index.val].ans1;
  answer_2.innerHTML = Questions[index.val].ans2;
  answer_3.innerHTML = Questions[index.val].ans3;
  answer_4.innerHTML = Questions[index.val].ans4;
  true_answer.innerHTML = Questions[index.val].trueAnswer;
  index.val++;
}
question_btn.onclick = revealQuestion;
