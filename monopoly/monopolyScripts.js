// start controls
var modal = document.getElementById("start");
var btn = document.getElementById("StartScreen");

// buttons that close windows
document.getElementsByClassName("close")[0].onclick = closeTheWindow;
document.getElementsByClassName("close")[0].onclick = setup;
document.getElementsByClassName("close")[1].onclick = closeTheWindow;
document.getElementsByClassName("close")[2].onclick = closeTheWindow;
document.getElementsByClassName("close")[3].onclick = closeTheWindow;
document.getElementsByClassName("close")[4].onclick = closeTheWindow;
document.getElementsByClassName("close")[5].onclick = closeTheWindow;
document.getElementsByClassName("close")[6].onclick = closeTheWindow;
document.getElementsByClassName("close")[7].onclick = closeTheWindow;
document.getElementsByClassName("close")[8].onclick = closeTheWindow;

// Function that closes windows
function closeTheWindow() {
  modal.style.display = "none";
  document.getElementById("repairs").style.display = "none";
}

// Click outside the modal to close it.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Player Money
var player1Money = 1500;
var player2Money = 1500;
var player3Money = 1500;
var player4Money = 1500;
var player5Money = 1500;
var player6Money = 1500;
var player7Money = 1500;
var player8Money = 1500;
var player9Money = 1500;
var player10Money = 1500;
document.getElementById("p1money").innerHTML = "$" + player1Money;
document.getElementById("p2money").innerHTML = "$" + player2Money;
document.getElementById("p3money").innerHTML = "$" + player3Money;
document.getElementById("p4money").innerHTML = "$" + player4Money;
document.getElementById("p5money").innerHTML = "$" + player5Money;
document.getElementById("p6money").innerHTML = "$" + player6Money;
document.getElementById("p7money").innerHTML = "$" + player7Money;
document.getElementById("p8money").innerHTML = "$" + player8Money;
document.getElementById("p9money").innerHTML = "$" + player9Money;
document.getElementById("p10money").innerHTML = "$" + player10Money;

// Confirm pop up before setup
function confirmSetup() {
  var txt;
  if (confirm("Are you sure you want to start a new game?")) {
    startOver();
  }
}

