// [3] Bee / Jolly / Jollibee
// This script is meant to run in the browser with three.html.
// It uses prompt() for input and console.log() for output.

// Ask user for a value to check
const numberInput = prompt("Enter the number you want to check:");

console.log(`Enter the number you want to check: ${numberInput}`);
console.log("\nResult:");

// Convert input to a Number
const num = Number(numberInput);

// Check if input is NOT a valid number:
// - null (Cancel)
// - empty string
// - NaN (e.g., word or symbols)
if (numberInput === null || numberInput.trim() === "" || Number.isNaN(num)) {
  // Not a number: output "Jollibee"
  console.log("Jollibee");
} else if (num % 2 === 0) {
  // Even number: output "<num> -> Jolly"
  console.log(`${num} -> Jolly`);
} else {
  // Odd number: output "<num> -> Bee"
  console.log(`${num} -> Bee`);
}
