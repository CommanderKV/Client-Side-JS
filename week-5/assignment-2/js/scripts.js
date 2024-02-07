// constants for query selector
const UserEntry = document.querySelector("#customNumber");

// function to change bg color from user input and add student id
function changeCustomColor() {
    // Get the p element meant for the student id
    let p = document.getElementById("myStudentId");
    // Add both student numbers to the P element
    p.textContent = "Lakehead: 1220041 | Georgian: 200591612";

    // Apply the background color based on the value of 
    // the user input
    if (UserEntry.value < 0 || UserEntry.value > 100) {
        document.body.style.backgroundColor = "red";
    } else if (UserEntry.value > 0 && UserEntry.value < 20) {
        document.body.style.backgroundColor = "green";
    } else if (UserEntry.value > 20 && UserEntry.value < 40) {
        document.body.style.backgroundColor = "blue";
    } else if (UserEntry.value > 40 && UserEntry.value < 60) {
        document.body.style.backgroundColor = "orange";
    } else if (UserEntry.value > 60 && UserEntry.value < 80) {
        document.body.style.backgroundColor = "purple";
    } else if (UserEntry.value > 80 && UserEntry.value < 100) {
        document.body.style.backgroundColor = "yellow";
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    // Generate a random number between 0 and 100
    // and set the value of the input to that number
    UserEntry.value = Math.round(Math.random() * 100);

    // Change the background color based on the value of
    // the random number 
    changeCustomColor();
}

// function to generate options for select list
function addList() {
    // Get the image selector element
    let imageSelector = document.getElementById("imageSelect");

    // If the length of the current opritons is less than 6, then add the options
    if (imageSelector.length < 6) {
        let options = [
            "img1.jpg", 
            "img2.jpg", 
            "img3.jpg", 
            "img4.jpg", 
            "img5.jpg"
        ];

        // Loop through the options and add them to the select list
        for (var i = 0; i < options.length; i++) {
            var image = options[i];
            var option = document.createElement("option");
            option.textContent = image.replace(".jpg", "");
            option.value = "img/" + image;
            imageSelector.appendChild(option);
        }
    }
}

// function to change image
function changeImage() {
    // Get the selector and image elements
    let selector = document.getElementById("imageSelect");
    let image = document.getElementById("images");

    // Check to see if we selected an image or not and
    // make appropriate changes to the image element
    if (selector.value.length === 12) {
        image.setAttribute("src", selector.value);
    } else {
        image.setAttribute("src", "");
    }
}

// event listeners for on click event of buttons and select
// Buttons
document.querySelector(".custColor").addEventListener("click", changeCustomColor);
document.querySelector(".randColor").addEventListener("click", changeRandomColor);

// Selector
document.getElementById("imageSelect").addEventListener("click", addList);

// event listeners for on change event of select
document.getElementById("imageSelect").addEventListener("change", changeImage);