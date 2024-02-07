// STEP 1: Create reference for button element 'btn'
var btn = document.querySelector("button");

// STEP 3: Build an onclick event handler for 'btn' that invokes the displayMessage() function
btn.onclick = function () {
    displayMessage('This is a very important message!', "default");
};

// STEP 2: Create a function called displayMessage()
function displayMessage(msgText, msgType) {

    // STEP 3a: Create a P element referenced by var msgPanel 
    var msgPanel = document.createElement("p");

    // STEP 3b: Add a class attribute, "msgPanel" (refer to the CSS above)
    msgPanel.setAttribute("class", "msgPanel");

    // STEP 3c: Insert the message text into the new paragraph element
    msgPanel.textContent = msgText;

    // STEP 3d: Append the element to the document body
    document.body.appendChild(msgPanel);

    // STEP 4a: Create a close button referenced by var closeBtn
    var closeBtn = document.createElement("button");

    // STEP 4b: Add the letter 'x' to the button
    closeBtn.textContent = "x";

    // STEP 4c: Add this new button element as a child of the msgPanel paragraph element created earlier
    msgPanel.appendChild(closeBtn);

    // STEP 5: Build an onclick event handler for the close button that removes the msgPanel from the DOM entirely using the removeChild() method
    closeBtn.onclick = function () {
        document.body.removeChild(msgPanel);
    };

    // STEP 6a: Revise the function at STEP 2 to accept a parameter, 'msgText'
    // STEP 6b: At STEP 3 above, adapt the call to displayMessage() to include a string that should appear in the msgPanel

    // STEP 6c: Adjust STEP 3c above to use the passed-in parameter 'msgText'

    // STEP 7a: Revise the function at STEP 2 again to accept a second parameter, 'msgType'

    /* STEP 7b: Build an if/elseif/else statement (or a switch) below that adds a class of either 'error', 'warning', or 'default' to 
        the msgPanel element using the built-in method classList.add() - refer to the above CSS to see the styles associated with each of these classes */
    switch (msgType) {
        case "error":
            msgPanel.classList.add("error");
            break;
            
        case "warning":
            msgPanel.classList.add("warning");
            break;

        default:
            msgPanel.classList.add("default");
    
    }
    
}

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function