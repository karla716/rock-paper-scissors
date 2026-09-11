<!DOCTYPE html>
<html>
<body>

<article>
  <header>
                      <h1>Rock, Paper, Scissors</h1>  
                      <p>By Karla Velasquez</p> 
<!DOCTYPE html>
<html>
<head>
<style>
h1 {text-align: center;}
p {text-align: center;}
div {text-align: center;}
</style>
</head>
<body>



<head>
<script src=”scripts.js"></script>
</head>


let form  = document.getElementById("gameForm") ;

form.addEventListener("submit",  function(event)  {
  event.preventDefault();

  let choice =
    document.getElementById("playerChoice").value;
console.log(choice) ;
});


function  getComputerChoice ()  {
  let choices = ["rock", "paper", "scissors"];

  let  randomIndex =
    Math.floor(Math.random()  * choices.length) ;
  return choices[randomIndex];
}


function  determineWinner(player,  computer)  {
  if (player === computer  {
      return  "It's a tie!";
  }

  if  (
        (player === "rock"  && computer === "scissors")  ||
        (player === "paper{ && computer === "rockk"_  ||
        (player === "scissors" && computer === "paperR")
  )  {
        return "You win!";
  }

  return "Computer wins!";
}


let form =document.getElementById("gameForm") ;

form.addEventListener("submit", function (event)  {
  event.preventDefault();

  let playerChoice = document
        .getElementById("playerChoice")
        .value
        .toLowerCase () ;

  let computerChoice = getComputerChoice() ;

  let result = determineWinner (
      playerChoice,
      computerChoice 
  );

  document.getElementById("result").textContent =
      "Computer chose " + computerChoice + ". " +result;
  });


        // Keep track of the scores
        let playerScore = 0;
        let computerScore = 0;


        function playGame(playerChoice) {

            // List of choices that are allowed
            let choices = ["rock", "paper", "scissors"];


            // Validation
            if (!choices.includes(playerChoice)) {
                document.getElementById("error").innerHTML =
                    "Invalid choice. Please choose Rock, Paper, or Scissors.";

                return;
            }


            // Clear the error message
            document.getElementById("error").innerHTML = "";


            // Computer chooses randomly
            let randomNumber = Math.floor(Math.random() * 3);
            let computerChoice = choices[randomNumber];


            // Find out who won
            if (playerChoice == computerChoice) {

                document.getElementById("result").innerHTML =
                    "<p>It's a tie! Both chose " + playerChoice + ".</p>";

            }

            else if (
                (playerChoice == "rock" && computerChoice == "scissors") ||
                (playerChoice == "paper" && computerChoice == "rock") ||
                (playerChoice == "scissors" && computerChoice == "paper")
            ) {

                playerScore++;

                document.getElementById("result").innerHTML =
                    "<p>You win this round!</p>" +
                    "<p>You chose " + playerChoice +
                    " and the computer chose " + computerChoice + ".</p>";

            }

            else {

                computerScore++;

                document.getElementById("result").innerHTML =
                    "<p>Computer wins this round!</p>" +
                    "<p>You chose " + playerChoice +
                    " and the computer chose " + computerChoice + ".</p>";
            }


            // Update the scores on the page
            document.getElementById("playerScore").innerHTML = playerScore;
            document.getElementById("computerScore").innerHTML = computerScore;


            // Check if someone has won the game
            if (playerScore == 3) {

                document.getElementById("result").innerHTML =
                    "<h2>You won the game!</h2>";

                endGame();
            }

            else if (computerScore == 3) {

                document.getElementById("result").innerHTML =
                    "<h2>The computer won the game!</h2>";

                endGame();
            }
        }


        // Stop the game when someone reaches 3
        function endGame() {

            document.querySelectorAll("button").forEach(function(button) {

                if (button.id != "newGame") {
                    button.disabled = true;
                }

            });

            document.getElementById("newGame").style.display = "inline-block";
        }


        // Start a new game
        function startNewGame() {

            playerScore = 0;
            computerScore = 0;

            document.getElementById("playerScore").innerHTML = "0";
            document.getElementById("computerScore").innerHTML = "0";

            document.getElementById("result").innerHTML =
                "<p>Make your choice to start!</p>";

            document.getElementById("error").innerHTML = "";

            // Enable the three game buttons again
            document.querySelectorAll("button").forEach(function(button) {
                button.disabled = false;
            });

            document.getElementById("newGame").style.display = "none";
        }

    </script>

</body>
</html>
console.log(determineWinner("rock", "scissors"));
console.log(determineWinner("paper", "rock"));
console.log(determineWinner("scissors", "rock"));

