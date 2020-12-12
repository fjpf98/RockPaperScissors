let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice()
{
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === 'r' )return 'Rock';
    if (letter === 'p' )return 'Paper';
    else return 'Scissors';
}

function win(userChoice, computerChoice)
{
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "computer".fontsize(3).sub();
    const userChoice_border = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`;
    userChoice_border.classList.add("green-glow");
    setTimeout(() => userChoice_border.classList.remove('green-glow'), 450);
}


function lose(userChoice, computerChoice)
{       
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "computer".fontsize(3).sub();
    const userChoice_border = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord}. You Lose!`;
    userChoice_border.classList.add("red-glow");
    setTimeout(() =>userChoice_border.classList.remove('red-glow'), 450);


}

function draw(userChoice, computerChoice)
{
    const userChoice_border = document.getElementById(userChoice);
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "computer".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} equals to ${convertToWord(computerChoice)} ${smallCompWord}. It's a Draw!`;
    userChoice_border.classList.add("gray-glow");
    setTimeout(() => userChoice_border.classList.remove('gray-glow'), 450);

}

function game(userChoice)
{
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice){
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    
    }
}

function main()
{
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));
}

main();