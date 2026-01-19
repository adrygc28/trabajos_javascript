const prompt = require('prompt-sync')();

let numlimite = parseInt(prompt("Ingrese un número límite positivo: "));

let contadorImpares = 0; 

for (let i = 0; i <= numlimite; i++) {
    if (i % 2 !== 0) {
        contadorImpares++;
    }
}

console.log("La cantidad de números impares desde 0 y " + numlimite + " es: " + contadorImpares);

