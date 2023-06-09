//..........Question1.......//
var age = 15;
function displayAge() {
  alert("I am" + age + "years old");

}

///.....Question2.....//
var visitCount = 0;

if (localStorage.getItem('visitCount')) {
  visitCount = parseInt(localStorage.getItem('visitCount'));
}

visitCount++;

localStorage.setItem('visitCount', visitCount);

document.getElementById('visitCountDisplay').textContent = "You have visited this site " + visitCount + " times.";

//...Question3...//
let birthYear = 2021;
let datatype = typeof (birthYear)
function birthyear() {
  alert("My birth year is " + birthYear + " \n" + "Data type of my declared variable is " + datatype)
}
//....Question4.......//

var visitorName = prompt("Please enter your name:");

var productTitle = prompt("Enter the product title:");

var quantity = parseInt(prompt("Enter the quantity:"));

var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";
document.write(message);