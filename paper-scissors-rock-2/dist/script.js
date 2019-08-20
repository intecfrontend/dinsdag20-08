var options = ["paper", "scissors", "rock"]
// 1. Generate a random number between 0 and 2 (inclusive)
var num = Math.floor(Math.random() * 3);
// 2. Use the random number as the index to select a value from options
var comp = options[num];
// 3. Create an infinite loop that allows the player to continue play
while(true){
  // 4. Inside the loop, prompt the user to type one option
  var player = prompt("What is your choice? Paper / scissors / rock");
  // Normalisation - make sure answers are converted to lower/upper case
  player = player.toLowerCase();
  // 5. Use conditionals to tell the user if they have won, lost or drawn
  if (player == comp) {
    alert("You played " + player + " and the computer played " + comp + ". You draw!");
    break; 
    //Accounting all answers that are not expected
  } else if (options.indexOf(player) < 0) {
    alert("Please choose paper / scissors or rock.")
    // Accounting for an individual case (index 0 and index 2)
  } else if (player == "paper" && comp == "rock"){
    alert("You played " + player + " and the computer played " + comp + ". You win!");
    break;
  } else if (player == "rock" && comp == "paper"){
    alert("You played " + player + " and the computer played " + comp + ". You lose!");
    break;
    // Use some clever logic by utilising the index values
  } else if (options.indexOf(player) > options.indexOf(comp)){
    alert("You played " + player + " and the computer played " + comp + ". You win!");
    break;
  } else if (options.indexOf(player) < options.indexOf(comp)){
    alert("You played " + player + " and the computer played " + comp + ". You lose!");
    break;
  }
}