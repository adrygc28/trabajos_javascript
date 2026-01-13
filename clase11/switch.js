//determinar que dia de la semana es segun un numero

//1 - IMPORTACION DE LA LIBRERRIA
const prompt = require('prompt-sync')();

//2 - ENTRADA DE DATOS 
//pedimos el numero, usamos parseInt porque el switch compara valores exactos.

let numeroDia = parseInt(prompt('Ingrese un numero del 1 al 7 para saber el dia de la semana: '));

//3 - ESTRUCTURA SWITCH
// el switch evalua la variable que se pone entre parentesis (numeroDia).
//luego, busca abajo el caso (case) que coincida con el valor de la variable. (numeroDia).

switch (numeroDia) {
    // Si numeroDia es igual a 1, se ejecuta el codigo debajo del case 1:
    case 1:
        console.log('Lunes');
        break; // El freno de mano : importante!!!! le dice al programa: Hey ya encontre lo que buscaba, no sigas buscando.
        // Si numeroDia es igual a 2, se ejecuta el codigo debajo del case 2:
    case 2:
        console.log('Martes');
        break; // Si olvidas el break el programa seguira ejecutando los demas casos o lo que se llama efecto cascada
    case 3:
        console.log('Miercoles');
        break;      
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;

    // El default es como el else del if. Si no se cumple ningun case, se ejecuta el codigo del default.
    default:
        console.log('Numero invalido. Por favor ingrese un numero del 1 al 7.');
        //en el default no es necesario el break porque es el ultimo bloque de codigo. Pero igual lo podemos colocar.
        break;
}