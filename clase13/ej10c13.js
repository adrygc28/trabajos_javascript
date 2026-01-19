const prompt = require('prompt-sync')();

const calcularFactorial = function(num) {

    let resultado = 1;

    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }       

    if (num < 0) {
        return "El factorial no está definido para números negativos.";
    }
    return resultado;
}

console.log("EJERCICIO 10 : Calcular el factorial de un número");

let numero = parseInt(prompt("Ingrese un número para calcular su factorial: "));

console.log("El factorial de " + numero + " es: " + calcularFactorial(numero));

