'use strict';

const firstScore   = document.getElementById("score--0");
const secondScore  = document.getElementById("score--1");

const diceImage    = document.querySelector(".dice");

const firstCurrent  = document.getElementById("current--0");
const secondCurrent = document.getElementById("current--1");

const dices = [
  "./images/dice-1.png",
  "./images/dice-2.png",
  "./images/dice-3.png",
  "./images/dice-4.png",
  "./images/dice-5.png",
  "./images/dice-6.png",
];

let score    = 0;
let flag     = true;   // true = player 1's turn
let gameOver = false;

/* ─── helpers ─── */
const isMobile = () => window.innerWidth <= 600;

const togglePlayer = function () {
  score = 0;
  flag  = !flag;
  firstCurrent.textContent  = 0;
  secondCurrent.textContent = 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
};

/* On mobile the dice is a regular in-flow element sitting between the two
   player rows. We move it into / out of the DOM at the right spot so it
   always appears between the players on small screens. */
const positionDice = function () {
  const main     = document.querySelector("main");
  const player0  = document.querySelector(".player--0");
  const player1  = document.querySelector(".player--1");

  if (isMobile()) {
    // Insert between the two player sections if not already there
    if (diceImage.parentElement !== main || !diceImage.previousElementSibling?.classList.contains("player--0")) {
      main.insertBefore(diceImage, player1);
    }
  } else {
    // Put it back at the end of main (absolute positioning handles the rest)
    if (!diceImage.nextElementSibling?.classList.contains("btn--new")) {
      main.appendChild(diceImage);
    }
  }
};

/* ─── roll ─── */
const roll = function () {
  if (gameOver) return;

  const randomDice = Math.floor(Math.random() * 6);
  diceImage.src          = dices[randomDice];
  diceImage.style.opacity = 1;
  diceImage.classList.remove("is-rolling");
  // Restart animation on rapid rolls
  void diceImage.offsetWidth;
  diceImage.classList.add("is-rolling");

  if (randomDice === 0) {
    togglePlayer();
  } else {
    score += randomDice + 1;
  }

  if (flag) firstCurrent.textContent  = score;
  else      secondCurrent.textContent = score;
};

/* ─── hold ─── */
const holdScore = function () {
  if (gameOver) return;

  firstScore.textContent  = Number(firstScore.textContent)  + Number(firstCurrent.textContent);
  secondScore.textContent = Number(secondScore.textContent) + Number(secondCurrent.textContent);

  if (Number(firstScore.textContent) >= 100) {
    document.querySelector(".player--0").classList.add("player--winner");
    gameOver = true;
  } else if (Number(secondScore.textContent) >= 100) {
    document.querySelector(".player--1").classList.add("player--winner");
    gameOver = true;
  } else {
    togglePlayer();
  }
};

/* ─── reset ─── */
const reset = function () {
  firstScore.textContent   = 0;
  secondScore.textContent  = 0;
  diceImage.style.opacity  = 0;
  firstCurrent.textContent  = 0;
  secondCurrent.textContent = 0;

  document.querySelector(".player--0").classList.remove("player--winner", "player--active");
  document.querySelector(".player--1").classList.remove("player--winner", "player--active");
  document.querySelector(".player--0").classList.add("player--active");

  gameOver = false;
  score    = 0;
  flag     = true;
};

/* ─── event listeners ─── */
const newBtn  = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

const pressFlash = function (btn) {
  btn.classList.remove("is-pressed");
  // Restart animation on rapid clicks
  void btn.offsetWidth;
  btn.classList.add("is-pressed");
};

newBtn.addEventListener("click", reset);
rollBtn.addEventListener("click", function () {
  pressFlash(rollBtn);
  roll();
});
holdBtn.addEventListener("click", holdScore);

/* Re-position dice on resize */
window.addEventListener("resize", positionDice);
positionDice(); // run once on load
