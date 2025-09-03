'use strict';

const fristScore = document.getElementById("score--0");
const secondScore = document.getElementById("score--1");

const diceImage = document.querySelector(".dice")

const fristCurrent = document.getElementById("current--0");
const secondCurrent = document.getElementById("current--1"); 

const dices = ["./images/dice-1.png","./images/dice-2.png","./images/dice-3.png","./images/dice-4.png","./images/dice-5.png","./images/dice-6.png"]
let score = 0
let flag = true
let GameOver = false

const togglePlayer = function(){
    score = 0
    flag = !flag
    fristCurrent.textContent = 0
    secondCurrent.textContent = 0
    document.querySelector(".player--0").classList.toggle("player--active")
    document.querySelector(".player--1").classList.toggle("player--active")
}

const roll = function(){
    if(GameOver) return
    let randomDice = Math.floor(Math.random()*6)
    diceImage.src = dices[randomDice]
    
    if(diceImage.style.opacity == 0) diceImage.style.opacity = 1

    if(randomDice === 0) togglePlayer()
    else score+=randomDice+1

    if(flag) fristCurrent.textContent = score
    else secondCurrent.textContent = score

}

const holdScore = function(){
    if(GameOver) return
    fristScore.textContent = Number(fristScore.textContent) + Number(fristCurrent.textContent)
    secondScore.textContent = Number(secondScore.textContent) + Number(secondCurrent.textContent)
    if(Number(fristScore.textContent)>=100){
        document.querySelector(".player--0").classList.add("player--winner")
        GameOver = true
    }
    else if(Number(secondScore.textContent)>=100){
        document.querySelector(".player--1").classList.add("player--winner")
        GameOver = true
    }
    else togglePlayer()
}


const reset = function(){
    fristScore.textContent = 0
    secondScore.textContent = 0
    diceImage.style.opacity = 0 
    fristCurrent.textContent = 0
    secondCurrent.textContent = 0
    document.querySelector(".player--1").classList.remove("player--winner")
    document.querySelector(".player--0").classList.remove("player--winner")
    GameOver = false
    score = 0
}

document.querySelector(".btn--new").addEventListener("click",reset)
document.querySelector(".btn--roll").addEventListener("click",roll)
document.querySelector(".btn--hold").addEventListener("click",holdScore)
