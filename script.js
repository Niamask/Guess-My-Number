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
// let sc = Number(sScore.textContent);
// let hs = Number(sHighScore.textContent);

check.addEventListener("click", function () {
  // console.log("***********Check***********");
  // console.log(guess);
  // console.log("random", ran);
  // console.log("score", sc);
  // console.log("highScore", hs);

  let num = Number(guess.value);
  console.log("guess", num, typeof Number(num));

  if (!guess.value || Number(guess.value) == 0) {
    message.textContent = "⛔️ No number!";
  } else {
    if (Number(guess.value) == ran) {
      message.textContent = "🎉 Correct Number!";
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
    } else if (Number(guess.value) > ran) {
      message.textContent = "📈 Too high!";
      sc -= 1;
      sScore.textContent = sc;
    } else {
      message.textContent = "📉 Too low!";
      sc -= 1;
      sScore.textContent = sc;
    }
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
  message.textContent = "Start guessing...";
  number.style.width = "15rem";

  // console.log("score", sc);
  // console.log("highScore", hs);
});
