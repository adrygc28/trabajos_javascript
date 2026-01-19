const prompt = require('prompt-sync')();

function esPar(numero) {

    let mensaje;

    if (numero % 2 === 0) {

        mensaje = "El número " + numero + " es par.";

    } else {

        mensaje = "El número " + numero + " es impar.";

    }

    return mensaje;

}

console.log("EJERCICIO 4 : Determinar si un número es par o impar");

let numeroUsuario = parseInt(prompt("Ingrese un número entero: "));

console.log("El numero ingresado es: " + numeroUsuario + ". " + esPar(numeroUsuario));

