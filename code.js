function Check(){

    //Grab form values

    let weight = document.getElementById('weight').value;
    let beer = document.getElementById('beers').value;
    let wine = document.getElementById('wine').value;
    let liquor = document.getElementById('liquor').value;
    let hours = document.getElementById('hours').value;

    //Check if all are valid

    if(weight >= 60 && (beer && wine && liquor && hours >= 0))
        Calculate(weight, beer, wine, liquor, hours);
}

function Calculate(weight, beer, wine, liquor, hours){

    //Multiply form values by ounces

    beer *= 0.54;
    wine *= 0.6;
    liquor *= 0.6;

    //Sum of result multiplied by average alcohol consumption rate

    let consumptionRate = (beer + wine + liquor) * 7.5;

    //Calculate bac determined by weight

    let weightBAC = consumptionRate / weight;

    //Subtract BAC determined by time since last drink

    let result = weightBAC - hours * 0.015;

    //Round to 3 decimals

    result = result.toFixed(3);

    // Append to end of form

    $("#output").text("Your BAC is ").append(result);

    //Change value of slider

    document.getElementById('slider').setAttribute('value', result);

}