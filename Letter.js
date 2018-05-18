// Constructor function for creating Letter objects
var changed;
var Letter = function(letterActual) {
    this.letterActual = letterActual;
    this.beenGuessed = false;

    this.displayWhich = function() {
        if (this.beenGuessed === true) {
            return this.letterActual;
        }
        else {
            return "_";
        }
    };
    this.checkGuess = function(guess) {
        if (guess === this.letterActual) {
            this.beenGuessed = true;
            changed++;
        }
    }
};

//newLetter = new Letter("a");
//console.log(newLetter);
//newLetter.checkGuess("b");
//console.log(newLetter.beenGuessed);
//console.log(newLetter.displayWhich());

module.exports = Letter;
  