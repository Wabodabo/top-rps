function getComputerChoice(){
    let num = Math.random();
    if(num<1/3){
        return "Rock";
    }else if(num>2/3){
        return "Scissors";
    }else{
        return "Paper";
    }
}

function getHumanChoice(){
    let input = prompt("Play the game! Choose Rock, Paper or Scissors!");
    console.log(input);
    return input;
}