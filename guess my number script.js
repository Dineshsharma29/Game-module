'use strict';

/*
//personal method

function guessTheNumber() {
  console.log(document.querySelector('.guess').value);
  console.log(document.getElementById('test').value);
}
*/
// Udemy instructor method
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20,
  highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess, randomNumber);
  if (!guess) {
    document.querySelector('.message').textContent = 'NO number 😔';
  } else {
    if (guess === randomNumber) {
      document.querySelector('.message').textContent = 'Hey You WIN 😉';
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').textContent = guess;
      if (highscore < score) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
    }
    // Refactoring COde
    else if (guess !== randomNumber) {
      document.querySelector('.message').textContent =
        guess > randomNumber ? 'Too High' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
      if (score == 0) {
        document.querySelector('.message').textContent = 'you lose 😥';
        score = 1;
      }
    }
    //  else if (guess > randomNumber) {
    //   document.querySelector('.message').textContent = 'Too High';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    //   if (score == 0) {
    //     document.querySelector('.message').textContent = 'you lose 😥';
    //     score = 1;
    //   }
    // } else if (guess < randomNumber) {
    //   document.querySelector('.message').textContent = 'Too Low';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    //   if (score == 0) {
    //     document.querySelector('.message').textContent = 'you lose 😥';
    //     score = 1;
    //   }
    // }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
});
