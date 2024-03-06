const output = document.getElementById('output');

/* STEP 1: Create an object (looks a lot like declaring a variable, but with empty braces), 
then open this page in a browser and enter 'person' in the console */
var person = {};
console.log(person);

/* STEP 2a: Add other data items to the above object, like name, age, gender, address, and interests */
person["name"] = "John";
person["age"] = 32;
person["gender"] = "male";
person["address"] = "123 Main St";
person["interests"] = ["music", "skiing"];

/* STEP 2b: Enter the following directly into the console:
    person.name[0]
    person.age
    person.gender
    person.interests[0]
*/
console.log(person.name[0]);
console.log(person.age);
console.log(person.gender);
console.log(person.interests[0]);

/* STEP 3: Add a simple function (now called a method in this context) to the above object 
called "greeting" that creates an alert dialog, then type person.greeting() into the console */
person.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
}

/* STEP 4: Add a more complicated function to the object that describes the person, their age, gender, 
    and interests in a string that is output to an alert dialog */
person.bio = function() {
    alert("Name: " + this.name + ", Age: " + this.age + ", Gender: " + this.gender + ", Interests: " + this.interests);
}

// The object above is called an 'object literal' - in that we build each part of the object manually, 
// rather than instatiating it from a class (which we will cover later). 
// Objects can be easier to work with than arrays, as you can name each element

/* STEP 5a: Dot syntax allows you to access the parts of an object - the first part is the namespace, 
and subsequent parts are used to access things encapsulated within the object. Access the name, age, 
and gender of the person object, and put it inside the <p id="output"></p>. */
var outputP = document.getElementById('output');
outputP.textContent = "Name: " + this.name + ", Age: " + this.age + ", Gender: " + this.gender + ", Interests: " + this.interests;

/* STEP 5b: Update the above bio() function inside the person object to return 
the string, instead of the alert(). */
person.bio = function() {
    return "Name: " + this.name + ", Age: " + this.age + ", Gender: " + this.gender + ", Interests: " + this.interests;
}

/* STEP 6a: An object can even contain another object - update object person above to include a name object. 
Note how this breaks the greeting and bio functions - update the greeting function to use this sub-namespace */
person.name = {
    fName: "John",
    lName: "Doe"
}
person.greeting = function() {
    alert('Hi! I\'m ' + this.name.fName + ' .' + this.name.lName[0] + ".");
}

/* STEP 6b: Now fix the bio() function to use the sub-namespace of 'name' as well */
person.bio = function() {
    return "Name: " + this.name.fname + " " + this.name.lName + ", Age: " + this.age + ", Gender: " + this.gender + ", Interests: " + this.interests;
}

/* STEP 7: You can also use bracket notation, just like an array - 
objects that are built this way are often referred to as associative arrays */


/* STEP 8: You can also set members of an object - try changing the person's name, and age */

person.name = "Jane";
person.age = 28;

/* STEP 9a: It it also possible to add new members to an object - include eye color - and type person.eyes in the console */
person.eyes = "blue";

/* STEP 9b: Add a new function called 'goodbye' to the person object and try it by typing person.goodbye into the console */
person.goodbye = function() {
    alert("Goodbye everyone!");
}

/* STEP 10: We can also dynamically set both names and values for objects… */


/* STEP 11a: 'this' is very useful - it allows us to refer to the object in question, specifically. 
This will become much clearer later in the course. Create two new objects, 
each with a name, and a function that outputs the name */
var person1 = {
    name: 'Chris',
    hello: function() {
        alert(this.name);
    }
}
var person2 = {
    name: 'Debbie',
    hello: function() {
        alert(this.name);
    }
}
/* STEP 11b: Call up both person1.hello() and person2.hello() 
in the console to see how 'this' is specific to each object */

// You have already been using objects all along:
let myString = 'Words, words, words.'; // this creates an instance of the class String
const elem = document.getElementById('output'); // this accesses the Document object, which is created (instantiated) when the browser opens the HTML page

// Next, open up oop.html and we will delve a bit deeper into JavaScript objects.

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics