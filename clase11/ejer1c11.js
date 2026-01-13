//1 IMPORTAR LA LIBRERIA
const prompt = require('prompt-sync')();

//2 ENTRADA DE DATOS (Input)
// Aqui ocurren 3 pasos en una sola linea
// a. prompt(...): Muestra el mensaje y espera que el usuario escriba
// b. parseFloat(...): Convierte el texto ingresado por el usuario en un numero entero
// c. let numero = : Guarda ese valor final en la variable 'numero'

let numero = parseFloat(prompt('Ingrese un numero para analizar: '));

//3 PROCESO LOGICO (condicionales)
//Primer filtro: Preguntas Si el numero escrito es mayor a 0
if (numero > 0) {
    //si la respuesta es SI (verdadero) entramos aqui e ignoramos el resto.
    console.log('El numero es positivo');
//Segundo filtro: si la primera pregunta fue NO (falso), preguntamos: el numero es menor a 0?
} else if (numero < 0) {
    //si la respuesta es SI (verdadero) entramos aqui.
    console.log('El numero es negativo');
    //Tercer filtro: (Descarte/Default) si las dos preguntas anteriores fueron NO (falso), entramos aqui.
} else {
    console.log('El numero es cero');
}