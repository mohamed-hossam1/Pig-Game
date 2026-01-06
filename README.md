

# Pig Game

A classic dice-based strategy game where players compete to reach 100 points first. Players roll dice to accumulate points, but must decide when to hold their points or risk losing them!

## Game Rules

- Two players take turns rolling a dice
- Each roll adds to the player's current turn score
- Players can "hold" to add their current score to their total
- If a player rolls a 1, they lose all points for that turn and play switches to the other player
- First player to reach 100 points wins!

## Features

- **Two-player gameplay**: Alternating turns between Player 1 and Player 2
- **Score tracking**: Current turn score and total scores for both players
- **Visual feedback**: Active player highlighting and winner announcement
- **Dice animation**: Visual dice representation for each roll
- **Game controls**: New game, roll dice, and hold buttons
- **Responsive design**: Works on desktop and mobile devices

## Technologies Used

- **HTML5**: Semantic markup for game structure
- **CSS3**: Styling and animations
- **JavaScript**: Game logic and interactivity

## Project Structure

```
├── index.html      # Game interface
├── style.css       # Game styling
├── script.js       # Game logic
├── images/         # Dice images
│   ├── dice-1.png
│   ├── dice-2.png
│   ├── dice-3.png
│   ├── dice-4.png
│   ├── dice-5.png
│   └── dice-6.png
└── README.md       # This file
```

## Game Controls

- **🎲 Roll dice**: Roll the dice to add points to your current turn
- **📥 Hold**: Add your current turn score to your total score
- **🔄 New game**: Reset the game to start over

## How to Play

1. Player 1 starts by clicking "Roll dice"
2. Each roll (except 1) adds to the current turn score
3. Click "Hold" to add current score to total and switch turns
4. If you roll a 1, your turn ends and you lose all current points
5. First player to reach 100 points wins!

## Demo

Play the game online at: https://pig-game-mo.netlify.app/

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamed-hossam1/Pig-Game.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Pig-Game
   ```

3. Open `index.html` in your browser

## Code Structure

- **Game State Management**: Tracks scores, current player, and game status
- **Event Handling**: Manages button clicks and game interactions
- **DOM Manipulation**: Updates UI elements based on game state
- **Turn Management**: Handles player switching and game flow

---

Have fun playing! 🎲