// Start Game Button
function setup() {
  var numberOfPlayers = document.getElementById("numberOfPlayers").value;
  var startingCash = document.getElementById("startingCash").value;
  numberOfPlayers = Number(numberOfPlayers);
  startingCash = Number(startingCash);
  player1Money = startingCash;
  player2Money = startingCash;
  player3Money = startingCash;
  player4Money = startingCash;
  player5Money = startingCash;
  player6Money = startingCash;
  player7Money = startingCash;
  player8Money = startingCash;
  player9Money = startingCash;
  player10Money = startingCash;
  document.getElementById("p1money").innerHTML = "$" + player1Money;
  document.getElementById("p2money").innerHTML = "$" + player2Money;
  document.getElementById("p3money").innerHTML = "$" + player3Money;
  document.getElementById("p4money").innerHTML = "$" + player4Money;
  document.getElementById("p5money").innerHTML = "$" + player5Money;
  document.getElementById("p6money").innerHTML = "$" + player6Money;
  document.getElementById("p7money").innerHTML = "$" + player7Money;
  document.getElementById("p8money").innerHTML = "$" + player8Money;
  document.getElementById("p9money").innerHTML = "$" + player9Money;
  document.getElementById("p10money").innerHTML = "$" + player10Money;
  switch (numberOfPlayers) {
    case 9:
      document.getElementById("10").style.display = "none";
      break;
    case 8:
      document.getElementById("10").style.display = "none";
      document.getElementById("9").style.display = "none";
      break;
    case 7:
      document.getElementById("10").style.display = "none";
      document.getElementById("9").style.display = "none";
      document.getElementById("8").style.display = "none";
      break;
    case 6:
      document.getElementById("10").style.display = "none";
      document.getElementById("9").style.display = "none";
      document.getElementById("8").style.display = "none";
      document.getElementById("7").style.display = "none";
      break;
    case 5:
      document.getElementById("10").style.display = "none";
      document.getElementById("9").style.display = "none";
      document.getElementById("8").style.display = "none";
      document.getElementById("7").style.display = "none";
      document.getElementById("6").style.display = "none";
      break;
    case 4:
      document.getElementById("10").style.display = "none";
      document.getElementById("9").style.display = "none";
      document.getElementById("8").style.display = "none";
      document.getElementById("7").style.display = "none";
      document.getElementById("6").style.display = "none";
      document.getElementById("5").style.display = "none";
      break;
    case 3:
      document.getElementById("10").style.display = "none";
      document.getElementById("9").style.display = "none";
      document.getElementById("8").style.display = "none";
      document.getElementById("7").style.display = "none";
      document.getElementById("6").style.display = "none";
      document.getElementById("5").style.display = "none";
      document.getElementById("4").style.display = "none";
      break;
    case 2:
      document.getElementById("10").style.display = "none";
      document.getElementById("9").style.display = "none";
      document.getElementById("8").style.display = "none";
      document.getElementById("7").style.display = "none";
      document.getElementById("6").style.display = "none";
      document.getElementById("5").style.display = "none";
      document.getElementById("4").style.display = "none";
      document.getElementById("3").style.display = "none";
      break;
    case 1:
      document.getElementById("10").style.display = "none";
      document.getElementById("9").style.display = "none";
      document.getElementById("8").style.display = "none";
      document.getElementById("7").style.display = "none";
      document.getElementById("6").style.display = "none";
      document.getElementById("5").style.display = "none";
      document.getElementById("4").style.display = "none";
      document.getElementById("3").style.display = "none";
      document.getElementById("2").style.display = "none";
      break;
  }
  var modal = document.getElementById("start");
  modal.style.display = "none";
}

// When the user starts over, it displays all players
function startOver() {
      document.getElementById("10").style.display = "table-row";
      document.getElementById("9").style.display = "table-row";
      document.getElementById("8").style.display = "table-row";
      document.getElementById("7").style.display = "table-row";
      document.getElementById("6").style.display = "table-row";
      document.getElementById("5").style.display = "table-row";
      document.getElementById("4").style.display = "table-row";
      document.getElementById("3").style.display = "table-row";
      document.getElementById("2").style.display = "table-row";
    document.getElementById("p1name").innerHTML = "Player 1";
    document.getElementById("p2name").innerHTML = "Player 2";
    document.getElementById("p3name").innerHTML = "Player 3";
    document.getElementById("p4name").innerHTML = "Player 4";
    document.getElementById("p5name").innerHTML = "Player 5";
    document.getElementById("p6name").innerHTML = "Player 6";
    document.getElementById("p7name").innerHTML = "Player 7";
    document.getElementById("p8name").innerHTML = "Player 8";
    document.getElementById("p9name").innerHTML = "Player 9";
    document.getElementById("p10name").innerHTML = "Player 10";

  modal.style.display = "block";
}

// Options screen - open and close
function showOptions() {
  var optionsScreen = document.getElementById("optionsMenu");
  var scoreScreen = document.getElementById("scoreboard");
  var startButton = document.getElementById("StartScreen");
  if (optionsScreen.style.display !== "block") {
    optionsScreen.style.display = "block";
    scoreScreen.style.display = "none";
    startButton.style.display = "none";
    document.getElementById("optionsButton").innerHTML = "Close";
  } else if (optionsScreen.style.display === "block") {
    optionsScreen.style.display = "none";
    scoreScreen.style.display = "table";
    startButton.style.display = "inline-block";
    document.getElementById("optionsButton").innerHTML = "Options";
  }
}

//Change player name
function rename(id) {
  var target = document.getElementById(id);
  var x = prompt("Pick a name!", "Patrick");
  target.innerHTML = x;
}

