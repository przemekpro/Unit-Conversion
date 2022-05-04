function getVal() {
    let val = document.getElementById("number").value
    const number = val > 0 ? val : (val*(-1))
    

    // Length (Meter/Feet)
    let metersToFeet = (number * 3.280839895).toFixed(3)
    let feetToMeters = (number / 3.280839895).toFixed(3)
    
    document.getElementById("calculate-Ln").textContent = 
    `${number} meters = ${metersToFeet} feet | ${number} feet = ${feetToMeters} meters`


    // Volume (Liters/Gallons)
    let littersToGallons = (number * 0.26417).toFixed(3)
    let gallonsToLitters = (number / 0.26417).toFixed(3)
    
    document.getElementById("calculate-Vo").textContent =
    `${number} litters = ${littersToGallons} gallons | ${number} gallons = ${gallonsToLitters} litters`


    // Mass (Kilograms/Pounds)
    let kilosToPounds = (number * 2.2046).toFixed(3)
    let poundsToKilos = (number / 2.2046).toFixed(3)
    
    document.getElementById("calculate-Ms").textContent =
    `${number} kilos = ${kilosToPounds} pounds | ${number} pounds = ${poundsToKilos} kilos`
}



