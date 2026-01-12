const promt = require("prompt-sync")();

//Ejercicio 1 - Declarar dos variables: Nuestra tarea será declarar dos variables: una
//con el nombre edad y la otra con el nombre peso. Después deberás asignarle un
//valor.

let edad = 25;
let peso = 63;

//Ejercicio 2 – Usando las variables: Escribe un programa que pida al usuario que
//ingrese su nombre, su edad y su peso, y luego muestre un mensaje
//personalizado que incluya toda esta información.

//1. Pedir al usuario que ingrese su nombre, edad y peso
let nombreUsuario = promt("Por favor, ingresa tu nombre: ");

// Usamos parseInt y parseFloat porque edad y peso son numericos
let edadUsuario = parseInt(promt("Por favor, ingresa tu edad: "));
let pesoUsuario = parseFloat(promt("Por favor, ingresa tu peso en kg: "));

//2. Mostrar un mensaje personalizado con la información ingresada
console.log("Hola " + nombreUsuario + ", tienes " + edadUsuario + " años y pesas " + pesoUsuario + " kg.");
