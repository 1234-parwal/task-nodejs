// sumArray.js

function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5];
console.log(sumArray(numbersArray)); // Output: 15
