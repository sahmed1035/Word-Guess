//1. create a global array called randomWords that has 
//   five words in it.

//wordGame object has the property values and methods to play this word guessing game.
var wordGame = {
    wins: 0,  //initialize win to 0, going forward it will increment based off of the number of corrected word guesses from the user.
    losses: 0, //initialize loss to 0, going forward it will increment based off of the zero remaining number of word guesses from the user.
    numberOfRemainingGuesses: 12, //initialize to always 12 from the start
    computerGuessWord: "", //this stores the selected random word until user wins or losses
    wrongGuessWord: "", //this stores the letter concatenation everytime it's the wrong letter guess.
    rightGuessWord:[],//this stores the corrected key pressed letter guess according to the index of computerGuessWord that stores the selected random word
    underlines:[],  //this stores all underlines that matches the   this.computerGuessWord length
    inputKeypressed: "", // this stores the key pressed letter
    initializeUnderlinePlaceHolderforRightGuessWord: function () {
        //1. create a for loop according to the this.computerGuessWord's length ending condition
        
        //2. inside the for loop, the array this.rightGuessWord is assigned to empty string 
        //   within the open and close double quotes. 
        //   (for example, this.rightGuessWord[i] += " " is like saying this.rightGuessWord[i] = rightGuessWord[i] + " " ) 
        //   don't forget semicolon.

        //3. also inside the for loop,  the array underlines is assigned 
        //   to an underline symbol within the open and close double quotes.
        //   (for example, underlines +="_") 
        //   don't forget semicolon.
        //   don't forget to close the for loop curly bracket
     },
    checkForWins: function () {
         
         //1. initialize a variable called counter and is set to 1. 
         //   It uses for counting the corrected number
         //   of letter guesses off of the this.computerGuessWord's length

        // 2. created a for loop to this.computerGuessWord.length that stores 
        //    the selected random word

         // 3. check if the  array this.rightGuessWord still has empty string.
         // if no empty string, the counter, for the corrected number of letter guesses, will 
         // increment. (for example, if (this.rightGuessWord[i].indexOf(" " === -1)){ counter++;})
    
         // 4. if the counter equals(===) this.computerGuessWord.length
         //    then increments this.wins++ and call  this.resetGame()
        
    },
    checkForLosses: function () {
        //If number of remainingGuesses equals to zero
        // then increments the this.losses++ and call this.resetGame()
         
    },
    resetGame: function () {
                   
        //reset the variables below back to the original settings.
        this.numberOfRemainingGuesses = 12;
        this.computerGuessWord = "";
        this.wrongGuessWord = "";
        this.rightGuessWord = [];
        this.underlines=[];
        this.inputKeypressed= "";
        this.initializeUnderlinePlaceHolderforRightGuessWord();
        
        //1. use the random generator to get the index
        //   of element of randomWords array from 0 to 4

        //2. call computerGuessWord from the wordGame Object
        //   ,using a dot operator and assigned with the 
        //   random picked word. Make sure to lowercase it.


    },
    checkComputerGuessWordwithKeypressedLetter: function () {

          //1. create a for loop that has the this.computerGuessWord.length ending
          //   Inside the for loop, check to see if this.computerGuessWord has any 
          //   letter that matches the keypressed letter 
          //(for example, if (this.computerGuessWord.indexOf(this.inputKeypressed > -1)) ). If it does, 
          //  it call this.rightGuessWord[i] array and assigned the keypressed letter into it 

          // 2. Otherwise, it stores the keypressed letter into wrongGuessWord variable
          //   (for exampe, this.wrongGuessWord +=this.inputKeypressed + " ")
          //   and decrement   this.numberOfRemainingGuesses.
          //    Lastly close the curly for the for loop
        

    }

};


function initialize_Game() {


 
    //1. use the random generator to get the index
    //   of element of randomWords array from 0 to 4

    //2. call wordGame.computerGuessWord from the wordGame Object
    //   using a dot operator and assigned with the 
    //   random picked word. Make sure to lowercase it.

    //3. call wordGame.initializeUnderlinePlaceHolderforRightGuessWord method
    //using a dot operator of wordGame Object

}

function allLetter(inputtxt) {
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.value.match(letters)) {
        return true;
    }
    else {

        return false;
    }
}

function playGame()
{
  //begin to check for key pressed letter off of the selected 
  //random word that is stored in this.computerGuessWord
  wordGame.checkComputerGuessWordwithKeypressedLetter();

  //if it is the right letter guess, the wordGame.rightGuessWord will display in current-word div
  document.getElementById("current-word").textContent= wordGame.rightGuessWord;

  //it will display the the underline symbol in underlinediv
  document.getElementById("underlinediv").textContent= wordGame.underlines;
  
  //the number of remaining guesses will decrement if it is the wrong letter key pressed.
  // and will display in the guesses-remaining div
  document.getElementById("guesses-remaining").textContent=wordGame.numberOfRemainingGuesses;
  
   //the wrong letter guess will be display  in the guessed-letters div.
  document.getElementById("guessed-letters").textContent=wordGame.wrongGuessWord;
  
   //everytime if a letter is pressed, it checks for wins and displays the total wins
   //in the showWins div
  wordGame.checkForWins();
  document.getElementById("showWins").textContent= wordGame.wins;

     //everytime if a letter is pressed, it checks for losses and displays the total wins
   //in the showLosses div
  wordGame.checkForLosses();
  document.getElementById("showLosses").textContent=wordGame.losses;

}

document.onkeyup = function (event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = event.key.toLowerCase();


    // 1. check to see for only letter using the function 
    //  called  allLetter(input value that was typed by the user) 
    //  otherwise, display an alert("Invalid Entry, a letter only!!")          

    // 2. if the input is only a letter, 
    //     proceed with the game by calling the 
    //     wordGame.inputKeypressed of the wordGame object by using the
    //     dot operator and assigning it from var letter

    // 3.  call playGame()                  
 

}


