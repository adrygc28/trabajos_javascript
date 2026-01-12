const prompt = require('prompt-sync')();

console.log("=== Calculadora de IMC (Índice de Masa Corporal) ===");

// 1 ENTRADA DE DATOS
let peso = parseFloat(prompt("Por favor, ingresa tu peso en kilogramos (kg): "));
let altura = parseFloat(prompt("Por favor, ingresa tu altura en metros (m): "));

// 2 PROCESAMIENTO DE DATOS
// Calculamos el IMC usando la formula: IMC = peso / (altura * altura)
let imc = peso / (altura * altura);

// 3 SALIDA DE RESULTADOS
console.log("Tu Índice de Masa Corporal (IMC) es: " + imc);

