// Generating a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Number of attempts allowed
let attempts = 10;

// Function to check user's guess
function checkGuess() {
  // Getting input element and feedback element from HTML
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  
  // Looping through attempts
  while(attempts > 0) {
    attempts--;

    // Getting user's guess
    let guess = inputElement.value;

    // Checking if guess is correct
    if (guess == randomNumber) {
      // Providing feedback for correct guess
      feedbackElement.innerHTML = "You guessed correctly!";
      feedbackElement.style.color = "green";
      attempts = 0;
      break;
    }
    // Providing feedback for guesses that are too low
    else if (guess < randomNumber) {
      feedbackElement.innerHTML = "Too low! Try again. You have " + attempts + " attempts left";
      feedbackElement.style.color = "red";
      break;
    }
    // Providing feedback for guesses that are too high
    else {
      feedbackElement.innerHTML = "Too high! Try again. You have " + attempts + " attempts left";
      feedbackElement.style.color = "red";
      break;
    }
  }
  
  // Handling the case when attempts are exhausted
  if (attempts == 0 && (guess !== randomNumber)) {
    // Providing feedback for game over
    feedbackElement.innerHTML = "The correct number was " + randomNumber + ". Game over";
    feedbackElement.style.color = "red";
  } 
}
