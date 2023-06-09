//......Question1..................

var firstName = prompt("Enter your first name:");


var lastName = prompt("Enter your last name:");


var fullName = firstName + " " + lastName;


document.write("<h3>Welcome, " + fullName + "!</h3>");

//...........Question2............

var userInput = prompt("Enter your favorite mobile phone model:");


var inputLength = userInput.length;


document.write("<h3>The length of your input is: " + inputLength + "</h3>");

//............................Question3...........

var word = "Pakistani";


var index = word.indexOf("n");


document.write("<h3>The index of the letter 'n' in the word 'Pakistani' is: " + index + "</h3>");

//................Question4............

var word = "Hello World";


var lastIndex = word.lastIndexOf("l");


document.write("<h3>The last index of the letter 'l' in the word 'Hello World' is: " + lastIndex + "</h3>");
//.......................Question5..............

var word = "Pakistani";


var character = word.charAt(3);


document.write("<h3>The character at the 3rd index in the word 'Pakistani' is: " + character + "</h3>");

//..................Question6..............

var firstName = prompt("Enter your first name:");


var lastName = prompt("Enter your last name:");


var fullName = firstName.concat(" ", lastName);


document.write("<h3>Welcome, " + fullName + "!</h3>");

//.................Question7..............

var word = "Hyderabad";


var newWord = word.replace("Hyder", "Islam");


document.write("<h3>The modified word is: " + newWord + "</h3>");

//..................Question8.............
var message = "Ali and Sami are best friends. They play cricket and football together.";


var newMessage = message.replace(/and/g, "&");


document.write("<h3>The modified message is: " + newMessage + "</h3>");

//.................Question9..............
var str = "472";


var num = Number(str);

document.write("<h3>Value: " + num + "</h3>");
document.write("<h3>Type: " + typeof num + "</h3>");

//.................Question10...............

var userInput = prompt("Enter a string:");


var capitalLetters = userInput.toUpperCase();


document.write("<h3>The converted input is: " + capitalLetters + "</h3>");

//............Question11..........

var userInput = prompt("Enter a string:");


var titleCase = convertToTitleCase(userInput);


document.write("<h3>The converted input is: " + titleCase + "</h3>");


function convertToTitleCase(str) {

  var words = str.split(" ");


  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }


  var convertedStr = words.join(" ");

  return convertedStr;
}
//............Question12.........
var num = 35.36;


var str = num.toString();


var result = str.replace(".", "");


document.write("<h3>The result is: " + result + "</h3>");

//.........Question13.............

var username = prompt("Enter your username:");


if (
  username.includes("@") ||
  username.includes(".") ||
  username.includes(",") ||
  username.includes("!")
) {

  alert("Please enter a valid username without special symbols [@ . , !]");
} else {

  document.write("<h3>Username: " + username + "</h3>");
}
//...............Question14............
var A = ["cake", "apple pie", "cookie", "chips", "patties"];


var userInput = prompt("Enter an item to search:");


var searchItem = userInput.toLowerCase();


var found = false;
for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === searchItem) {
    found = true;
    break;
  }
}


if (found) {
  alert("Yes, the item is found in the list.");
} else {
  alert("No, the item is not found in the list.");
}

//...........Question15....................

var password = prompt("Enter a password:");


var hasAlphabetsAndNumbers = /[a-zA-Z].*[0-9]|[0-9].*[a-zA-Z]/.test(password);
var doesNotStartWithNumber = /^[^0-9]/.test(password);
var isAtLeast6CharactersLong = password.length >= 6;


if (
  hasAlphabetsAndNumbers &&
  doesNotStartWithNumber &&
  isAtLeast6CharactersLong
) {
  alert("Password is valid.");
} else {
  alert("Please enter a valid password that meets the requirements.");
}
//..........Question16.............
var university = "University of Karachi";


var array = university.split(" ");


document.write("<h3>Array Elements:</h3>");
document.write("<ul>");
for (var i = 0; i < array.length; i++) {
  document.write("<li>" + array[i] + "</li>");
}
document.write("</ul>");
//...............Question17..............

var userInput = prompt("Enter a string:");


var lastCharacter = userInput.charAt(userInput.length - 1);


document.write("<h3>Last Character:</h3>");
document.write("<p>" + lastCharacter + "</p>");
//.............Question18............
var sentence = "The quick brown fox jumps over the lazy dog";
var wordToSearch = "the";


var lowerCaseSentence = sentence.toLowerCase();
var lowerCaseWord = wordToSearch.toLowerCase();


var words = lowerCaseSentence.split(" ");


var count = 0;
for (var i = 0; i < words.length; i++) {
  if (words[i] === lowerCaseWord) {
    count++;
  }
}


document.write("<h3>Word Count:</h3>");
document.write("<p>The word 'the' occurs " + count + " times.</p>");