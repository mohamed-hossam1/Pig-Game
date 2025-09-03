# Pig Game

A simple and fun two-player **Pig dice game** implemented with **HTML**, **CSS**, and **Vanilla JavaScript**. The game is designed for quick local play with a clean UI and responsive layout.

---

## 🎲 Project Overview

Pig is a turn-based dice game where players race to reach a target score (default: **100**). On each turn, a player repeatedly rolls a die. If they roll a 1, their current turn score resets and the turn passes to the opponent. The player can choose to "Hold" to add the current turn score to their total score and pass the turn. First player to reach the target score wins.

---

## ✨ Features

* 🎯 Two-player gameplay (Player 1 vs Player 2).
* 🎲 Roll dice action with dynamic dice image.
* 📥 Hold action to bank current points.
* 🔄 New game / Reset functionality.
* ✅ Visual active-player indicator and winner state.
* 🔧 Pure JavaScript logic, no external libraries.

---

## 🧩 Tech Stack

* **HTML5** – Semantic structure.
* **CSS3** – Styling and responsive layout.
* **JavaScript (ES6+)** – Game logic and DOM updates.

---

## 📁 Project Structure

```
pig-game/
├─ index.html
├─ style.css
├─ script.js
└─ images/
   ├─ dice-1.png
   ├─ dice-2.png
   ├─ dice-3.png
   ├─ dice-4.png
   ├─ dice-5.png
   └─ dice-6.png
```

---

## 🚀 Getting Started (Local)

1. Clone the repository:

```bash
git clone https://github.com/mohamed-hossam1/Pig-Game.git
cd Pig-Game
```

2. Open `index.html` in your browser, or run a local server:

---

## ▶️ How to Play

* Click **Roll dice** to roll the die.
* If you roll **1**, your current turn ends and your turn score resets.
* Click **Hold** to add the current turn score to your total score and pass the turn.
* First player to reach **100** points wins.
* Click **New game** to reset the board.

---

## 🔧 Important Code Notes

* `script.js` handles the main game logic: rolling, holding, switching players, and checking for win state.
* Dice images are stored in `images/` and swapped by updating the `src` attribute.
* `GameOver` flag prevents further actions after a winner is declared.

---

## ♻️ Improvements & Ideas

* Add customizable target score input.
* Add sound effects and animations for rolls/win.
* Add keyboard controls (e.g., R = roll, H = hold, N = new game).
* Make game state persistent using `localStorage`.
* Add AI opponent for single-player mode.

