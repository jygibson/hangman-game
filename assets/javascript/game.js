
// create the variables 

var wins = 0;
var loss = 0;
var guesses = 10;
var guessChoices = [];
var underscores = [];

var wordBank =  ["Bartlet","Abby", "Donnatella","Mcgarry", "Cregg","Deputy", "Communications","dignitaries", "Ambassador","Ziegler","Sorkin","pedeconference", "democrat", "republican","senator", "congressman", "staffer"];
var randomWord = wordBank[(Math.floor(Math.random() * wordBank.length))];
console.log(randomWord);
var alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var userCorrectElement=document.getElementById("word");
var userWinsElement=document.getElementById("winScore");
var userLossElement= document.getElementById("lossScore");
var guessesRemainElement= document.getElementById("guessesleft");
var guessedElement= document.getElementById("guessed");

function keyPressEvent() {
    var userGuess = event.key;
    guessedElement.textContent = userGuess;

    if (randomWord.includes(userGuess)=== true){
        guesses--;
        
        //find which index should be replaced
    }

    else if (randomWord.includes(userGuess) === false){
        guesses--;
        guessChoices = [];
        guessChoices.push(userGuess);
    }

    else (guesses === 0);{
        loss++;
        guesses=10;
        guessChoices=[];
    }

    guessedElement.textContent = " " + guessChoices;
    userWinsElement.textContent = " " + wins;
    userLossElement.textContent = " " + loss;
    guessesRemainElement.textContent= " " + guesses;

}

document.onkeydown=keyPressEvent;


