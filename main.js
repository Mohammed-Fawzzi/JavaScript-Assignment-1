//Number 1 //
var num = Number(window.prompt("Enter a number:"));
console.log(num);

//Number 2 //
var num = Number(window.prompt("Enter a number:"));
if (num % 3 == 0 && num % 4 == 0) {
  console.log("Yes");
} else {
  console.log("No");
}

//Number 3 //
var num1 = Number(prompt("Enter number 1:"));
var num2 = Number(prompt("Enter Num 2:"));

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

//Number 4 //
var number = parseInt(prompt("Enter a number: "));
if (number > 0) {
  console.log("The number is positive");
} else if (number == 0) {
  console.log("The number is zero");
} else {
  console.log("The number is negative");
}

//Number 5 //
var num1 = Number(prompt("Enter number One:"));
var num2 = Number(prompt("Enter number Two:"));
var num3 = Number(prompt("Enter number Three:"));

var maxElement, minElement;

if (num1 >= num2 && num1 >= num3) {
  maxElement = num1;
} else if (num2 >= num1 && num2 >= num3) {
  maxElement = num2;
} else {
  maxElement = num3;
}

if (num1 <= num2 && num1 <= num3) {
  minElement = num1;
} else if (num2 <= num1 && num2 <= num3) {
  minElement = num2;
} else {
  minElement = num3;
}

console.log("Max Element is: " + maxElement);
console.log("Min Element is: " + minElement);

//Number 6 //
var number = Number(window.prompt("ُEnter number:"));

if (number % 2 == 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

//Number 8 //
var input = prompt("Enter a character:");
if (
  input == "a" ||
  input == "A" ||
  input == "e" ||
  input == "E" ||
  input == "i" ||
  input == "I" ||
  input == "o" ||
  input == "O" ||
  input == "u" ||
  input == "U"
) {
  console.log("Its a vowel");
} else if ((input >= "a" && input <= "z") || (input >= "A" && input <= "Z")) {
  console.log("Its a consonant");
} else {
  console.log("Invalid input please enter an alphabet");
}

// Number 9 //
var number = Number(window.prompt("Please enter a valid number:"));
if (!isNaN(number)) {
  for (var i = 1; i <= number; i++) {
    console.log(i);
  }
} else {
  console.log("Please register a valid number");
}

// Number 10 //
var number = parseInt(prompt("Please enter a valid number:"));
if (!isNaN(number))
  for (var i = 1; i <= 12; i++) {
    var result = number * i;
    console.log(result);
  }
else console.log("Please enter a valid number.");

// Number 11 //
let userInput = 10;

if (userInput <= 0) {
  console.log("Invalid input. Please enter a positive number.");
} else {
  console.log("Even numbers between 1 and", userInput + ":");
  for (let i = 2; i <= userInput; i += 2) {
    console.log(i);
  }
}

// Number 12 //
var marks1 = parseInt(prompt("Enter marks for subject 1:"));
var marks2 = parseInt(prompt("Enter marks for subject 2:"));
var marks3 = parseInt(prompt("Enter marks for subject 3:"));
var marks4 = parseInt(prompt("Enter marks for subject 4:"));
var marks5 = parseInt(prompt("Enter marks for subject 5:"));

var totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;

var averageMarks = totalMarks / 5;

var percentage = (totalMarks / 500) * 100;

console.log("Total marks = " + totalMarks);
console.log("Average marks = " + averageMarks);
console.log("Percentage = " + percentage);

// Number 13 //
var monthNumber = parseInt(prompt("Enter the month number (1-12):"));

if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
  alert("Please enter a valid month number between 1 and 12.");
} else {
  var numberOfDays;

  if (monthNumber === 2) numberOfDays = 28;
  else if (
    monthNumber === 4 ||
    monthNumber === 6 ||
    monthNumber === 9 ||
    monthNumber === 11
  )
    numberOfDays = 30;
  else numberOfDays = 31;

  console.log("Number of days in month " + monthNumber + ": " + numberOfDays);
}

// Number 14 //
var physicsMarks = Number(prompt("Enter marks in Physics:"));
var chemistryMarks = Number(prompt("Enter marks in Chemistry:"));
var biologyMarks = Number(prompt("Enter marks in Biology:"));
var mathematicsMarks = Number(prompt("Enter marks in Mathematics:"));
var computerMarks = Number(prompt("Enter marks in Computer:"));
var totalMarks =
  physicsMarks +
  chemistryMarks +
  biologyMarks +
  mathematicsMarks +
  computerMarks;
var percentage = (totalMarks / 500) * 100;
var grade;

if (percentage >= 90) {
  grade = "Grade A";
} else if (percentage >= 80) {
  grade = "Grade B";
} else if (percentage >= 70) {
  grade = "Grade C";
} else if (percentage >= 60) {
  grade = "Grade D";
} else if (percentage >= 40) {
  grade = "Grade E";
} else {
  grade = "Grade F";
}

console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);

// ******************************** Using switch case******************************* //

// Number 15 //
var month = 1;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 days");
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 days");
    break;

  case 2:
    console.log("28 or 29 days");
    break;

  default:
    console.log("Invalid month");
    break;
}

// Number 16 //
var alphabet = "A";
var result;

switch (alphabet) {
  case "a":
  case "A":
  case "e":
  case "E":
  case "i":
  case "I":
  case "o":
  case "O":
  case "u":
  case "U":
    result = "The alphabet is a vowel.";
    break;

  default:
    result = "The alphabet is a consonant.";
    break;
}
console.log(result);

// Number 17 //
var num1 = 5;
var num2 = 8;
var result;

switch (true) {
  case num1 > num2:
    result = "The first number is greater.";
    break;

  case num2 > num1:
    result = "The second number is greater.";
    break;

  default:
    result = "Both numbers are equal.";
    break;
}

console.log(result);

// Number 18 //
var number = 5;

var result;

switch (number % 2) {
  case 0:
    result = "The number is even.";
    break;

  case 1:
    result = "The number is odd.";
    break;

  default:
    result = "Invalid input.";
    break;
}

console.log(result);

// Number 19 //
var number = 4;

var result;

switch (true) {
  case number > 0:
    result = "The number is positive.";
    break;

  case number < 0:
    result = "The number is negative.";
    break;

  default:
    result = "The number is zero.";
    break;
}

console.log(result);

// Number 20 //
var operand1 = 10;
var operand2 = 10;
var operator = "*";

var result;

switch (operator) {
  case "*":
    result = operand1 * operand2;
    break;

  case "/":
    result = operand1 / operand2;
    break;

  case "+":
    result = operand1 + operand2;
    break;

  case "-":
    result = operand1 - operand2;
    break;

  default:
    result = "Invalid operator";
    break;
}

console.log("Result:", result);
