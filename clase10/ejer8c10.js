const prompt = require('prompt-sync')();

//1 ENTRADA
// Pedimos los grados celsius. usamos parseFloat para permitir decimales
let gradosCelsius = parseFloat(prompt("Por favor, ingresa la temperatura en grados Celsius: "));

//2 PROCESO (formula de conversion)
let gradosFahrenheit = (gradosCelsius * 9/5) + 32;

//3 SALIDA
console.log(gradosCelsius + " grados Celsius son " + gradosFahrenheit + " grados Fahrenheit.");
