// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var noun1 =  document.querySelector("#noun1");
var verb =  document.querySelector("#verb");
var adjective =  document.querySelector("#adjective");
var noun2 =  document.querySelector("#noun2");
var setting =  document.querySelector("#setting");

// Constants for p tag to display query selectors
var noun1Display =  document.querySelector("#choosenNoun1");
var verbDisplay =  document.querySelector("#choosenVerb");
var adjectiveDisplay =  document.querySelector("#choosenAdjective");
var noun2Display =  document.querySelector("#choosenNoun2");
var settingDisplay =  document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
var playbackButton =  document.querySelector("#playback");
var randomStoryButton =  document.querySelector("#random");
var resetButton = document.querySelector("#reset");
var storyDisplay =  document.querySelector("#story");

// Variables for pre-defined arrays
var noun1Array = [
    "The turkey", 
    "Mom", 
    "Dad", 
    "The dog", 
    "My teacher", 
    "The elephant", 
    "The cat"
];
var verbArray = [
    "sat on", 
    "ate", 
    "danced with", 
    "saw", 
    "doesn't like", 
    "kissed"
];
var adjectiveArray = [
    "a funny", 
    "a scary", 
    "a goofy", 
    "a slimy", 
    "a barking", 
    "a fat"
];
var noun2Array = [
    "goat", 
    "monkey", 
    "fish", 
    "cow", 
    "frog", 
    "bug", 
    "worm"
];
var settingArray = [
    "on the moon", 
    "on the chair", 
    "in my spaghetti", 
    "in my soup", 
    "on the grass", 
    "in my shoes"
];

// Variables for count to grab array elements
var storyArray = [];

/* Functions
-------------------------------------------------- */
function getRandomElement(array) {
    // variable to get array element and displaying it
    return array[Math.floor(Math.random() * array.length)];
}

function noun1_on_click() {
    // variable to get array element and displaying it
    var noun = getRandomElement(noun1Array);

    // Add the noun to the story array
    storyArray.push(noun);

    // Display the noun
    noun1Display.textContent += noun + " ";
}

function verb_on_click() {
    // Get a verb from the verb array
    var verb = getRandomElement(verbArray);

    // Add the verb to the story array
    storyArray.push(verb);

    // Display the verb
    verbDisplay.textContent += verb + " ";
}

function adjective_on_click() {
    // Get an adjective from the adjective array
    var adjective = getRandomElement(adjectiveArray);

    // Add the adjective to the story array
    storyArray.push(adjective);

    // Display the adjective
    adjectiveDisplay.textContent += adjective + " ";
}

function noun2_on_click() {
    // Get a noun from the noun2 array
    var noun = getRandomElement(noun2Array);

    // Add the noun to the story array
    storyArray.push(noun);

    // Display the noun
    noun2Display.textContent += noun + " ";
}

function setting_on_click() {
    // Get a setting from the setting array
    var setting = getRandomElement(settingArray);

    // Add the setting to the story array
    storyArray.push(setting);

    // Display the setting
    settingDisplay.textContent += setting + " ";
}

// concatenate the user story and display
function playback_on_click() {
    // Loop through the story array and concatenate each one into a string
    var story = ""
    for (item in storyArray) {
        story += storyArray[item] + " ";
    }

    // Display the story
    storyDisplay.textContent = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    // Reset the story array
    reset_on_click();

    // Generate a story
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();

    // Display the story
    playback_on_click();
}

function reset_on_click() {
    // Reset the story array
    storyArray = [];

    // Reset the display
    noun1Display.textContent = "";
    verbDisplay.textContent = "";
    adjectiveDisplay.textContent = "";
    noun2Display.textContent = "";
    settingDisplay.textContent = "";
    storyDisplay.textContent = "";
}

function studentIdDisplay() {
    // Display student ID
    document.querySelector("#studentId").textContent = "Student ID: 1220041";
}

/* Event Listeners
-------------------------------------------------- */

// Event listeners for the main buttons
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);

// Event listener for the display buttons
playbackButton.addEventListener("click", playback_on_click);
randomStoryButton.addEventListener("click", random_on_click);

// Event listener for the reset button
resetButton.addEventListener("click", reset_on_click);

// Evevent listiner for student ID
document.addEventListener("DOMContentLoaded", studentIdDisplay);
