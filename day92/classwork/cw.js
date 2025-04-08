
const num = parseInt(prompt("Enter a number: "), 10);

const result = num % 2 === 0 ? "Two" : num % 3 === 0 ? "Three" : "None";

console.log(result);
