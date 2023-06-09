//.............Question1....................
function displayCurrentDateTime() {

  var currentDate = new Date();


  var date = currentDate.toLocaleDateString();
  var time = currentDate.toLocaleTimeString();


  var dateTimeElement = document.createElement("p");
  dateTimeElement.textContent = "Current Date: " + date + " | Current Time: " + time;


  document.body.appendChild(dateTimeElement);
}


displayCurrentDateTime();

//...................Question2.......................
function greetUser(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  console.log("Hello, " + fullName + "! Welcome!");
}


greetUser("John", "Doe");

//...................Question3............................  
function addNumbers() {
  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));


  if (isNaN(num1) || isNaN(num2)) {
    return "Invalid input. Please enter valid numbers.";
  }

  var sum = num1 + num2;
  return sum;
}


var result = addNumbers();
console.log("The sum is: " + result);
//................Question4..............
function calculateResult(num1, num2, operator) {
  var result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return "Invalid operator. Please provide a valid operator (+, -, *, /).";
  }

  document.write("The result is: " + result);
  return result;
}


var number1 = parseFloat(prompt("Enter the first number:"));
var number2 = parseFloat(prompt("Enter the second number:"));
var operator = prompt("Enter the operator (+, -, *, /):");

var result = calculateResult(number1, number2, operator);
//....................Question5........
function squareNumber(number) {
  var squared = number * number;
  return squared;
}


var number = parseFloat(prompt("Enter a number:"));
var result = squareNumber(number);
console.log("The square of " + number + " is: " + result);
//.................Question6.................
function computeFactorial(number) {

  if (number === 0 || number === 1) {
    return 1;
  }


  var factorial = 1;
  for (var i = 2; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
}


var number = parseInt(prompt("Enter a number:"));
var result = computeFactorial(number);
console.log("The factorial of " + number + " is: " + result);
//.....................Question7....................
function displayCounting(start, end) {

  if (isNaN(start) || isNaN(end)) {
    document.write("Invalid input. Please provide valid numbers.");
    return;
  }


  for (var i = start; i <= end; i++) {
    document.write(i + "<br>");
  }
}


var startNumber = parseInt(prompt("Enter the start number:"));
var endNumber = parseInt(prompt("Enter the end number:"));
displayCounting(startNumber, endNumber);
//..........................Question8...........
function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(side) {
    return side * side;
  }

  var baseSquare = calculateSquare(base);
  var perpendicularSquare = calculateSquare(perpendicular);
  var hypotenuseSquare = baseSquare + perpendicularSquare;
  var hypotenuse = Math.sqrt(hypotenuseSquare);

  return hypotenuse;
}


var baseLength = parseFloat(prompt("Enter the base length:"));
var perpendicularLength = parseFloat(prompt("Enter the perpendicular length:"));
var result = calculateHypotenuse(baseLength, perpendicularLength);
console.log("The hypotenuse of the right-angle triangle is: " + result);

//.......................Question9.................
function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(side) {
    return side * side;
  }

  var baseSquare = calculateSquare(base);
  var perpendicularSquare = calculateSquare(perpendicular);
  var hypotenuseSquare = baseSquare + perpendicularSquare;
  var hypotenuse = Math.sqrt(hypotenuseSquare);

  return hypotenuse;
}


var baseLength = parseFloat(prompt("Enter the base length:"));
var perpendicularLength = parseFloat(prompt("Enter the perpendicular length:"));
var result = calculateHypotenuse(baseLength, perpendicularLength);
console.log("The hypotenuse of the right-angle triangle is: " + result);

//..................Question10.................
function isPalindrome(str) {

  var formattedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();


  var reversedStr = formattedStr.split("").reverse().join("");


  if (formattedStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}


var input = prompt("Enter a string:");
var result = isPalindrome(input);

if (result) {
  console.log("The string '" + input + "' is a palindrome.");
} else {
  console.log("The string '" + input + "' is not a palindrome.");
}

//................Question11..................
function capitalizeFirstLetter(str) {
  var words = str.split(" ");
  var capitalizedWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord);
  }

  var result = capitalizedWords.join(" ");
  return result;
}


var input = prompt("Enter a string:");
var output = capitalizeFirstLetter(input);
console.log("Original string: " + input);
console.log("Converted string: " + output);

//.......................Question12.............
function findLongestWord(str) {
  var words = str.split(" ");
  var longestWord = "";

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}


var input = prompt("Enter a string:");
var longest = findLongestWord(input);
console.log("Longest word: " + longest);
//...............Question13............
function countLetterOccurrences(str, letter) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }

  return count;
}


var inputString = prompt("Enter a string:");
var inputLetter = prompt("Enter a letter:");
var occurrences = countLetterOccurrences(inputString, inputLetter);
console.log("Number of occurrences: " + occurrences);
//...................Question14................

function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference);
}


function calcArea(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  console.log("The area is " + area);
}


var radius = parseFloat(prompt("Enter the radius of the circle:"));
calcCircumference(radius);
calcArea(radius);
