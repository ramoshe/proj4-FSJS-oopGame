/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ['live in the moment', 
                        'follow your heart',
                        'positive vibes only',
                        'you are enough',
                        'life is a journey'];
        this.activePhrase = null;
    }

    /**
     * Initializes game
     */
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.phrases.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Randomly retrieves one of the phrases
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /**
     * Controls most of the game logic
     */
    handleInteraction(event) {
        const clickedLetter = event.target.textContent;
        event.target.disabled = true;
        if (!this.activePhrase.checkLetter(clickedLetter)) {
            event.target.classList.add('wrong');
            this.removeLife();
        } else {
            event.target.classList.add('chosen');
            this.activePhrase.showMatchedLetter(clickedLetter);
            if (this.checkforWin()) {
                this.gameOver();
            }
        }
    }

    /**
     * Removes a life from the scoreboard
     */
    removeLife() {
        const liveHeart = document.querySelector('[src="images/liveHeart.png"]');
        liveHeart.setAttribute('src', 'images/lostHeart.png');
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver();
        }
    }

    /**
     * Checks if player has revealed all letters
     */
    checkforWin() {
        const allRevealed = false;
        const hiddenLetter = document.querySelector('.hide');
        if (hiddenLetter === null) {
            allRevealed = true;
        }
        return allRevealed;
    }

    /**
     * Displays overlay with win or loss message
     */
    gameOver() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'flex';
        overlay.classList.remove('start');
        const message = document.querySelector('#game-over-message');
        if (this.checkforWin()) {
            message.textContent = 'Congrats! You won the game!';
            overlay.classList.add('win');
        } else {
            message.textContent = 'Sorry, you lost the game.';
            overlay.classList.add('lose');
        }
    }
}