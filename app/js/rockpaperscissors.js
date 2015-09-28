////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict'; // this line seems to turn it into "write use strict instead of playing RPS.//

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return playerMove = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return computerMove = move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var game = playerMove + computerMove
    switch (game) {
        case 'rockpaper':
            winner = 'computer';
            break;
        case 'rockrock':
            winner = 'tie';
            break;
        case 'rockscissors':
            winner = 'player';
            break;
        case 'paperpaper':
            winner = 'tie';
            break;
        case 'paperrock':
            winner = 'player';
            break;
        case 'paperscissors':
            winner = 'computer';
            break;
        case 'scissorsspaper':
            winner = 'player';
            break;
        case 'scissorsrock':
            winner = 'computer';
            break;
        case 'scissorsscissors':
            winner = 'tie';
            break;
        default:
            console.log('game');
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove = '';
    var computerMove = '';
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        switch (winner) {
            case 'computer':
                console.log('you lose');
                computerWins++;
                break;
            case 'player':
                console.log('you win');
                playerWins++;
                break;
            case 'tie':
                console.log('its a Tie!');
                break;
            default:
                console.log('something is wrong2');
        }
        var result = 'current score, computer:' + computerWins + ' player:' + playerWins;
        console.log(result);
    }
    return [playerWins, computerWins];
}
