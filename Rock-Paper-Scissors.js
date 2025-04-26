    let score = JSON.parse(localStorage.getItem('score'));

    if(!score) {
        score = {
            Wins: 0,
            Loses: 0,
            Ties: 0
        };
    }

    updateScore();

    document.querySelector('.js-rock-button').addEventListener('click', () => {
        playGame('Rock');
    });
    document.querySelector('.js-paper-button').addEventListener('click', () => {
        playGame('Paper');
    });
    document.querySelector('.js-scissors-button').addEventListener('click', () => {
        playGame('Scissors');
    });

    document.body.addEventListener('keydown', (event) => {
        if(event.key === 'r') {
            playGame('Rock');
        }
    });
    document.body.addEventListener('keydown', (event) => {
        if(event.key === 'p') {
            playGame('Paper');
        }
    });
    document.body.addEventListener('keydown', (event) => {
        if(event.key === 's') {
            playGame('Scissors');
        }
    });


    function playGame(playerMove) {
       const computerMove = pickComputerMove();

    let result = '';

if(playerMove === 'Rock') {
    
    if(computerMove === 'Rock') {
        result = 'Tie';
    }
    else if(computerMove === 'Paper') {
        result = 'You Lose';
    }
    else if(computerMove === 'Scissors') {
        result = 'You Win';
    }
}

else if(playerMove === 'Paper') {
    if(computerMove === 'Paper') {
        result = 'Tie';
    }
    else if(computerMove === 'Scissors') {
        result = 'You Lose';
    }
    else if(computerMove === 'Rock') {
        result = 'You Win';
    }
}

else if(playerMove === 'Scissors') {
    if(computerMove === 'Scissors') {
        result = 'Tie';
    }
    else if(computerMove === 'Rock') {
        result = 'You Lose';
    }
    else if(computerMove === 'Paper') {
        result = 'You Win';
    }
}

if(result === 'You Win') {
    score.Wins += 1;
}
else if(result === 'You Lose') {
    score.Loses += 1;
}
else if(result === 'Tie') {
    score.Ties += 1;
}

    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('.see-result').innerHTML = `${result}.`;
    document.querySelector('.see-move').innerHTML = ` You
        <img class="move-icon" src="${playerMove}-emoji.png">
        <img class="move-icon" src="${computerMove}-emoji.png">
        Computer`;
    updateScore();
    }

    function updateScore() {
        document.querySelector('.see-score').innerHTML = `Wins: ${score.Wins}, Loses: ${score.Loses}, Ties: ${score.Ties}.`;
    }
    
    let computerMove = '';

    function pickComputerMove() {
    const randomNumber = Math.random();

        if(randomNumber > 0 && randomNumber < 1/3 ) {
            computerMove = 'Rock';
        }
        else if(randomNumber > 1/3 && randomNumber < 2/3 ) {
            computerMove = 'Paper';
        }
        else if(randomNumber > 2/3 && randomNumber < 1 ) {
            computerMove = 'Scissors';
        }
        return computerMove;
    }




