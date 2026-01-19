const prompt = require('prompt-sync')();

// EL ARRAY VACIO (LISTA DE COMPRAS)
let notas = [];

let cantidadEstudiantes = 5;

console.log("Cargaremos las notas de " + cantidadEstudiantes + " estudiantes:");
for (let i = 0; i < cantidadEstudiantes; i++) {
    notas[i] = parseFloat(prompt("Ingrese la nota del estudiante " + (i + 1) + ": "));
}
console.log(" ===== Notas ingresadas ===== ");

console.log(notas);

