

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
    
    console.log(input);
    return input;
}


let buttons = document.querySelector("#buttons");
let humanScore = 0;
let computerScore = 0;

buttons.addEventListener('click', (event)=>{
    let target = event.target;
    let computerChoice = getComputerChoice();
    let result;

    switch(target.id){
        case 'rock':            
            result = playRound('rock', computerChoice);
        break;
        case 'scissors':
            result = playRound('scissors', computerChoice);
        break;
        case 'paper':
            result = playRound('paper', computerChoice);
        break;
    }

    if(result == 1){
        humanScore++;
    }else if(result == -1){
        computerScore++;
    }

    let outputDiv = document.querySelector("#results");

    if(humanScore == 5 || computerScore == 5){
        if (humanScore == 5){
            outputDiv.textContent = "You won! You were the first to reach 5 points.";
        } else{
            outputDiv.textContent = "You lost! The computer reached 5 points first.";
        }
    }else{
        outputDiv.textContent = `You: ${humanScore} points, Computer: ${computerScore} points`
    }
});



function playRound(humanChoice, computerChoice){

    if(humanChoice == "paper" && computerChoice =="rock"){
        console.log("You win! Paper beats Rock");
        return 1;        
    }else if(humanChoice=="rock" && computerChoice=="scissors"){
        
        console.log("You win! Rock beats Scissors");
        return 1;
    }else if(humanChoice=="scissors" && computerChoice=="paper"){
        
        console.log("You win! Scissors beats Paper");
        return 1;
    }else if(humanChoice == computerChoice){
        
        console.log("It's a draw!");
        return 0;
    }else {
        
        console.log(`You lose! ${humanChoice} loses from ${computerChoice} mwua mwua mwa :(`)
        return -1;
    }

}



