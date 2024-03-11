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
    let destination = document.getElementById("missionTarget");
    destination.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
   `;
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

    let validPilot = validateInput(pilot);
    let validCopilot = validateInput(copilot);
    let validFuelLevel = validateInput(fuelLevel)
    let validCargoLevel = validateInput(cargoLevel)

    let launchStatusHeader = document.getElementById
    ("launchStatus");

    let pilotStat = document.getElementById("pilotStatus");    
    let copilotStat = document.getElementById("copilotStatus");
    let fuelStatusMsg = document.getElementById("fuelStatus")
    fuelStatusMsg.innerHTML = "No value entered";
    let cargoStatusMsg = document.getElementById("cargoStatus");
    cargoStatusMsg.innerHTML = "No value entered";
    
    let alertMessage = "";

    let valuesNeedChecking = true;
    let pilotGood = false;
    let coPilotGood = false;
    let fuelLevelGood = false;
    let cargoLevelGood = false;

    if (valuesNeedChecking){
        //pilot checks
        if (validPilot){
            if (validPilot === "Empty"){
                pilotStat.innerHTML = "No name entered";
                alert("Pilot name required");
            } else if (validPilot === "Is a Number") {
                alertMessage += "Pilot should get a new name lol\n";
            } else {
                pilotStat.innerHTML = `Pilot ${pilot} is ready for launch`;
                pilotGood = true;
            }
        
        }
        //copilot checks
        if (validCopilot){
            if (validCopilot === "Empty"){
                copilotStat.innerHTML = "No name entered";
                alert("Co-pilot name required");
            } else if (validCopilot === "Is a Number") {
                alertMessage += "CoPilot should get a new name lol\n";
            } else {
            copilotStat.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            coPilotGood = true;
            }
        }
        //fuel level checks
        if (validFuelLevel){
            if (validFuelLevel === "Empty") {
                alertMessage += "Fuel level entry required\n";
            } else if (validFuelLevel === "Not a Number") {
                alertMessage += "Rockets don't run on words\n";
            } else if (fuelLevel < 10000) {
                fuelStatusMsg.innerHTML = `Fuel level too low for launch`;
                alertMessage += "too low fuel\n";
                //fuelLevelGood stay false.
            } else if (fuelLevel >= 10000){
                fuelStatusMsg.innerHTML = `Fuel level high enough for launch`;
                fuelLevelGood = true;
                alertMessage += "fuel good\n";
            }
        }
        
        //cargo level checks
        if (validCargoLevel){
            if (validCargoLevel === "Empty") {
                alertMessage += "Cargo level entry required\n";
            } else if (validCargoLevel === "Not a Number") {
                alertMessage += "Rockets don't carry words\n";
            } else if (cargoLevel > 10000) {
                cargoStatusMsg.innerHTML = `Cargo mass too heavy for launch\n`;
                alertMessage += "too high weight\n";
                //fuelLevelGood stay false.
            } else if (cargoLevel <= 10000){
                cargoStatusMsg.innerHTML = `Cargo mass low enough for launch\n`;
                cargoLevelGood = true;
                alertMessage += "cargo good\n";
            }
        }
        //set bool to false to confirm all values are good.
        if (pilotGood && coPilotGood && fuelLevelGood && cargoLevelGood) {
            valuesNeedChecking = false;
            alertMessage += "all values clear\n"
        }
        
    //end of valuesneedchecking conditional.     
    }


    /* final updates:
    if valuesNeedChecking = false, launch is good to go. 
    see line 125 
    might be able to get away with just "else" but prefer to do explicit check.*/
    if (!(valuesNeedChecking)) {
        launchStatusHeader.style.color = "green";
        launchStatusHeader.innerHTML = "Shuttle is Ready for Launch";
        alertMessage += "all good to launch\n";
    } else if (cargoLevelGood === false || fuelLevelGood === false) {
        launchStatusHeader.innerHTML = "Shuttle Not Ready for Launch"; 
        launchStatusHeader.style.color = "red";
        list.style = "visibility: visibile";
    }
   /*  if (alertMessage.length > 0){
        alert(alertMessage);
    } */
    
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    
     return planetsReturned.json();
 }
 
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;