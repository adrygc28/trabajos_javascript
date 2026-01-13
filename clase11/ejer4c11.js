// 1 IMPORTAR LIBRERIA
const prompt = require('prompt-sync')();

// 2 ENTRADA DE DATOS
// Pedimos un numero al usuario
//Usamos parseInt Por que el concepto de PAR/IMPAR se aplica a numeros enteros
let numero = parseInt(prompt('Ingrese un numero entero para verificar si es par o impar: '));

// 3 PROCESO LOGICO (Condicional if/else
// Verificamos si el numero es par o impar usando el operador modulo (%)
// El operador modulo (%) devuelve el resto de la division entre dos numeros
// Si un numero es divisible por 2 (es decir, el resto de la division entre el numero y 2 es 0), entonces es par
// Si no, es impar
    if (numero % 2 === 0) {
        console.log("El numero " + numero + " es par.");
    } else {
        console.log("El numero " + numero + " es impar.");
    }

    /* -- BONUS: VERSION TERNARIA --
    El if ternario es un atajo para escibir menos codigo
    La estructura es: condicion ? valor_si_verdadero : valor_si_falso
    En este caso, si la condicion (numero % 2 === 0) es verdadera, se asigna "par" a la variable resultado
    Si es falsa, se asigna "impar"
    Luego mostramos el resultado
    */
    //let resultado = (numero % 2 === 0) ? "par" : "impar";
   // console.log("El numero " + numero + " es " + resultado + ".");