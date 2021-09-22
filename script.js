'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1; // guessing no. between 1-20

let score = 20;
let highscore = 0;

const displayMessage = function(message)
{
    document.querySelector('.message').textContent = message;
}

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number Inserted.';
        displayMessage('No Number Inserted.');
    }
    else if (guess == secretNumber) {
        // document.querySelector('.message').textContent = 'You guessed the Correct Number.';
        displayMessage('You guessed the Correct Number.');
        score++;
        document.querySelector('.score').textContent = score;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
     
        // updating highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    else if(guess!==secretNumber)
    {
        if (score > 0) {
            displayMessage(guess > secretNumber ? 'Guessed Number is too high.':'Guessed Number is too low.');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('You lost the game.');
        }
    }

});

// reset button
document.querySelector('.again').addEventListener('click', function () {

    score = 20

    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';


})



