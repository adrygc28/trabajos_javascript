const prompt = require('prompt-sync')();

const calcularTotalConDescuento = (cantidad, precio) => {
    
    let total = cantidad * precio;
    
    if (cantidad > 5) {
        return total * 0.90;
    }
    
    return total;
};

let cantidadProd = parseInt(prompt("Cantidad comprada: "));
let precioUnit = parseFloat(prompt("Precio unitario: "));

console.log("Total a pagar: " + calcularTotalConDescuento(cantidadProd, precioUnit));
