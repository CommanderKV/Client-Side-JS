// Define objects used in the file
const studentInfo = document.getElementById("student-info");
const pizzaDesc = document.getElementById("pizza-desc");
const pizzaForm = document.getElementById("pizza-form");
const pizzaSubmitButton = document.getElementById("submit-button");

// Define the pizza object
class Pizza {
    constructor(size, toppings, cheeseLevel, specialInstructions) {
        // Make a toppingss list
        this.toppings = [];
        for(var i=0; toppings[i]; ++i){
            if(toppings[i].checked){
                this.toppings.push(toppings[i].value);
            }
        }

        // If no toppings are selected, add "no toppings" to the list
        if (this.toppings.length == 0) {
            this.toppings.push("no toppings");
        }

        // Set the pizza properties
        this.size = size;
        this.cheeseLevel = cheeseLevel;
        this.specialInstructions = specialInstructions;
    }

    // Method to describe the pizza
    describe() {
        if (this.specialInstructions == "") {
            return `A ${this.size} pizza with ${this.toppings} and ${this.cheeseLevel} cheese.`;
        } else {
            return `A ${this.size} pizza with ${this.toppings} and ${this.cheeseLevel} cheese. Special instructions: ${this.specialInstructions}`;
        }
    }
}


// Add student info to student-info
var studentName = document.createElement("p");
studentName.innerHTML = "Name: Kyler. V";

var studentID = document.createElement("p");
studentID.innerHTML = "Student ID: 200591612";

studentInfo.appendChild(studentName);
studentInfo.appendChild(studentID);


// Add event listiners
pizzaForm.addEventListener("submit", function(event) {
    // Dont do anything stay on the same page
    event.preventDefault();
});

pizzaSubmitButton.addEventListener("click", function() {
    // Describe the pizza to the user
    var pizza = new Pizza(
        pizzaForm.size.value,
        pizzaForm.toppings,
        pizzaForm.cheese.value,
        pizzaForm.instructions.value
    )

    // Display the pizza description
    pizzaDesc.innerHTML = pizza.describe();
});
