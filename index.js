// Generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessField = document.getElementById('guessField');
const submitGuess = document.getElementById('submitGuess');
const message = document.getElementById('message');

let attempts = 0;

submitGuess.addEventListener('click', function() {
  const userGuess = parseInt(guessField.value);
  
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }
  
  attempts++;
  
  if (userGuess === randomNumber) {
    message.textContent = ` Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
    submitGuess.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = 'Too low! Try again.';
  } else {
    message.textContent = 'Too high! Try again.';
  }
  
  guessField.value = '';
});