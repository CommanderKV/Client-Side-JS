var output = document.querySelector("p");
output.textContent = 10;
// STEP 1: Creating Strings
var string1 = "Hello, How are you?";

// Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

// STEP 2: Escaping Characters
var string2 = 'It\'s cold out there!';
var string3 = "It's cold out there!";
output.textContent = string2;

// STEP 3: Concatenation
output.textContent = string1 + " " + string2;
output.textContent = string1 + 20;
output.textContent = 33 + 20 + "1";

// STEP 4: Numbers and Strings

// numbers can be converted to strings
output.textContent = "Check" + 55;

// strings can be converted to numbers, too
var num1 = "20";
var num2 = Number(num1);
output.textContent = typeof(num2);

// and back again, if we want
output.textContent = num2.toString() + String(num2);