//Add money to a player's account
function addMoney(id) {
  var target = document.getElementById(id);
  var player = target.id;
  var moneyToAdd = prompt("How much?", "200");
  moneyToAdd = moneyToAdd.trim();
  moneyToAdd = moneyToAdd.replace("$", "");
  moneyToAdd = Number(moneyToAdd);
  if (isNaN(moneyToAdd)) {
    alert("Must be a number");
  } else {
    if (player === "p1AddMoney") {
      player1Money += moneyToAdd;
      document.getElementById("p1money").innerHTML = "$" + player1Money;
    } else if (player === "p2AddMoney") {
      player2Money += moneyToAdd;
      document.getElementById("p2money").innerHTML = "$" + player2Money;
    } else if (player === "p3AddMoney") {
      player3Money += moneyToAdd;
      document.getElementById("p3money").innerHTML = "$" + player3Money;
    } else if (player === "p4AddMoney") {
      player4Money += moneyToAdd;
      document.getElementById("p4money").innerHTML = "$" + player4Money;
    } else if (player === "p5AddMoney") {
      player5Money += moneyToAdd;
      document.getElementById("p5money").innerHTML = "$" + player5Money;
    } else if (player === "p6AddMoney") {
      player6Money += moneyToAdd;
      document.getElementById("p6money").innerHTML = "$" + player6Money;
    } else if (player === "p7AddMoney") {
      player7Money += moneyToAdd;
      document.getElementById("p7money").innerHTML = "$" + player7Money;
    } else if (player === "p8AddMoney") {
      player8Money += moneyToAdd;
      document.getElementById("p8money").innerHTML = "$" + player8Money;
    } else if (player === "p9AddMoney") {
      player9Money += moneyToAdd;
      document.getElementById("p9money").innerHTML = "$" + player9Money;
    } else if (player === "p10AddMoney") {
      player10Money += moneyToAdd;
      document.getElementById("p10money").innerHTML = "$" + player10Money;
    } else {
      alert("Error! Couldn't add money to account!");
    }
  }
}

//Take money from a player's account
function takeMoney(id) {
  var target = document.getElementById(id);
  var player = target.id;
  var moneyToTake = prompt("How much?", "200");
  moneyToTake = moneyToTake.trim();
  moneyToTake = moneyToTake.replace("$", "");
  moneyToTake = parseInt(moneyToTake);
  if (isNaN(moneyToTake)) {
    alert("Must be a number");
  } else {
    if (player === "p1TakeMoney") {
      player1Money -= moneyToTake;
      document.getElementById("p1money").innerHTML = "$" + player1Money;
    } else if (player === "p2TakeMoney") {
      player2Money -= moneyToTake;
      document.getElementById("p2money").innerHTML = "$" + player2Money;
    } else if (player === "p3TakeMoney") {
      player3Money -= moneyToTake;
      document.getElementById("p3money").innerHTML = "$" + player3Money;
    } else if (player === "p4TakeMoney") {
      player4Money -= moneyToTake;
      document.getElementById("p4money").innerHTML = "$" + player4Money;
    } else if (player === "p5TakeMoney") {
      player5Money -= moneyToTake;
      document.getElementById("p5money").innerHTML = "$" + player5Money;
    } else if (player === "p6TakeMoney") {
      player6Money -= moneyToTake;
      document.getElementById("p6money").innerHTML = "$" + player6Money;
    } else if (player === "p7TakeMoney") {
      player7Money -= moneyToTake;
      document.getElementById("p7money").innerHTML = "$" + player7Money;
    } else if (player === "p8TakeMoney") {
      player8Money -= moneyToTake;
      document.getElementById("p8money").innerHTML = "$" + player8Money;
    } else if (player === "p9TakeMoney") {
      player9Money -= moneyToTake;
      document.getElementById("p9money").innerHTML = "$" + player9Money;
    } else if (player === "p10TakeMoney") {
      player10Money -= moneyToTake;
      document.getElementById("p10money").innerHTML = "$" + player10Money;
    } else {
      alert("Error! Couldn't take money from account!");
    }
  }
}

