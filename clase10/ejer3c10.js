const prompt = require('prompt-sync')();
 
// DECLARACION DE CONSTANTES
// Usamos CONST y Mayusculas porque son reglas fijas del sistema.
// Nadie debe poder cambiar la edad minima ni maxima mientras corre el programa

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

//ENTRADA DE DATOS
//Pedimos la edad y la convertimos a entero con parseInt
let edadUsuario = parseInt(prompt("Por favor, ingresa tu edad: "));

//PROCESAMIENTO DE DATOS (VALIDACION)
//Comparamos la edad ingresada con las constantes definidas
if (edadUsuario >= EDAD_MINIMA && edadUsuario <= EDAD_MAXIMA) {
    console.log("La edad ingresada es válida.");
} else {
    console.log("La edad ingresada no es válida. Rango permitido es de 18 a 99 años.");
}