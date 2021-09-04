# FSJS Project 4: Object Oriented Programming Game
 My fourth project for the Full Stack JavaScript Techdegree program at Treehouse. A phrase guessing game built using object-oriented programmimg principles.
 
## How To Use
 - You can view a live version of this project here: https://g.ramoshe.com/thp4-OOPGame/
 - If you want a local copy of the project:
    1. Download the files: https://github.com/ramoshe/thp4-OOPGame/archive/refs/heads/main.zip
    2. Open the `index.html` file in your browser

## Extra Credit Customizations
 - Changed addPhraseToDisplay() method so that each phrase word stays together on one line (text wrapping)
 - Edited gameOver() method to add a reveal of the phrase when player loses and number of wrong letters when player wins
 - Added keyboard functionality (keyboard buttons control on screen buttons) in app.js
 - Phrase is logged to the console for the cheaters
 - Style changes in app.js:
     - Changed font of title and header
     - Changed title from "Phrase Hunter" to "Guess The Phrase"
     - Added drop shadow to title and header
     - Added instrictions to initial page
     - Added drop shadows to Start Game and all keyboard buttons
     - Added title to scoreboard
     - Made heart icons in scoreboard bigger

### PLEASE NOTE 
I got the ideas for the first two customizations (text wrapping and extra Game Over message) from other Treehouse FSJS Techdegree student projects, but I did not look at their code, I found my own way to implement similar features.

## Project Description
*From Treehouse*

In this project, you'll create a browser-based, word guessing game: "Phrase Hunter." You’ll use JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

Using JavaScript, you’ll create two JavaScript classes with specific properties and methods. You'll create a Game class for managing the game, and a Phrase class to help with creating an array of Phrase objects.

Your code will choose a random phrase, split the phrase into letters, and put those letters onto the gameboard.

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, your programming will need to disable that letter on the onscreen keyboard.

After building this project, you'll have another great portfolio piece to show off your skills, a fun app that you can share with your friends and family, and good understanding of the principles of Object-Oriented Programming.
