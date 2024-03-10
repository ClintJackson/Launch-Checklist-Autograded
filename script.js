// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let submitButton = document.getElementById("formSubmit");
    
    let pilotName = document.getElementById("pilotName");

        let copilotName = document.querySelector("input[name= 'copilotName']");
        
        let fuelLevel = document.querySelector("input[name= 'fuelLevel']");
        let cargoMass = document.querySelector("input[name= 'cargoMass']");

        let faultyItems = document.getElementById("faultyItems")

    submitButton.addEventListener("click", event =>{  
        
        event.preventDefault();

        formSubmission(document, faultyItems, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value); 
       

    });
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });