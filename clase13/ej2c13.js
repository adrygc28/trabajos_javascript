const prompt = require('prompt-sync')();

const encontrarMayor = function(num1, num2) {

    if (num1 > num2) {

        return num1;

    } else  if (num2 > num1) {

        return num2;

    } else {

        return null; // Indica que son iguales
    }   
}

console.log("EJERCICIO 2 : Encontrar el número mayor entre dos números");

let n1 = parseFloat(prompt("Ingrese el primer número: "));
let n2 = parseFloat(prompt("Ingrese el segundo número: "));

console.log("El número mayor es: " + encontrarMayor(n1, n2));

