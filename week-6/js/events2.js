
// Declare and initialize variables
var elem = document.querySelector('h1');

// Functions
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
/* STEP 1a: Event Objects
Modify the below function to allow it to accept the event as a parameter 
or argument (named "event" in this case), then change the background color of the 
event.target instead of the document body */
function bgChange(event) {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    // document.body.style.backgroundColor = rndCol;
    console.log(event);
    event.target.style.backgroundColor = rndCol;
}
// The target property of the event is a reference to the element 
//that the event was acted upon

/* STEP 1b: Change the element that features the click event listener 
by modifying the var declaration above to target the <h1> instead */

// Event Listeners/Handlers
elem.addEventListener('click', bgChange);
p.addEventListener('click', bgChange);

/* STEP 2a: Prevent Default Behavior
Examine the simple form above in the HTML, then review the following bindings: */

var form = document.querySelector('form');
var email = document.getElementById('email');
var submit = document.getElementById('submit');
var para = document.querySelector('#formErrors');

/* STEP 2b: Create a script to capture the onsubmit event using preventDefault() */

submit.addEventListener('click', function(event) {
    if (email.value === "") {
        para.textContent = 'Please enter an email address';
        event.preventDefault();
    }
});


// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
