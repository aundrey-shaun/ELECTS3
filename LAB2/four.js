// [4] Multiplication table and factorials
// This script is meant to run in the browser with four.html.
// It uses prompt() to get 'n' and prints results in the console.

/**
 * Calculates the factorial of n (n >= 0).
 * Example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;

  // Multiply result by every integer from 1 to n
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

/**
 * Generates and prints a multiplication table from 1 to n.
 * Uses nested loops and logs each row as a formatted string.
 * @param {number} n
 */
function generateMultiplicationTable(n) {
  console.log("Multiplication Table:");

  // Outer loop controls the rows
  for (let row = 1; row <= n; row++) {
    let line = "";

    // Inner loop controls the columns
    for (let col = 1; col <= n; col++) {
      const product = row * col;
      // padEnd helps align columns in the console output
      line += product.toString().padEnd(4, " ");
    }

    console.log(line.trimEnd());
  }
}

// Ask user for n (size of table and factorial range)
const nInput = prompt("Enter the number you want to generate:");
const n = parseInt(nInput, 10);

if (Number.isNaN(n) || n <= 0) {
  console.log("Please enter a positive whole number.");
} else {
  console.log(`Enter the number you want to generate: ${n}`);
  console.log("\nResult:\n");

  // 1) Print multiplication table
  generateMultiplicationTable(n);

  // 2) Print factorials from 1 to n
  console.log("\nFactorials:");
  for (let i = 1; i <= n; i++) {
    console.log(`${i}! = ${factorial(i)}`);
  }
}

