var Letter = require("./Letter");

var Word = function(wordActual) {
    this.wordArray = wordActual.split("");
    this.wordDisplay = [];
    this.wordString = [];
    this.buildDisplay = function() {
        for (i = 0; i < this.wordArray.length; i++) {
            this.wordDisplay.push(new Letter(this.wordArray[i]));
        }
    };
    this.runCheck = function(guess) {
        for (j = 0; j < this.wordDisplay.length; j++) {
            this.wordDisplay[j].checkGuess(guess);
        }
    }
    this.updateDisplay = function() {
        for (k = 0; k < this.wordDisplay.length; k++) {
            this.wordString[k] = this.wordDisplay[k].displayWhich();
        }
        return this.wordString.join(" ");
    }
};




module.exports = Word;
