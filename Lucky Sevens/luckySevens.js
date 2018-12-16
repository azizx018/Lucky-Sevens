function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["luckySevens"].elements.length;
        loopCounter++) {
        if (document.forms["luckySevens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["luckySevens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function resetForm() {
  clearErrors();
    document.forms["luckySevens"]["betInput"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("playButton").innerText = "Play";
    document.getElementById("rollCount").innerHTML = "";
    document.getElementById("highestAmountWon").innerHTML = "";
    document.getElementById("rollAtMax").innerHTML = "";
    document.forms["luckySevens"]["betInput"].focus();
}

var rolls = []

function rollDice(){
  var dice1 = Math.floor(Math.random()*6)+1;
  var dice2 = Math.floor(Math.random()*6)+1;
  var dicetotal = dice1 + dice2;
  if (dicetotal == 7){
    gameMoney = (gameMoney + 4);
     console.log("This is your amount of money  " + gameMoney);
      return gameMoney;
  } else{
    gameMoney = (gameMoney - 1)
     console.log("This is your amount of money  " + gameMoney);
    return gameMoney;
  }
  }

function validateForm() {
  clearErrors();
  var numberOfRolls=rolls.length;
  var maxMoney = Math.max(...rolls);
  var indexOfMaxValue = rolls.indexOf(Math.max(...rolls));

  var bet = document.forms["luckySevens"]["betInput"].value;
  gameMoney= bet;
  if(bet<=0){
    console.log("Not enough money");
    alert("Not enough money");
  return false;
 }
  while (gameMoney >0){
    rolls.push(rollDice());
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("playButton").innerText = "Play";
  document.getElementById("betResult").innerText = document.forms["luckySevens"]["betInput"].value;
  document.getElementById("rollCount").innerHTML = (rolls.length);
  document.getElementById("highestAmountWon").innerHTML = (Math.max(...rolls));
  document.getElementById("rollAtMax").innerHTML = (rolls.indexOf(Math.max(...rolls)));

  return false;
}















//Testing//
