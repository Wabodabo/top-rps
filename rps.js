

function getComputerChoice(){
    let num = Math.random();
    if(num<1/3){
        return "rock";
    }else if(num>2/3){
        return "scissors";
    }else{
        return "paper";
    }
}

function getHumanChoice(){
    let input = prompt("Play the game! Choose Rock, Paper or Scissors!").toLowerCase();
    console.log(input);
    return input;
}


function playGame(){
    const rounds = 5;
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){

        if(humanChoice == "paper" && computerChoice =="rock"){
            humanScore++;
            console.log("You win! Paper beats Rock");
        }else if(humanChoice=="rock" && computerChoice=="scissors"){
            humanScore++;
            console.log("You win! Rock beats Scissors");
        }else if(humanChoice=="scissors" && computerChoice=="paper"){
            humanScore++;
            console.log("You win! Scissors beats Paper");
        }else if(humanChoice == computerChoice){
            console.log("It's a draw!");
        }else {
            computerScore++;
            console.log(`You lose! ${humanChoice} loses from ${computerChoice} mwua mwua mwa :(`)
        }

    }

    while(humanScore+computerScore<rounds){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }
    if(humanScore>=3){
        return `You won! You won ${humanScore} out of 5 matches`;
    }else{
        return `You lost :( You only won ${humanScore} games out of 5)`;
    }
}