//Global variables for the repair function
var communityChestHouses = 0;
var communityChestHotels = 0;
var chanceHouses = 0;
var chanceHotels = 0;
var repairBillTotal = 0;
var housesRepairCost = 0;
var hotelsRepairCost = 0;
var playerPayingRepairs;

//Community Chest/Chance card for repairs
function repairs(id) {
  // Resets number of houses and hotels for both Community Chest and Chance
  communityChestHouses = 0;
  communityChestHotels = 0;
  chanceHouses = 0;
  chanceHotels = 0;
  housesRepairCost = 0;
  hotelsRepairCost = 0;
  repairBillTotal = 0;
  document.getElementById("communityChestHouses").value = 0;
  document.getElementById("communityChestHotels").value = 0;
  document.getElementById("chanceHouses").value = 0;
  document.getElementById("chanceHotels").value = 0;
  //
  // Targets a specific player
  var target = document.getElementById(id);
  playerPayingRepairs = target.id;
  playerPayingRepairs = playerPayingRepairs.replace(/\D/g, "");
  // buttons and windows
  var repairs = document.getElementById("repairs");
  repairs.style.display = "block";
  document.getElementById("repairsOne").style.display = "block";
  document.getElementById("repairsCommunityChest1").style.display = "none";
  document.getElementById("repairsChance1").style.display = "none";
  document.getElementById("repairsFinalBill").style.display = "none";
  var span = document.getElementsByClassName("close")[1];
  span.onclick = function() {
    repairs.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == repairs) {
      repairs.style.display = "none";
    }
  }
}

// Chance or Community Chest
function chanceOrChest(a) {
  if (a === 'communityChest') {
    document.getElementById("repairsOne").style.display = "none";
    document.getElementById("repairsChance1").style.display = "none";
    document.getElementById("repairsCommunityChest1").style.display = "block";
  } else if (a === "chance") {
    document.getElementById("repairsOne").style.display = "none";
    document.getElementById("repairsCommunityChest1").style.display = "none";
    document.getElementById("repairsChance1").style.display = "block";
  }
}

// Calculates the repair bill
function calculateRepairBill(a) {
  if (a === 'communityChest') {
    communityChestHouses = document.getElementById("communityChestHouses").value;
    communityChestHotels = document.getElementById("communityChestHotels").value;
    communityChestHouses = Number(communityChestHouses);
    communityChestHotels = Number(communityChestHotels);
    housesRepairCost = communityChestHouses * 40;
    hotelsRepairCost = communityChestHotels * 115;
    repairBillTotal = housesRepairCost + hotelsRepairCost;
    document.getElementById("repairsTotal").innerHTML = "$" + repairBillTotal;
    document.getElementById("repairsCommunityChest1").style.display = "none";
    document.getElementById("repairsChance1").style.display = "none";
    document.getElementById("repairsFinalBill").style.display = "block";
  } else if (a === "chance") {
    chanceHouses = document.getElementById("chanceHouses").value;
    chanceHotels = document.getElementById("chanceHotels").value;
    chanceHouses = Number(chanceHouses);
    chanceHotels = Number(chanceHotels);
    housesRepairCost = chanceHouses * 25;
    hotelsRepairCost = chanceHotels * 100;
    repairBillTotal = housesRepairCost + hotelsRepairCost;
    document.getElementById("repairsTotal").innerHTML = "$" + repairBillTotal;
    document.getElementById("repairsCommunityChest1").style.display = "none";
    document.getElementById("repairsChance1").style.display = "none";
    document.getElementById("repairsFinalBill").style.display = "block";
  }

}

