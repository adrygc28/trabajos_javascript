const prompt = require('prompt-sync')();

console.log("==== Calculadora de descuentos ====");

// 1 ENTRADA DE DATOS
let precioOriginal = parseFloat(prompt("Por favor, ingresa el precio original del producto: "));
let porcentajeDescuento = parseFloat(prompt("Por favor, ingresa el porcentaje de descuento (sin el símbolo %): "));

// 2 PROCESAMIENTO DE DATOS
// Paso 1 Calcular cuanto me ahorre
let descuento = (precioOriginal * porcentajeDescuento) / 100;

// Paso 2 Calcular el precio final
let precioFinal = precioOriginal - descuento;

// 3 SALIDA DE RESULTADOS
console.log("El monto descontado es: " +descuento);
console.log("El precio final con descuento es: " +precioFinal);
