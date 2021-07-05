/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Displays phrase letter placeholders for game start
     */
    addPhraseToDisplay() {
        const phraseContainer = document.querySelector('#phrase ul');
        const phraseArray = this.phrase.split('');
        phraseArray.forEach(character => {
            if (character === ' ') {
                const space = document.createElement('li');
                space.className = 'space';
                space.textContent = character;
                phraseContainer.appendChild(space);
            } else {
                const letter = document.createElement('li');
                letter.classList.add('hide', 'letter', character);
                letter.textContent = character;
                phraseContainer.appendChild(letter);
            }
        });
    }

    /**
     * Checks to see if player's selected letter is in phrase
     */
    checkLetter(guess) {
        let guessIsCorrect = false;
        const phraseArray = this.phrase.split('');
        phraseArray.forEach(character => {
            if (guess == character) {
                guessIsCorrect = true;
            }
        });
        return guessIsCorrect;
    }

    /**
     * Reveals the letter(s) on board that match player's selection
     * @param   {string}    letter - the letter that matches player's selection
     */
    showMatchedLetter(letter) {
        const matchingLetters = Array.from(document.getElementsByClassName(letter));
        matchingLetters.forEach(letter => {
            letter.classList.add('show');
            letter.classList.remove('hide');
        });
    }
}
