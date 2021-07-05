/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase('live in the moment'), 
                        new Phrase('follow your heart'),
                        new Phrase('positive vibes only'),
                        new Phrase('you are enough'),
                        new Phrase('life is a journey')];
        this.activePhrase = null;
    }

    /**
     * Initializes game
     */
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        console.log('HEY CHEATER! The phrase is: ' + this.activePhrase.phrase);
    }

    /**
     * Randomly retrieves one of the phrases
     * @returns {Object}    random object from this.phrases array
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /**
     * Controls most of the game logic
     * @param   {Object}    the event object that triggers this function
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
     * Checks if player has won the game by revealing all letters 
     * @returns {boolean}   whether all letters are revealed
     */
    checkforWin() {
        let allLettersRevealed = false;
        const hiddenLetter = document.querySelector('.hide');
        if (hiddenLetter === null) {
            allLettersRevealed = true;
        }
        return allLettersRevealed;
    }

    /**
     * Displays overlay with win or loss message and resets game
     */
    gameOver() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'flex';
        overlay.classList.remove('start');
        const message = document.querySelector('#game-over-message');
        if (this.checkforWin()) {
            message.textContent = 'Congrats, you won!';
            overlay.classList.remove('lose');
            overlay.classList.add('win');
        } else {
            message.textContent = 'Sorry, you lost.';
            overlay.classList.remove('win');
            overlay.classList.add('lose');
        }

        //erase game
        document.querySelector('#phrase ul').innerHTML = '';
        const keyboardButtons = Array.from(document.querySelectorAll('.key'));
        keyboardButtons.forEach(key => {
            key.classList.remove('chosen', 'wrong');
            key.disabled = false;
        });
        const lifeHearts = Array.from(document.querySelectorAll('.tries img'));
        lifeHearts.forEach(heart => heart.setAttribute('src', 'images/liveHeart.png'));
        this.missed = 0;
    }
}