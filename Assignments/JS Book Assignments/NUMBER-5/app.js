   //......Question1...................//
       
        var num1 = parseInt(prompt("Enter the first number:"));

        var num2 = parseInt(prompt("Enter the second number:"));
        
        var sum = num1 + num2;
        
        document.write("The sum of " + num1 + " and " + num2 + " is " + sum);
        
        //............Question2...............//
        var num1 = parseFloat(prompt("Enter the first number:"));
        
        var num2 = parseFloat(prompt("Enter the second number:"));
        
        // for subtraction 
        var subtraction = num1 - num2;
        
        // for multiplication 
        var multiplication = num1 * num2;
        
        // for division 
        var division = num1 / num2;
        
        // for modulus
        var modulus = num1 % num2;
        
        document.write("Subtraction: " + num1 + " - " + num2 + " = " + subtraction + "<br>");
        document.write("Multiplication: " + num1 + " * " + num2 + " = " + multiplication + "<br>");
        document.write("Division: " + num1 + " / " + num2 + " = " + division + "<br>");
        document.write("Modulus: " + num1 + " % " + num2 + " = " + modulus);


        //...........Question3...................//

        var num;
        document.write("Value after variable declaration is: " + num + "<br>");
        
        num = 5;
        document.write("Initial value: " + num + "<br>");
        
        // Increment
        num++;
        document.write("Value after increment is: " + num + "<br>");
        
        num += 7;
        document.write("Value after addition is: " + num + "<br>");
        
        // Decrement 
        num--;
    
        document.write("Value after decrement is: " + num + "<br>");
        

        var remainder = num % 3;
        document.write("The remainder is: " + remainder);
        
        //........Question4.............//
        
        var ticketPrice = 600;
        var totalCost = ticketPrice * 5;
        
        console.log("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");


        //...........Question5.........//
        
        var number = parseInt(prompt("Enter a number:"));
        
       
        document.write("<h2>Multiplication Table of " + number + "</h2>");
        for (var i = 1; i <= 10; i++) {
            document.write(number + " x " + i + " = " + (number * i) + "<br>");
        }
        //..........Question6..........//
       
        var celsius = 30;
        
        var fahrenheit = (celsius * 9/5) + 32;
        
        console.log(celsius + "°C is " + fahrenheit + "°F");
        
        var fahrenheit2 = 86;
        
        var celsius2 = (fahrenheit2 - 32) * 5/9;
        
        console.log(fahrenheit2 + "°F is " + celsius2 + "°C");


        //............Question7..........//
        
        var item1Price = 500;
        
        var item2Price = 750;
        
        var item1Quantity = 2;
        
        var item2Quantity = 3;
    
        var shippingCharges = 100;
        
        var subtotal = (item1Price * item1Quantity) + (item2Price * item2Quantity);
        var totalCost = subtotal + shippingCharges;
        
       
        document.write("<h2>Receipt</h2>");
        document.write("<p>Price of Item 1: " + item1Price + " PKR</p>");
        document.write("<p>Price of Item 2: " + item2Price + " PKR</p>");
        document.write("<p>Ordered Quantity of Item 1: " + item1Quantity + "</p>");
        document.write("<p>Ordered Quantity of Item 2: " + item2Quantity + "</p>");
        document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
        document.write("<p>Subtotal: " + subtotal + " PKR</p>");
        document.write("<p>Total Cost: " + totalCost + " PKR</p>");

        //...........Question8........//
       
        var totalMarks = 980;
        
        var marksObtained = 804;
        
        // Calculate the percentage
        var percentage = (marksObtained / totalMarks) * 100;
        
        document.write("<h2>Percentage Calculation</h2>");
        document.write("<p>Total Marks: " + totalMarks + "</p>");
        document.write("<p>Marks Obtained: " + marksObtained + "</p>");
        document.write("<p>Percentage: " + percentage + "%</p>");

        //...........Question9......//
       
        var usdToPkrRate = 104.80;
        var sarToPkrRate = 28;
        
        // Convert US dollars and Saudi Riyals to Pakistani Rupees
        var totalPkr = (10 * usdToPkrRate) + (25 * sarToPkrRate);
        
    
        document.write("<h2>Currency Conversion</h2>");
        document.write("<p>10 US dollars = " + (10 * usdToPkrRate) + " Pakistani Rupees</p>");
        document.write("<p>25 Saudi Riyals = " + (25 * sarToPkrRate) + " Pakistani Rupees</p>");
        document.write("<p>Total currency in Pakistani Rupees: " + totalPkr + " PKR</p>");

        //...........Question10............//
        var number = 8;
    
        var result = ((number + 5) * 10) / 2;
        
        console.log("The final result is: " + result);

        //...........q11.............//

        var currentYear = new Date().getFullYear();
        
        var birthYear = 2021; 
        
        var age1 = currentYear - birthYear;
        var age2 = age1 - 1;
        
        console.log("They are either " + age1 + " or " + age2 + " years old.");

        //.............Question12...........//
        
        var radius = 20; 
    
        var circumference = 2 * Math.PI * radius;
        
        var area = Math.PI * Math.pow(radius, 2);
        
        console.log("The circumference is " + circumference.toFixed(2));
        console.log("The area is " + area.toFixed(2));

        //.......Question13............//
       
        var favouriteSnack = "Chocolate";
        
        var currentAge = 15;
    
        var maximumAge = 65;
        
        var amountPerDay = 3;
        
        var yearsRemaining = maximumAge - currentAge;
        var daysRemaining = yearsRemaining * 365;
        var totalSnacks = daysRemaining * amountPerDay;
        

        console.log("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");
        