// Bills the correct player and then closes the window.
function repairAndClose() {
  if (playerPayingRepairs === "1") {
    player1Money -= repairBillTotal;
    document.getElementById("p1money").innerHTML = "$" + player1Money;
  } else if (playerPayingRepairs === "2") {
    player2Money -= repairBillTotal;
    document.getElementById("p2money").innerHTML = "$" + player2Money;
  } else if (playerPayingRepairs === "3") {
    player3Money -= repairBillTotal;
    document.getElementById("p3money").innerHTML = "$" + player3Money;
  } else if (playerPayingRepairs === "4") {
    player4Money -= repairBillTotal;
    document.getElementById("p4money").innerHTML = "$" + player4Money;
  } else if (playerPayingRepairs === "5") {
    player5Money -= repairBillTotal;
    document.getElementById("p5money").innerHTML = "$" + player5Money;
  } else if (playerPayingRepairs === "6") {
    player6Money -= repairBillTotal;
    document.getElementById("p6money").innerHTML = "$" + player6Money;
  } else if (playerPayingRepairs === "7") {
    player7Money -= repairBillTotal;
    document.getElementById("p7money").innerHTML = "$" + player7Money;
  } else if (playerPayingRepairs === "8") {
    player8Money -= repairBillTotal;
    document.getElementById("p8money").innerHTML = "$" + player8Money;
  } else if (playerPayingRepairs === "9") {
    player9Money -= repairBillTotal;
    document.getElementById("p9money").innerHTML = "$" + player9Money;
  } else if (playerPayingRepairs === "10") {
    player10Money -= repairBillTotal;
    document.getElementById("p10money").innerHTML = "$" + player10Money;
  } else {
    alert("Error! Couldn't take money from account!");
  }
  document.getElementById("repairsFinalBill").style.display = "none";
  document.getElementById("repairs").style.display = "none";
}

// Toggle Tokens color picker
function selectButton(id, colorChoice) {
    document.getElementById("topLogo").style.color = "black";
    document.getElementsByClassName("flankingHeaderSVG")[0].src="monopolyImages/cash.svg";
    document.getElementsByClassName("flankingHeaderSVG")[1].src="monopolyImages/cash.svg";
    document.getElementById("greenTheme").className = "unToggled";
    document.getElementById("darkBlueTheme").className = "unToggled";
    document.getElementById("redTheme").className = "unToggled";
    document.getElementById("yellowTheme").className = "unToggled";
    document.getElementById("pinkTheme").className = "unToggled";
    document.getElementById("lightBlueTheme").className = "unToggled";
    document.getElementById("blackTheme").className = "unToggled";
    document.getElementById("whiteTheme").className = "unToggled";
    document.getElementById("blackTheme").className = "unToggled";
    var target = document.getElementById(id);
    target.className = "toggled";
    var bodyElement = document.getElementById("body");
    var mainElement = document.getElementById("main");
    if (colorChoice == "green") {
    bodyElement.style.backgroundColor = "#4caf50";
    mainElement.style.backgroundColor = "#80e27e";
  } else if (colorChoice == "blue") {
        bodyElement.style.backgroundColor = "#004c8c";
        mainElement.style.backgroundColor = "#0277bd";
      } else if (colorChoice == "red") {
        bodyElement.style.backgroundColor = "#ab000d";
        mainElement.style.backgroundColor = "#e53935";
      } else if (colorChoice == "yellow") {
        bodyElement.style.backgroundColor = "#ffeb3b";
        mainElement.style.backgroundColor = "#ffff72";
      } else if (colorChoice == "pink") {
        bodyElement.style.backgroundColor = "#ba68c8";
        mainElement.style.backgroundColor = "#df55f2";
      } else if (colorChoice == "lightblue") {
        bodyElement.style.backgroundColor = "#81d4fa";
        mainElement.style.backgroundColor = "#b3e5fc";
      } else if (colorChoice == "black") {
        bodyElement.style.backgroundColor = "#212121";
        mainElement.style.backgroundColor = "#424242";
        document.getElementsByClassName("flankingHeaderSVG")[0].src="monopolyImages/cashwhite.svg";
        document.getElementsByClassName("flankingHeaderSVG")[1].src="monopolyImages/cashwhite.svg";
        document.getElementById("topLogo").style.color = "white";
      } else if (colorChoice == "white") {
        bodyElement.style.backgroundColor = "#FAFAFA";
        mainElement.style.backgroundColor = "#EEEEEE";
      }
}