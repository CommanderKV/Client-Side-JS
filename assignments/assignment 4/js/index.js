// Get all inputs
var airlineForm = document.querySelector("form");
var airlineSubmit = document.getElementById("submit-button");

// Get all outputs
var error = document.getElementById("error");
var logo = document.getElementById("logo");
var companyName = document.getElementById("name");
var icao = document.getElementById("ICAO");
var iata = document.getElementById("IATA");
var aircraftData = document.getElementById("aircraft");
var total = document.getElementById("total");


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
    console.log(data[0]);

    // Set the logo, name, ICAO, and IATA
    if (data[0].logo_url != undefined) {
        logo.setAttribute("src", data[0].logo_url);
    }
    logo.setAttribute("style", "visibility: visible;");
    companyName.textContent = data[0].name;
    icao.textContent = data[0].icao;
    iata.textContent = data[0].iata;

    var aircraftList = data[0].fleet;
    console.log(aircraftList);
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
    // Clear the data
    logo.setAttribute("src", "");
    companyName.textContent = "";
    icao.textContent = "";
    iata.textContent = "";
    aircraftData.innerHTML = "";
    total.textContent = "";
    displayData();
});

