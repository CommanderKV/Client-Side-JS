// Get all inputs
const airlineForm = document.querySelector("form");
const airlineSubmit = document.getElementById("submit-button");

// Get all outputs
const error = document.getElementById("error");
const logo = document.getElementById("logo");
const companyName = document.getElementById("name");
const icao = document.getElementById("ICAO");
const iata = document.getElementById("IATA");
const aircraftData = document.getElementById("aircraft");
const total = document.getElementById("total");
const studentInfo = document.getElementById("student-info");


// Get the airline name from the form
function getAirline() {
    return airlineForm.elements["airline"].value;
}

// Get the data from the API
async function getData(companyName=null) {
    // Set the name data
    var nameData;
    if (companyName != null) {
        nameData = companyName;
    } else {
        nameData = getAirline();
    }

    // Run the fetch request to the API
    const response = await fetch("https://api.api-ninjas.com/v1/airlines?name=" + nameData, {
        method: "GET",
        headers: {
            "X-Api-Key": "z8WCx7ijMQySGhhGL23V9w==kskCcRzmviE7m4xp",
            "Content-Type": "application/json"
        }
    })// Catch any errors
    .catch((error) => {
        error.textContent = "Error: " + error;
    });
    // Await and return result
    const result = response.json();
    return result;
    
}

// Display the data from the API
async function displayData() {
    // Get data from the API
    const data = await getData();
    var index = 0;
    if (data.length == 2) {
        index = 1;
    }

    // Set the logo, name, ICAO, and IATA
    if (data[index].logo_url != undefined) {
        logo.setAttribute("src", data[index].logo_url);
    }
    logo.setAttribute("style", "visibility: visible;");
    companyName.textContent = data[index].name;
    icao.textContent = data[index].icao;
    iata.textContent = data[index].iata;

    var aircraftList = data[index].fleet;
    for (const [key, value] of Object.entries(aircraftList)) {
        // Make sure we aren't adding the total to the aircraft data
        if (key != "total") {
            // Create elements
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");

            // Add text to our data
            td1.textContent = key;
            td2.textContent = value;

            // Add the text to the row
            tr.appendChild(td1);
            tr.appendChild(td2);

            // Add the text to the table
            aircraftData.appendChild(tr);

        // Add the total to the end of the table
        } else {
            total.textContent = value;
        }
    }
}

airlineSubmit.addEventListener("click", function() {
    // Display the student info
    studentInfo.textContent = "Name: Kyler. V #200591612";

    // Clear the data
    logo.setAttribute("src", "");
    companyName.textContent = "";
    icao.textContent = "";
    iata.textContent = "";
    aircraftData.innerHTML = "";
    total.textContent = "";

    // Display the data
    displayData();
});

