/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', () => {
    game.startGame();
});

const keyBoard = document.querySelector('#qwerty');
keyBoard.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});

/**
 * Extra Credit - add keyboard functionality
 */
document.addEventListener('keydown', (e) => {
    if (/^[a-z]$/.test(e.key)) {
        const allButtons = Array.from(document.querySelectorAll('.key'));
        const letterButton = allButtons.find(button => button.textContent === e.key);
        game.handleInteraction(letterButton);
    }
});