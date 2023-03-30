let lengthConversions = document.getElementById("length-conversions")
let volumeConversions = document.getElementById("volume-conversions")
let massConversions = document.getElementById("mass-conversions")
let convertButton = document.getElementById("convert-btn")
let number = document.getElementById("number")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertButton.addEventListener("click", function(){
    let baseValue = number.value

    lengthConversions.textContent = `${baseValue} metres = ${(baseValue*meterToFeet).toFixed(2)} feet | ${baseValue} feet = ${(baseValue/meterToFeet).toFixed(2)} metres`
    volumeConversions.textContent = `${baseValue} litres = ${(baseValue*literToGallon).toFixed(2)} gallons | ${baseValue} gallons = ${(baseValue/literToGallon).toFixed(2)} litres`
    massConversions.textContent = `${baseValue} kilos = ${(baseValue*kiloToPound).toFixed(2)} pounds | ${baseValue} pounds = ${(baseValue/kiloToPound).toFixed(2)} kilos`
})
