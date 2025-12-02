// [1] Reverse full name and calculate age

// Function that reverses any string (keeps spaces and symbols)
function reverseString(str) {
  // Remove leading/trailing spaces but keep inner spaces
  const trimmed = str.trim();
  // Split into characters, reverse the array, join back to string
  return trimmed.split("").reverse().join("");
}

// Function that calculates age based on birth year
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear(); // e.g. 2025
  return currentYear - birthYear;
}

// Ask user for their full name and birth year (BROWSER ONLY)
const fullName = prompt("Enter your full name:");
const birthYearInput = prompt("Enter your birth year (e.g. 2001):");

// Convert birth year from string to number
const birthYear = parseInt(birthYearInput, 10);

// Basic validation for empty name or invalid year
if (!fullName || Number.isNaN(birthYear)) {
  console.log("Invalid input. Please reload and try again.");
} else {
  const reversedName = reverseString(fullName);
  const age = calculateAge(birthYear);

  console.log(`Name: ${fullName}`);
  console.log(`Birth year: ${birthYear}`);
  console.log("\nResult:");
  console.log(
    `Your name is ${fullName.trim()} and its reversed version is ${reversedName}. ` +
    `Your age is ${age} years old.`
  );
}
