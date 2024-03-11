// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form1 = document.getElementById("formSubmit");

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    });

    
    let pilotInput = document.getElementById("pilotName");

    let copilotInput = document.querySelector("input[name='copilotName']");

    let fuelInput = document.querySelector("input[name='fuelLevel']");

    let cargoInput = document.querySelector("input[name='cargoMass']");

    let listItems = document.getElementById("faultyItems");
    
    form1.addEventListener("click", function(event){
        event.preventDefault();
        

       formSubmission(document, listItems, pilotInput.value, copilotInput.value, fuelInput.value, cargoInput.value);
        return;
    });
 });