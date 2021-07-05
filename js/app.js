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
        game.handleInteraction(e);
    }
});