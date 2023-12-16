"use strict";

const check = document.querySelector(".check");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highScore");
const message = document.querySelector(".message");
const again = document.querySelector(".again");
const number = document.querySelector(".number");

let guess = document.querySelector(".guess");
let sScore = document.querySelector(".sScore");
let sHighScore = document.querySelector(".sHighScore");

let ran = Math.trunc(Math.random() * 20) + 1;
let sc = 20;
let hs = 0;

function displayMessage(mes) {
  message.textContent = mes;
}

check.addEventListener("click", function () {
  // console.log("***********Check***********");
  // console.log(guess);
  // console.log("random", ran);
  // console.log("score", sc);
  // console.log("highScore", hs);

  let num = Number(guess.value);
  console.log("guess", num, typeof Number(num));

  if (!guess.value || Number(guess.value) == 0) {
    displayMessage("⛔️ No number!");
  } else {
    if (Number(guess.value) === ran) {
      displayMessage("🎉 Correct Number!");
      number.textContent = guess.value;
      document.body.style.background = "#acd";
      // document.querySelector("body").style.background = "#acd";
      document.querySelector(".number").style.width = "30rem";

      if (hs >= sc) {
        sHighScore.textContent = hs;
      } else {
        hs = sc;
        sHighScore.textContent = hs;
      }
    } else if (Number(guess.value) !== ran) {
      if (sc > 1) {
        Number(guess.value) > ran
          ? displayMessage("📈 Too high!")
          : displayMessage("📉 Too low!");
        sc -= 1;
        sScore.textContent = sc;
      } else {
        displayMessage("💥 You lost the game!");
        sScore.textContent = 0;
      }
    }
    // if (Number(guess.value) > ran) {
    //   message.textContent = "📈 Too high!";
    //   sc -= 1;
    //   sScore.textContent = sc;
    // } else {
    //   message.textContent = "📉 Too low!";
    //   sc -= 1;
    //   sScore.textContent = sc;
    // }
  }
  // console.log("score", sc);
  // console.log("highScore", hs);
});

again.addEventListener("click", function () {
  // console.log("***********Again***********");
  // console.log("score", sc);
  // console.log("highScore", hs);

  sc = 20;
  sScore.textContent = sc;
  ran = Math.trunc(Math.random() * 20) + 1;
  console.log("random number: ", ran, typeof ran);
  document.body.style.background = "#222";
  guess.value = "";
  number.textContent = "?";
  displayMessage("Start guessing...");
  number.style.width = "15rem";

  // console.log("score", sc);
  // console.log("highScore", hs);
});
