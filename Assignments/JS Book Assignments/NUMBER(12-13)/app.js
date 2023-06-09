// ............... Question1.............//

function isNumber(char) {
  return !isNaN(char);
}

function isUppercaseLetter(char) {
  var code = char.charCodeAt(0);
  return code >= 65 && code <= 90;
}

function isLowercaseLetter(char) {
  var code = char.charCodeAt(0);
  return code >= 97 && code <= 122;
}


var input = prompt("Enter a character:");

if (isNumber(input)) {
  console.log("The input is a number.");
} else if (isUppercaseLetter(input)) {
  console.log("The input is an uppercase letter.");
} else if (isLowercaseLetter(input)) {
  console.log("The input is a lowercase letter.");
} else {
  console.log("The input is neither a number nor a letter.");
}
// ............... Question2.............//

var num1 = parseInt(prompt("Enter the first integer:"));


var num2 = parseInt(prompt("Enter the second integer:"));

if (num1 === num2) {
  console.log("The two integers are equal.");
} else {

  var largerNumber = (num1 > num2) ? num1 : num2;
  console.log("The larger number is:", largerNumber);
}
// ............... Question3.............//

var number = parseFloat(prompt("Enter a number:"));


if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}
// ............... Question4.............//

var character = prompt("Enter a character (string of length 1):");


character = character.toLowerCase();

var isVowel = false;
if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
  isVowel = true;
}

if (isVowel) {
  console.log("The character is a vowel.");
} else {
  console.log("The character is not a vowel.");
}
// ............... Question5.............//

var correctPassword = "myPassword";

var userPassword = prompt("Enter your password:");

if (userPassword === "") {
  console.log("Please enter your password.");
} else {

  if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
  } else {
    console.log("Incorrect password.");
  }
}
// ............... Question6.............//
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
