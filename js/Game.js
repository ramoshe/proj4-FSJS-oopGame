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
    handleInteraction(button) {
        const clickedLetter = button.textContent;
        button.disabled = true;
        if (!this.activePhrase.checkLetter(clickedLetter)) {
            button.classList.add('wrong');
            this.removeLife();
        } else {
            button.classList.add('chosen');
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

            // add extra message
            const livesLost = document.createElement('h1');
            if (this.missed > 0) {
                livesLost.textContent = `You only guessed ${this.missed} wrong letters!`;
            } else {
                livesLost.textContent = `You didn't even guess any wrong letters!`;
            }
            livesLost.className = 'extra-message';
            livesLost.style.paddingBottom = '1em';
            message.insertAdjacentElement('afterend', livesLost)
        } else {
            message.textContent = 'Sorry, you lost.';
            overlay.classList.remove('win');
            overlay.classList.add('lose');

            // add extra message
            const phraseReveal = document.createElement('h1');
            phraseReveal.textContent = `The phrase was "${this.activePhrase.phrase}".`;
            phraseReveal.className = 'extra-message';
            phraseReveal.style.paddingBottom = '1em';
            message.insertAdjacentElement('afterend', phraseReveal);
        }
        
        // erase game
        document.querySelector('#phrase ul').innerHTML = '';
        const keyboardButtons = Array.from(document.querySelectorAll('.key'));
        keyboardButtons.forEach(key => {
            key.classList.remove('chosen', 'wrong');
            key.disabled = false;
        });
        const lifeHearts = Array.from(document.querySelectorAll('.tries img'));
        lifeHearts.forEach(heart => heart.setAttribute('src', 'images/liveHeart.png'));
        this.missed = 0;

        // clear extra message on Start Game button click
        document.querySelector('#btn__reset').addEventListener('click', () => document.querySelector('.extra-message').remove())
    }
}