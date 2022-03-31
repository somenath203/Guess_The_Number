'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess || guess < 1 || guess > 20) {
    Toastify({
      text: 'Please enter a number between 1 and 20',
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: 'top',
      position: 'center',
      stopOnFocus: true,
      style: {
        fontFamily: 'Poppins',
        fontSize: '19px',
        background: '#E21717',
      },
      onClick: function () {},
    }).showToast();

    // when guess is right
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(
        guess > secretNumber
          ? 'Your guessed number is higher than the original number'
          : 'Your guessed number is lower than the original number'
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game since your score is now zero😢');

      document.querySelector('body').style.backgroundColor = '#B4161B';
    }
  }
});

// reset button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
