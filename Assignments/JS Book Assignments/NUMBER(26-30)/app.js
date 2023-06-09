//...............Question1.........
var number = parseInt(prompt("Enter a positive integer:"));


var roundOff = Math.round(number);


var floorValue = Math.floor(number);


var ceilValue = Math.ceil(number);


document.write("<h3>Number: " + number + "</h3>");
document.write("<h3>Round-off value: " + roundOff + "</h3>");
document.write("<h3>Floor value: " + floorValue + "</h3>");
document.write("<h3>Ceil value: " + ceilValue + "</h3>");
//.............Question2..............
var number = parseFloat(prompt("Enter a negative floating-point number:"));


var roundOff = Math.round(number);


var floorValue = Math.floor(number);


var ceilValue = Math.ceil(number);


document.write("<h3>Number: " + number + "</h3>");
document.write("<h3>Round-off value: " + roundOff + "</h3>");
document.write("<h3>Floor value: " + floorValue + "</h3>");
document.write("<h3>Ceil value: " + ceilValue + "</h3>");
//................Question3................
var number = parseFloat(prompt("Enter a number:"));


var absoluteValue = Math.abs(number);


document.write("<h3>Absolute value of " + number + " is " + absoluteValue + "</h3>");

//..............Question4..................

var diceValue = Math.floor(Math.random() * 6) + 1;


document.write("<h3>Value of the dice: " + diceValue + "</h3>");
//................Question5................

var coinValue = Math.random() < 0.5 ? "Heads" : "Tails";


document.write("<h3>Value of the coin: " + coinValue + "</h3>");
//.............Question6....................

var randomNumber = Math.floor(Math.random() * 100) + 1;


document.write("<h3>Random number between 1 and 100: " + randomNumber + "</h3>");

//...................Question7..........

var weightInput = prompt("Enter your weight:");


var weight = parseFloat(weightInput);


document.write("<h3>Your weight is: " + weight + " kgs</h3>");

//................Question8.................

var secretNumber = Math.floor(Math.random() * 10) + 1;


var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));


if (userInput === secretNumber) {
  document.write("<h3>Congratulations! You guessed the secret number!</h3>");
} else {
  document.write("<h3>Oops! Better luck next time!</h3>");
}