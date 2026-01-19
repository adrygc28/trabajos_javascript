
const prompt = require('prompt-sync')();


const calcularPrecioConIva = (precio, porcentaje) => precio + (precio * porcentaje / 100);


let precioProducto = parseFloat(prompt("Ingresa el precio del producto: "));

let porcentajeIva = parseFloat(prompt("Ingresa el porcentaje de IVA: "));

console.log("El precio final es: " + calcularPrecioConIva(precioProducto, porcentajeIva));