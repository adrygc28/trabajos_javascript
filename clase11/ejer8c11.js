// 1 IMPORTAR LIBRERIA
const prompt = require('prompt-sync')();

// 2 ENTRADA DE DATOS
// Pedimos el numero base (ej: si el usuario pone 5, buscaremos : 5, 10, 15, 20, etc)
//Usamos parseInt para trabajar con numeros enteros
let numeroBase = parseInt(prompt('Ingrese un numero entero positivo para ver sus multiplos hasta 100: '));

console.log("Multiplos de " + numeroBase + " hasta 100:");

// 3 PROCESO LOGICO (Ciclo for)
// Vamos a resivar todos los numeros del 1 al 100 uno por uno
// Imaginando que es un escaner que va revisando cada numero
for (let i = 1; i <= 100; i++) {

    // 4 FILTRO DE MULTIPLOS (IF DENTRO DEL FOR)
    // En cada vuelta del ciclo, preguntamos si el numero actual (i) es multiplo del numero base
    // Un numero es multiplo de otro si al dividirlos el resto es 0
    if (i % numeroBase === 0) {
        // Si es multiplo (resto 0) lo mostramos
        console.log("Multiplo encontrado: " + i);
    }
}