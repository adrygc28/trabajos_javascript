// 1 IMPORTAR LIBRERIA
const prompt = require('prompt-sync')();

// 2 ENTRADA DE DATOS
// Pedimos los numeros, usamos parseFloat para que la calculadora sirva con decimales
let numero1 = parseFloat(prompt('Ingrese el primer numero: '));
let numero2 = parseFloat(prompt('Ingrese el segundo numero: '));

// Pedimos la operacion y usamos toLowerCase para evitar errores de mayusculas/minusculas
// Asi el usuario puede ingresar "SUMA", "suma", "Suma", etc. el switch lo normaliza a minusculas y entendera todo igual
let operacion = prompt('Ingrese la operacion a realizar (suma, resta, multiplicacion, division): ').toLowerCase();

// 3 VARIABLE VACIA (RESERVA DE ESPACIO)
// Creamos la variable resultado sin valor aun
// Es como dejar una caja vacia para llenarla despues con la respuesta
// Usamos let porque el valor va cambiar dependiendo de la operacion
let resultado;

// 4 PROCESO LOGICO (Estructura switch)
// Usamos switch para elegir la operacion segun lo que ingreso el usuario
switch (operacion) {
    case 'suma':
        resultado = numero1 + numero2;
        break;
    case 'resta':
        resultado = numero1 - numero2;
        break;
    case 'multiplicacion':
        resultado = numero1 * numero2;
        break;
    case 'division':
        // Validacion para evitar division por cero
        // En matematicas no se puede dividir por cero, asi que chequeamos ese caso
        // Antes de calcular preguntamos si el segundo numero es distinto de cero
        if (numero2 !== 0) {
            //Si el usuario intento dividir por un numero distinto de cero, hacemos la division normalmente
            resultado = numero1 / numero2;
        } else {
            // Si el usuario intento dividir por cero, mostramos un mensaje de error
            console.log("Error: No se puede dividir por cero.");
            resultado = null; // Indicamos que no hay resultado válido
        }
        break;
    default:
        console.log("Operación no válida.");
}