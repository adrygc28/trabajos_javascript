const prompt = require('prompt-sync')();

function convertirHorasAMinutos(horas) {

    return horas * 60;

}

console.log("EJERCICIO 6 : Convertir horas a minutos");

let horasUsuario = parseFloat(prompt("Ingrese la cantidad de horas a convertir: "));

console.log(horasUsuario + " horas son " + convertirHorasAMinutos(horasUsuario) + " minutos.");