// Write your JavaScript code here!


window.addEventListener("load", function() {
       
        let form1 = document.getElementById("formSubmit")

    form1.addEventListener("click", function(event){
        event.preventDefault();
        
        let pilotInput = document.getElementById("pilotName");

        let copilotInput = document.querySelector("input[name='copilotName']");

        let fuelInput = document.querySelector("input[name='fuelLevel']");

        let cargoInput = document.querySelector("input[name='cargoMass']");

        let listItems = document.getElementById("faultyItems");
        formSubmission(document, listItems, pilotInput, copilotInput, fuelInput, cargoInput);
        
    })
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    })
    
 });