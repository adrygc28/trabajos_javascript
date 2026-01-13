//Ejemplo: verificar sis una persona es mayor de edad usando if ternario

//1 - IMPORTACION DE LA LIBRERRIA
const prompt = require('prompt-sync')();

//2 - ENTRADA DE DATOS : INGRESAR LA EDAD
let edad = parseInt(prompt('Ingrese su edad: '));

//3 - LOGICA DEL IF TERNARIO
// if ternario tiene una forma abreviada en solo una linea.
//Estructura: (condicion) ? valor si es verdadero : valor si es falso;
//El signo de interrogacion (?) actua como el "if" (Se comple esto?)
// El signo dos puntos (:) actua como el "else" (Si no se cumple, haz esto otro)

let mensaje = (edad >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad';

//4 - SALIDA DE DATOS : MOSTRAR EL MENSAJE

console.log(mensaje);
