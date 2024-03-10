// Write your JavaScript code here!

window.addEventListener("load", () => {
    const formSubmission = require("./scriptHelper");    
    
    
    let pilotInput = document.getElementById("pilotName").value;

    let copilotInput = document.querySelector("input[name='copilotName']").value;
        
    let fuelInput = document.querySelector("input[name='fuelLevel']").value;
    let cargoInput = document.querySelector("input[name='cargoMass']").value;

    let listItems = document.getElementById("faultyItems")

    let form = document.querySelector("form[data-testid=testForm]");

    form = addEventListener("submit", event =>{
        event.preventDefault();

        formSubmission(document, listItems, pilotInput, copilotInput, fuelInput, cargoInput);
    })
    
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