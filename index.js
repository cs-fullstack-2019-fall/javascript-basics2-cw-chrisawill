// // # JavaScript-Basics2-CW
//
// // ### Question 1
// // Create two variables. One should equal “My name is: “ and the other should equal your name. Print the two variables in one print message.
//
var  question = "My name is ";
var  myName = "Christian Williams";
alert(question + myName + ".");

// //     ### Question 2
// // Ask the user “What is your balance”. Make sure to save that answer in a variable balance. Subtract 10 from that balance. Print "You lost $10. Your new balance is: [THE BALANCE]".
//
var userBalance = prompt("What is your balance?");
var numberInt = parseInt(userBalance)-10;
var newBalance = numberInt;
alert("You lost $10! Your new balance is " + newBalance + ".");
//
//
//
// //     ### Question 3
// // Create a variable. Ask the user to “Enter your number grade”. Ask the user “Enter your extra credit". Print the grade plus extra credit.
//
var userGrade = prompt("Enter your number grade.");
var userCredit = prompt("Enter your extra credit.");
var  numberInt = parseInt(userGrade)+parseInt(userCredit);
alert("Your grade is now " + numberInt + ".");



// Question 4
// Create a variable called balance and save it after asking the user “What is your balance?”. Create a variable called deduction and save it when asking the user “How much do you want to deduct?” Print the remaining balance after subtracting the deduction.

var balance = prompt("What is your balance?");
var deduction = prompt("How much would you like to deduct?");
var numberInt1 = parseInt(balance)-parseInt(deduction)
alert("Your balance is now " + numberInt1 + ".");