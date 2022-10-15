let inputField = document.querySelector("#user-input")
let lengthField = document.querySelector("#length")
let volumeField = document.querySelector("#volume")
let massField = document.querySelector("#mass")
let userInput = 0
let meter=0
let feet=0
let liter=0
let kilogram=0
let pounds=0

let button = document.querySelector("#btn")
button.addEventListener('click',function () {
    userInput = Number(inputField.value) 
    lengthCon(userInput)
    volumeCon(userInput)
    massCon(userInput)
})

function lengthCon(num){
    meter = (num/3.2808).toFixed(3)
    feet = (num*3.2808).toFixed(3)
    lengthField.textContent = `${userInput} meters = ${feet} feet | ${userInput} feet  = ${meter} meters`
}

function volumeCon(num){
    liter = (num/0.264172).toFixed(3)
    gallon = (num*0.2642).toFixed(3)
    volumeField.textContent = `${userInput} liters = ${gallon} gallons | ${userInput} gallons = ${liter} liters`
}

function massCon(num){
    kilogram = (num/2.204).toFixed(3)
    pounds = (num*2.20462).toFixed(3)
    massField.textContent = `${userInput} kilos = ${pounds} pounds | ${userInput} pounds = ${kilogram} kilos`
}