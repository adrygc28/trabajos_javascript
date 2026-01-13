//1 IMPORTAR LIBRERIA
const prompt = require('prompt-sync')();

//2 ENTRADA DE DATOS
// Pedimos el rango desde donde iniciar y donde terminar
// Usamos parseInt porque  vamos a recorrer estos numeros matematicamente
let inicio = parseInt(prompt('Ingrese el numero entero positivo desde donde iniciar el conteo: '));
let fin = parseInt(prompt('Ingrese el numero entero positivo hasta donde contar: '));

//3 VALIDACION DE SEGURIDAD (SANITY CHECK)
// Antes de trabajar verificamos que el rango tenga logica
if (inicio > fin) {
    // Si el inicio es mas grande que fin no tiene sentido contar
    console.log("Error: El numero inicial debe ser menor o igual al numero final.");
} else {
    //4 ELSE EL PROCESO PRINCIPAL
    // Si los datos son correctos por ejemplo inicio = 3 y fin = 7, entramos aca:
    console.log("Numeros pares entre " + inicio + " y " + fin + ":");

    // 5 CICLO FOR (RECORRIDO)
    // A) let i = inicio;  -> Creamos la variable 'i' y le damos el valor inicial de 'inicio' (NO SIEMPRE ARRANCA EN 0 o 1)
    // B) i <= fin;        -> Mientras 'i' sea menor o igual al 'fin' ingresado por el usuario, el ciclo seguira ejecutandose
    // C) i++             -> Al final de cada vuelta del ciclo, aumentamos el valor de 'i' en 1 (equivalente a i = i + 1)

    for (let i = inicio; i <= fin; i++) {
        // 6 FILTRO DE PARES (IF DENTRO DEL FOR)
        //En cada vuelta la variable cambia de valor
        //Preguntamos si el numero actual es par?
        if (i % 2 === 0) {
            //Si es Par (resto 0) lo mostramos
            // Si es impar (resto 1) no hacemos nada
        console.log("Contando: " + i);
        }
    }

}
