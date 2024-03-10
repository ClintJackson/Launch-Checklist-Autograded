// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {

    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
    
               
    }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let validPilot = false;
    let validCopilot = false;
    let validFuelLevel = false;
    let validCargoLevel = false;
    let fuelParameters = false;
    let cargoParameters = false;

    let launchStatusHeader = document.getElementById
    ("launchStatus");

    let pilotStat = document.getElementById("pilotStatus");
    let copilotStat = document.getElementById("copilotStatus");
    let fuelStatusMsg = document.getElementById("fuelStatus")
    let cargoStatusMsg = document.getElementById("cargoStatus");
    

    if (!(validateInput(pilot) === "Empty") &&
        !(validateInput(pilot) === "Is a Number")){
        validPilot = true;
        pilotStat.textContent += `Pilot ${pilot} is ready for launch`;
    }
    if(validateInput(copilot) != "Empty" &&
        validateInput(copilot) != "Is a Number"){
        validCopilot = true;
        copilotStat.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    } 
    if(validateInput(fuelLevel) === "Is a Number") {
        validFuelLevel = true;
        if (fuelLevel >= 10_000){
            fuelParameters = true;
        };
    }

    if(validateInput(cargoLevel) === "Is a Number"){
        validCargoLevel = true;
        if (cargoLevel < 10_000) {
            cargoParameters = true;
        }
    }

    if (fuelParameters === true){
        fuelStatusMsg.innerHTML = "Fuel level high enough for launch";
        launchStatusHeader.style.color = "green";

    } else {
        list.style.visibility = "visible";
        fuelStatusMsg.innerHTML = "Fuel level too low for launch";
        launchStatusHeader.innerHTML = "Shuttle Not Ready for Launch";
        launchStatusHeader.style.color = 'red';
    }

    if (cargoParameters === false){
        launchStatusHeader.style = 'color: red';
        launchStatusHeader.innerHTML = "Shuttle Not Ready for Launch";
        list.style.visibility = "visible";
        cargoStatusMsg.innerHTML = "Cargo mass too heavy for launch";
        
    } else {
        if (fuelParameters === true) {
        launchStatusHeader.style.color = "green";
        cargoStatusMsg.innerHTML = "Cargo mass low enough for launch";
        }
    }
    
    if (validPilot && validCopilot && fuelParameters && cargoParameters) {
        launchStatusHeader.innerHTML = "Shuttle is Ready for Launch";
        launchStatusHeader.style = "color: green";
    } else {
        launchStatusHeader.innerHTML = "Shuttle Not Ready for Launch";
        launchStatusHeader.style.color = "red";
    }
    return;
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
     
     planetsReturned.then( function(response) {
        response.json().then((rawJson)=>{
            console.log(rawJson);
        }) 
    });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;