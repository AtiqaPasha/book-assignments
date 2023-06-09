// ............... Question1.............//
 const city = prompt("Enter the name of the city: ");

 if (city.toLowerCase() === "karachi") {
   console.log("Welcome to the city of lights");
 } else {
   console.log("Welcome to " + city);
 }

 // ............... Question2.............//
 const gender = prompt("Enter your gender (male/female): ");

 if (gender.toLowerCase() === "male") {
   console.log("Good Morning Sir.");
 } else if (gender.toLowerCase() === "female") {
   console.log("Good Morning Ma'am.");
 } else {
   console.log("Invalid input. Please enter either 'male' or 'female'.");
 }

 // ............... Question3.............//
 const color = prompt("Enter the color of the traffic signal (Red, Yellow, Green): ");

 if (color.toLowerCase() === "red") {
   console.log("Must stop");
 } else if (color.toLowerCase() === "yellow") {
   console.log("Ready to move");
 } else if (color.toLowerCase() === "green") {
   console.log("Move now");
 } else {
   console.log("Invalid input. Please enter Red, Yellow, or Green.");
 }

 // ............... Question4.............// 
 const fuel = prompt("Enter the remaining fuel in your car (in litres): ");

 if (parseFloat(fuel) < 0.25) {
   console.log("Please refill the fuel in your car");
 } else {
   console.log("You have enough fuel in your car");
 }

 // ............... Question5.............//
//  a. Alert message displayed
//  b. Alert message not displayed
//  c. Alert message displayed
//  d. Alert message displayed
//  e. Alert message displayed
//  f. Alert message displayed 

// ............... Question7.............//

var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
console.log("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
console.log("Close enough to the correct answer");
} else {
console.log("Sorry, wrong guess. The secret number was " + secretNumber);
}
// ............... Question8.............//

var number = parseInt(prompt("Enter a number:"));


if (number % 3 === 0) {
console.log(number + " is divisible by 3");
} else {
console.log(number + " is not divisible by 3");
}

// ............... Question9.............//

var number = parseInt(prompt("Enter a number:"));


if (number % 2 === 0) {
console.log(number + " is an even number");
} else {
console.log(number + " is an odd number");
}
// ............... Question10.............//
const temperature = parseFloat(prompt("Enter the temperature:"));

if (temperature > 40) {
console.log("It is too hot outside.");
} else if (temperature > 30) {
console.log("The weather today is Normal.");
} else if (temperature > 20) {
console.log("Today's weather is cool.");
} else if (temperature > 10) {
console.log("OMG! Today's weather is so Cool.");
} else {
console.log("Invalid temperature.");
}

// ............... Question11.............//
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter the operation (+, -, *, /, %):");

let result;

if (operation === "+") {
result = num1 + num2;
} else if (operation === "-") {
result = num1 - num2;
} else if (operation === "*") {
result = num1 * num2;
} else if (operation === "/") {
result = num1 / num2;
} else if (operation === "%") {
result = num1 % num2;
} else {
console.log("Invalid operation.");
}

if (result !== undefined) {
console.log("Result: " + result);
}