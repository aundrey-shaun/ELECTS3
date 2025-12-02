// [2] Palindrome checker
// This script is meant to run in the browser with two.html.
// It uses prompt() to ask for input and console.log() to show the result.

/**
 * Checks if a word is a palindrome.
 * A palindrome reads the same forwards and backwards.
 * @param {string} word - The word to check.
 * @returns {boolean} - true if palindrome, false otherwise.
 */
function isPalindrome(word) {
  // Convert to lowercase for case-insensitive comparison
  const cleaned = word.toLowerCase();
  // Reverse the string
  const reversed = cleaned.split("").reverse().join("");
  // Compare original with reversed
  return cleaned === reversed;
}

// Ask user for a word to check
const wordInput = prompt("Enter the word you want to check:");

// Handle empty or cancelled input
if (!wordInput) {
  console.log("You did not enter a word.");
} else {
  console.log(`Enter the word you want to check: ${wordInput}`);
  console.log("\nResult:");

  if (isPalindrome(wordInput)) {
    console.log(`The word ${wordInput} is a palindrome!`);
  } else {
    console.log("The word you've entered is not a palindrome!");
  }
}
