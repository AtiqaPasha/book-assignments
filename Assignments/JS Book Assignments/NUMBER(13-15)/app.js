// ............... Question1.............//
const studentNames = [];
studentNames.push("Michael");
studentNames.push("John");
studentNames.push("Tony");

// ............... Question2.............//
const studentName = {};
studentName.student1 = "Michael";
studentName.student2 = "John";
studentName.student3 = "Tony";

// ............... Question3.............//
const stringsArray = ["Hello", "World", "OpenAI", "JavaScript"];

console.log(stringsArray);

// ............... Question4.............//
const numbersArray = [1, 2, 3, 4, 5];

console.log(numbersArray);

// ............... Question5.............//
const booleanArray = [true, false, true, false];


console.log(booleanArray);

// ............... Question6.............//
const mixedArray = [1, "Hello", true, { name: "Michael", age: 25 }, null];


console.log(mixedArray);

// ............... Question7.............//
const qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];


document.write("<h2>QUALIFICATIONS</h2>");
document.write("<ol>");

for (let i = 0; i < qualificationsArray.length; i++) {
  document.write("<li>" + qualificationsArray[i] + "</li>");
}

document.write("</ol>");

// ............... Question8.............//
const studNames = ["Michael", "John", "Tony"];
const scores = [380, 420, 450];
const totalMarks = 500;


for (let i = 0; i < studNames.length; i++) {
  const studName = studNames[i];
  const score = scores[i];
  const percentage = (score / totalMarks) * 100;

  console.log("Student Name: " + studName);
  console.log("Score: " + score);
  console.log("Percentage: " + percentage.toFixed(2) + "%");
  console.log();
}
// ............... Question9.............//
// Initialize array with color names
let colorNames = ["Red", "Green", "Blue"];


document.write("<b>Original Array:</b> " + colorNames.join(", ") + "<br><br>");


let colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
colorNames.unshift(colorToAddBeginning);


document.write("<b>Array after adding color to the beginning:</b> " + colorNames.join(", ") + "<br><br>");


let colorToAddEnd = prompt("Enter a color to add to the end of the array:");
colorNames.push(colorToAddEnd);


document.write("<b>Array after adding color to the end:</b> " + colorNames.join(", ") + "<br><br>");


colorNames.unshift("Yellow", "Orange");


document.write("<b>Array after adding two colors to the beginning:</b> " + colorNames.join(", ") + "<br><br>");


colorNames.shift();


document.write("<b>Array after deleting the first color:</b> " + colorNames.join(", ") + "<br><br>");


colorNames.pop();


document.write("<b>Array after deleting the last color:</b> " + colorNames.join(", ") + "<br><br>");


let indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
let colorToAdd = prompt("Enter the color to add at the desired index:");
colorNames.splice(indexToAdd, 0, colorToAdd);


document.write("<b>Array after adding color at the desired index:</b> " + colorNames.join(", ") + "<br><br>");


let indexToDelete = parseInt(prompt("Enter the index from where you want to delete color(s):"));
let numOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
colorNames.splice(indexToDelete, numOfColorsToDelete);


document.write("<b>Array after deleting color(s) from the desired index:</b> " + colorNames.join(", ") + "<br><br>");

// ............... Question10.............//
let studentScores = [87, 92, 78, 95, 81];


studentScores.sort(function (a, b) {
  return a - b;
});


console.log("Sorted Scores:", studentScores);

// ............... Question11.............//
let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];


let selectedCities = [];


selectedCities = cities.slice(1, 4);


console.log("Selected Cities:", selectedCities);


// ............... Question12.............//
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");

console.log("Single String:", singleString);

// ............... Question13.............//

var fifoArray = [];


fifoArray.push("Value 1");
fifoArray.push("Value 2");
fifoArray.push("Value 3");


var firstValue = fifoArray.shift();
var secondValue = fifoArray.shift();
var thirdValue = fifoArray.shift();


console.log("First value:", firstValue);
console.log("Second value:", secondValue);
console.log("Third value:", thirdValue);

// ............... Question14.............//
var lifoArray = [];


lifoArray.push("Value 1");
lifoArray.push("Value 2");
lifoArray.push("Value 3");


var lastValue = lifoArray.pop();
var secondLastValue = lifoArray.pop();
var thirdLastValue = lifoArray.pop();


console.log("Last value:", lastValue);
console.log("Second last value:", secondLastValue);
console.log("Third last value:", thirdLastValue);

// ............... Question15.............//
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


var dropdownHTML = "<select>";
for (var i = 0; i < phoneManufacturers.length; i++) {
  dropdownHTML += "<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>";
}
dropdownHTML += "</select>";


document.write(dropdownHTML);

