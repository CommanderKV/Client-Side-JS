/* STEP 1: Basic browser functions
There are a number of functions that are included with most modern browsers - the replace() function is just one of many */
var step1a = "Hello! How are you?";
var step1b = step1a.replace("are", "is");
console.log(step1a);
console.log(step1b);

// Interestingly, functions that are included with your browser are technically called 'methods' rather than functions.

/* STEP 2: Anonymous versus named functions */
var step2Button = document.querySelector('#step2');
// Anonymous
step2Button.addEventListener('click', function() {
    alert("I am an anonymous function");
});

// Named function
step2Button.addEventListener('click', namedFunction);
function namedFunction() {
    alert("I am a named function");
}

/* STEP 3: Function parameters
Some methods or functions don't require any parameters (sometimes called arguments, properties, or attributes), while some do, 
and others are optional. */

// No parameters needed
function addNumbers() {
    var a = 10;
    var b = 20;
    console.log(a + b);
}

// Two parameters needed
function addNumbersTwo(a, b) {
    console.log(a + b);
}

// Parameters optional
// join
var myArray = ["apple", "bannana", "grapes"];
console.log(myArray.join());
console.log(myArray.join(" - "));
console.log(myArray.join(" ----------"));

// Next, open up scope.html and we will look at how the accessibility of variables depends on where they are defined/initialized.

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions
