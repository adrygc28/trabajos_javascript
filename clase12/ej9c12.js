const prompt = require('prompt-sync')();

// MATRIZ DE GASTOS

let gastos = [
    [1135, 2500, 900, 1600, 2800, 650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 500, 2560], // semana 3   
    [800, 1250, 1430, 2100, 1980, 1270, 950] // semana 4
];

console.log(" == Consultar gastos por semana ==");
let semanaConsulta = parseInt(prompt("Ingrese el número de semana a consultar (1-4): "));

let totalSemana = 0;

for (let j = 0; j < gastos[semanaConsulta - 1].length; j++) {
    totalSemana += gastos[semanaConsulta - 1][j];
}
console.log("Total de gastos en la semana " + semanaConsulta + ": " + totalSemana);

console.log(" == Consultar gastos por día de la semana ==");
let diaConsulta = parseInt(prompt("Ingrese el número de día a consultar (1-7): "));
let totalDia = 0;

for (let i = 0; i < gastos.length; i++) {
    totalDia += gastos[i][diaConsulta - 1];
}
console.log("Total de gastos en el día " + diaConsulta + ": " + totalDia);

console.log(" == Estadisticas: Record de gastos ==");
 let gastoMaximo = 0;
 let semanaMasAlta = 0;

for (let i = 0; i < gastos.length; i++) {
    let gastoSemanaActual = 0;
    for (let j = 0; j < gastos[i].length; j++) {
        gastoSemanaActual += gastos[i][j];
    }

    if (gastoSemanaActual > gastoMaximo) {
        gastoMaximo = gastoSemanaActual;
        semanaMasAlta = i + 1;
    }
}
console.log("La semana con el mayor gasto es la semana " + semanaMasAlta + " con un gasto de " + gastoMaximo);

let maxGastoDia = 0;
let diaMasCaro = 0;

for (let j = 0; j < gastos[0].length; j++) {

    let gastoDiaActual = 0;

    for (let i = 0; i < gastos.length; i++) {
        gastoDiaActual += gastos[i][j];
    }
    if (gastoDiaActual > maxGastoDia) {
        maxGastoDia = gastoDiaActual;
        diaMasCaro = j + 1;
    }
}
console.log("El día con el mayor gasto es el día " + diaMasCaro + " con un gasto de " + maxGastoDia);

