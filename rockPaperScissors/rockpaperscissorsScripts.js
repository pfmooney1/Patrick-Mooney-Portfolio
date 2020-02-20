//
// Starting Variables
var yourWins = 0;
var opponentWins = 0;
var ties = 0;
var yourChoice;
var opponentChoice;
var rock = document.getElementById("rockChoice");
var paper = document.getElementById("paperChoice");
var scissors = document.getElementById("scissorsChoice");
var opponentImage = document.getElementById("opponentImage");
var rockOpponent = document.getElementById("rockOpponent");
var paperOpponent = document.getElementById("paperOpponent");
var scissorsOpponent = document.getElementById("scissorsOpponent");
var opponentWinsCounter = document.getElementById("opponentWinsCounter");
var yourWinsCounter = document.getElementById("yourWinsCounter");
var tiesCounter = document.getElementById("tiesCounter");
rockOpponent.style.display = "none";
paperOpponent.style.display = "none";
scissorsOpponent.style.display = "none";
opponentImage.style.display = "table-cell";
// 
// Your Choice
var gameIsReset = true;
function choice(a) {
    if (gameIsReset === false) {
        reset();
        gameIsReset = true;
        computerCounterH2.style.border = "none";
        tiesCounterH2.style.border = "none";
        yourCounterH2.style.border = "3px solid rgba(0, 0, 0, 0)";
    }
    else {
        gameIsReset = false;
        opponentChooses();
        yourChoice = a;
        if (yourChoice === "rock") {
            paper.style.display = "none";
            scissors.style.display = "none";
        }
        else if (yourChoice === "paper") {
            rock.style.display = "none";
            scissors.style.display = "none";
        }
        else if (yourChoice === "scissors") {
            paper.style.display = "none";
            rock.style.display = "none";
        }
        else {
            alert("Error!");
        }
        if (yourChoice === opponentChoice) {
            ties++;
            tiesCounterH2.style.border = "2px solid black";
        }
        else if (yourChoice === "rock" && opponentChoice === "paper") {
                opponentWins++;
                computerCounterH2.style.border = "3px solid black";
        }
        else if (yourChoice === "rock" && opponentChoice === "scissors") {
                yourWins++;
                yourCounterH2.style.border = "3px solid black";
        }
        else if (yourChoice === "paper" && opponentChoice === "rock") {
                yourWins++;
                yourCounterH2.style.border = "3px solid black";
        }
        else if (yourChoice === "paper" && opponentChoice === "scissors") {
                opponentWins++;
                computerCounterH2.style.border = "3px solid black";
        }
        else if (yourChoice === "scissors" && opponentChoice === "rock") {
                opponentWins++;
                computerCounterH2.style.border = "3px solid black";
        }
        else if (yourChoice === "scissors" && opponentChoice === "paper") {
                yourWins++;
                yourCounterH2.style.border = "3px solid black";
        }
        else {
          alert("ERROR! Cannot determine winner!");
        }
    opponentWinsCounter.innerHTML = opponentWins;
    yourWinsCounter.innerHTML = yourWins;
    tiesCounter.innerHTML = ties;
    document.getElementById("pickOne").innerHTML = "Click again to reset.";
    }
}
//
// Opponent Choice
function opponentChooses() {
	opponentImage.style.display = "none";
    var number = Math.random();
    number = (number * 3) + 1;
    number = Math.floor(number);
    switch (number) {
         case 1: 
              opponentChoice = "rock";
              rockOpponent.style.display = "table-cell";
              paperOpponent.style.display = "none";
              scissorsOpponent.style.display = "none";
              break;
        case 2: 
              opponentChoice = "paper";
              rockOpponent.style.display = "none";
              paperOpponent.style.display = "table-cell";
              scissorsOpponent.style.display = "none";
              break;
        case 3:
              opponentChoice = "scissors";
              rockOpponent.style.display = "none";
              paperOpponent.style.display = "none";
              scissorsOpponent.style.display = "table-cell";
              break;
      }
}
//
// Reset the round
function reset() {
    rock.style.display = "table-cell";
    paper.style.display = "table-cell";
    scissors.style.display = "table-cell";
    rockOpponent.style.display = "none";
    paperOpponent.style.display = "none";
    scissorsOpponent.style.display = "none";
    opponentImage.style.display = "table-cell";
    document.getElementById("pickOne").innerHTML = "Pick one...";
}
//
// Reset the scoreboard
function resetScoreboard() {
	opponentWins = 0;
	yourWins = 0;
    ties = 0;
    opponentWinsCounter.innerHTML = opponentWins;
	yourWinsCounter.innerHTML = yourWins;
    tiesCounter.innerHTML = ties;
}