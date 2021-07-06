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

/**
 * Extra Credit - style changes (in order of appearance)
 */
window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    title.textContent = 'Guess The Phrase';
    title.style.fontFamily = 'Chango';
    title.style.textShadow = '2px 2px 3px black';

    const howTo = document.createElement('h1');
    howTo.textContent = 'How to Play:';
    howTo.style.fontSize = '1.5em';
    startButton.insertAdjacentElement('beforebegin', howTo);

    const instructions = document.createElement('p');
    instructions.innerHTML = `On the next screen you'll see boxes that represent the letters in a secret phrase.</p><p>
                              Use your keyboard or the buttons on screen to guess letters in the phrase.</p><p>
                              Correct guesses will appear in the phrase display.</p><p>
                              Incorrect guesses will take away one of your lives.</p><p>
                              Good luck!`;
    instructions.style.paddingBottom = '3em';
    startButton.insertAdjacentElement('beforebegin', instructions);

    startButton.style.boxShadow = '2px 2px 3px black';
    
    const header = document.querySelector('.header');
    header.textContent = 'Guess The Phrase';
    header.style.fontFamily = 'Chango';
    header.style.textShadow = '2px 2px 3px gray';

    const phraseLetters = Array.from(document.querySelectorAll('.letter'));
    console.log(phraseLetters);
    phraseLetters.forEach(letter => letter.style.boxShadow = '2px 2px 3px gray');

    const keyButtons = Array.from(document.querySelectorAll('.key'));
    keyButtons.forEach(button => button.style.boxShadow = '2px 2px 3px gray');

    const scoreTitle = document.createElement('h1');
    scoreTitle.textContent = 'Lives Remaining:';
    document.querySelector('#scoreboard').insertAdjacentElement('afterbegin', scoreTitle);

    const heartIcons = Array.from(document.querySelectorAll('.tries img'));
    heartIcons.forEach(icon => {
        icon.height = '70';
        icon.width = '60';
    });
});