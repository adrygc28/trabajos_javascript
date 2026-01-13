//1 IMPORTAR LA LIBRERIA
const prompt = require('prompt-sync')();

// Mostramos las opciones al usuario para guiarlo
console.log(" Colores disponibles: rojo, amarillo y verde");

//2 ENTRADA DE DATOS Y NORMALIZACION
//Aqui se usa un truco muy util: .tolowerCase() que convierte cualquier texto a minusculas
// Asi nos aseguramos que el programa entienda el color sin importar si el usuario uso mayusculas o minusculas
let color = prompt('Ingrese un color de semaforo (rojo, amarillo, verde): ').toLowerCase();

//3 PROCESO LOGICO (Estructura switch)
// El switch toma la variable 'color' y la compara con cada case
switch (color) {
    // Caso 1: si color es 'rojo'
    case 'rojo':
        console.log('El semaforo esta en ROJO: Detenerse');
        // Importante el break para evitar efecto cascada. 
        // Le dice al programa  que se detenga aqui y no siga evaluando los demas casos (ya encontro lo que buscaba)
        // si no se pone el break, el programa seguira ejecutando los demas casos.
        break;
    // Caso 2: si color es 'amarillo'
    case 'amarillo':
        console.log('El semaforo esta en AMARILLO: Precaucion');
        break;
    // Caso 3: si color es 'verde'
    case 'verde':
        console.log('El semaforo esta en VERDE: Avanzar');
        break;
    // Default: si el color no es ninguno de los anteriores
    default:
        console.log('Color no reconocido. Por favor ingrese rojo, amarillo o verde.');
        break;
}