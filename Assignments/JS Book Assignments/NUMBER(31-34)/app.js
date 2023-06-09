//...Question1....//
var date = new Date();
var month = date.getMonth();
console.log(month);

//....Question2..//
function alertCurrentMonth() {

  var currentMonthIndex = new Date().getMonth();


  var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


  var currentMonth = monthNames[currentMonthIndex];


  alert("Current Month: " + currentMonth);
}


alertCurrentMonth();

//.........Question3.....//
function alertCurrentDay() {

  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


  var currentDayIndex = new Date().getDay();


  var currentDay = dayNames[currentDayIndex];


  alert("Current Day: " + currentDay);
}


alertCurrentDay();

//.....Question4....//
function checkIfFunDay() {

  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  var currentDayIndex = new Date().getDay();


  var currentDay = dayNames[currentDayIndex];


  if (currentDay === "Saturday" || currentDay === "Sunday") {
    console.log("It's Fun day");
  } else {
    console.log("It's not Fun day");
  }
}


checkIfFunDay();

//...Question5....//
function checkMonthDays() {

  var currentDate = new Date();


  var currentDay = currentDate.getDate();


  if (currentDay < 16) {
    console.log("First fifteen days of the month");
  } else {
    console.log("Last days of the month");
  }
}


checkMonthDays();
//.....Question6....//
function calculateMinutesSinceEpoch() {

  var currentDate = new Date();


  var minutesSinceEpoch = Math.floor(currentDate.getTime() / (1000 * 60));


  console.log("Minutes since midnight, Jan. 1, 1970: " + minutesSinceEpoch);
}


calculateMinutesSinceEpoch();

//..........Question7....//
var currentTime = new Date();

var hours = currentTime.getHours();

if (hours < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}
//.....Question8..//
let laterDate = new Date(2020, 11, 0);

console.log(laterDate);

//...Question9...//
let startingDate = new Date('June 18, 2015');
let currentDate = new Date();
let timeDiff = currentDate.getTime() - startingDate.getTime();
let daysPassed = Math.floor(timeDiff / (1000 * 3600 * 24));

alert("Number of days passed since 1st Ramadan: " + daysPassed);

//.....Question10...//
let referenceDate = new Date();
let beginningOf2015 = new Date('January 1, 2015');

let timeDif = referenceDate.getTime() - beginningOf2015.getTime();
let secondsElapsed = Math.floor(timeDif / 1000);

document.write("Seconds elapsed since the beginning of 2015: " + secondsElapsed);
//..........Question11......//
function updateDate() {
  var currentDate = new Date();

  var currentHours = currentDate.getHours();

  currentDate.setHours(currentHours + 1);

  document.getElementById("updated-date").innerHTML = "Updated Date: " + currentDate;
}
//....Question12...//
let currDate = new Date();

currentDate.setFullYear(currDate.getFullYear() - 100);

alert("Updated Date: " + currDate);

//.....Question13...//
function generateBill(customerName, currentMonth, numberOfUnits, chargesPerUnit) {

  const dueDate = 10;
  const latePaymentSurchargeRate = 0.02;


  const netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
  const currentDate = new Date();
  const isLatePayment = currentDate.getDate() > dueDate;
  const latePaymentSurcharge = isLatePayment ? (netAmountPayable * latePaymentSurchargeRate).toFixed(2) : 0;
  const grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2);


  document.write("Customer Name: " + customerName);
  document.write("Current Month: " + currentMonth);
  document.write("Number of units: " + numberOfUnits);
  document.write("Charges per unit: " + chargesPerUnit);
  document.write("Net Amount Payable (within Due Date): " + netAmountPayable);
  document.write("Late Payment Surcharge: " + latePaymentSurcharge);
  document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable);
}


let result = generateBill("John Doe", "May 2023", 200, 12.5);
document.write(result);   