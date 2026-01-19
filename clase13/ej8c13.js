const prompt = require('prompt-sync')();

const convertirCelsiusAFahrenheit = function(celsius) {

    let Fahrenheit = (celsius * 9/5) + 32;

    return Fahrenheit;

}

console.log("EJERCICIO 8 : Convertir Celsius a Fahrenheit");

let gradosC = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

let resultado = convertirCelsiusAFahrenheit(gradosC);

console.log(gradosC + "°C son " + resultado + "°F.");

