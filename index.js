var Word = require("./Word");


var wordBank = ["amys ice cream", "baskin robbins", "ben and jerrys", "birthday cake", "blue bell", "blueberry", "butter pecan", "cheesecake", "choco taco", "chocolate chip", "cookie dough", "cookies and cream", "dairy queen", "dippin dots", "french vanilla", "green tea", "haagen dazs", "ice cream cake", "marble slab", "milkshake", "mint chocolate chip", "neapolitan", "peanut butter", "pralines and cream", "red velvet cake", "rocky road", "salted caramel", "strawberry", "sugar cone", "tutti frutti", "vanilla bean", "waffle cone", "wafer cone"];



var inquirer = require("inquirer");
var wordActual;
var newWord;
var lives;
var comparator = "";
var alreadyGuessed = [];
beginGame();
function beginGame() {
    wordActual = wordBank[Math.floor(Math.random() * wordBank.length)];
    newWord = new Word(wordActual);
    newWord.buildDisplay();
    lives = 10;
    getGuess();
}
  
function getGuess() {
    console.log("Lives remaining: " + lives);
    if (lives > 0) {
        inquirer.prompt([
            {
                type: "input",
                name: "userGuess",
                message: "Enter a letter to guess:",
            }
        ]).then(function(user) {
            guess = user.userGuess;
            if (alreadyGuessed.indexOf(guess) === -1) {
                newWord.runCheck(guess);
                alreadyGuessed.push(guess);
                if (newWord.updateDisplay() === comparator) {
                    console.log("letter not found");
                    console.log(comparator);
                    lives--;
                    getGuess();
                } else if ((newWord.updateDisplay().indexOf("_")) === -1) {
                    console.log("you win");
                } else {
                    console.log(newWord.updateDisplay());
                    comparator = newWord.updateDisplay();
                    getGuess();
                }
            } else {
                console.log("letter already guessed");
                console.log(comparator);
                getGuess();
            }
        });
    } else {
        console.log("you lose");
    }
}
