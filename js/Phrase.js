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
        const phraseWords = this.phrase.split(' ');
        phraseWords.forEach((word, index) => {
            const wordLI = document.createElement('li');
            const wordUL = document.createElement('ul');
            const letters = word.split('');
            letters.forEach(letter => {
                const phraseLetter = document.createElement('li')
                phraseLetter.classList.add('hide', 'letter', letter);
                phraseLetter.textContent = letter;
                wordUL.appendChild(phraseLetter);
            });
            wordLI.appendChild(wordUL);
            phraseContainer.appendChild(wordLI);
            
            if (index !== phraseWords.length-1) {
                const space = document.createElement('li');
                space.className = 'space';
                space.textContent = ' ';
                phraseContainer.appendChild(space);
            }
        });
    }

    /**
     * Checks to see if player's selected letter is in phrase
     * @returns {boolean}   whether or not the letter is in the phrase
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