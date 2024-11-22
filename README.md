Whac-a-Mole Game
The Whac-a-Mole game is a fun and interactive browser-based game where players try to hit as many moles as possible while avoiding a bomb tile within a limited time.
The game is built using HTML, CSS, and JavaScript and can be played on any modern web browser.

----------------------Features-----------------------------
Customizable Timer: Players can set the game duration before starting.
Dynamic Gameplay:
Moles randomly appear on the board.
A bomb (piranha plant) also appears, adding a challenge to avoid it.
Real-time Score Tracking: Scores are displayed and updated as the game progresses.
Game Over Logic: The game ends when:
The timer runs out.
The player clicks on the bomb tile.
Interactive Interface: The game features engaging visuals with a mole and bomb images.
Restart Button: Players can restart the game to play again.

![image](https://github.com/user-attachments/assets/7b73dc60-0fef-4cfb-ace4-a052ec7f44d8)




-------------------------------------Technologies Used-------------------------------------------
HTML: For structuring the game layout.
CSS: For styling the game board and elements.
JavaScript: For the game logic, including animations, events, and gameplay.

-------How to Play--------
Open the game in a browser.
Enter the desired game duration in the "Set Time" field (default is 30 seconds).
Click the Start button to begin the game.
Moles and bomb tiles will appear randomly on the board:
Click on the mole to earn points (+10 points per hit).
Avoid clicking on the bomb tile (piranha plant), as it will end the game immediately.

The game ends when-
1.The timer reaches zero.
2.You click on the bomb tile.
--Your final score will be displayed on the screen.




1. HTML File (index.html)
The main file that sets up the game structure.

Key Elements:
Header Section: Displays the game title and score/time tracker.
Input Fields: Allows players to set a custom game duration.
Game Board: A 3x3 grid where moles and bomb tiles appear.
Restart Button: Allows the player to restart the game.


2. CSS File (mole.css)
Handles the styling of the game, including the game board and interactive elements.

Key Styles:
Game Board: A grid layout with a background resembling soil.
Tiles: Background images for mole and bomb tiles, styled for a fun visual experience.
Buttons and Inputs: Styled for an interactive and consistent design.





3. JavaScript File (mole.js)
Contains the logic for the gameplay.

Key Variables:
-MolesTileCurrent: Tracks the current tile with a mole.
- BombTileCurrent: Tracks the current tile with a bomb.
- score: Keeps track of the player's score.
- timeLeft: Stores the remaining time in the game.
- gameInterval, moleInterval, plantInterval: Manage the intervals for the timer, mole placement, and bomb placement.
  ------Key Functions:
- setGame():
Initializes the game board.
Resets the score, time, and game state.
- getRandomTile():
Selects a random tile for moles and bomb placement.
- setMole():
Places a mole image on a random tile.
Ensures it does not overlap with the bomb tile.
- setPlant():
Places a bomb image on a random tile.
Ensures it does not overlap with the mole tile.
- selectTile():
Handles the logic for clicking a tile:
Increases the score if a mole is hit.
Ends the game if a bomb tile is clicked.
- countDown():
Decreases the timer every second.
Ends the game when the timer reaches zero.
- clearIntervals():
Stops all active intervals when the game ends.
- restartGame():
Resets the game and starts a new session.
