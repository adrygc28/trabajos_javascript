// 1 IMPORTAR LIBRERIA
const prompt = require('prompt-sync')();

// 2 ENTRADA DE DATOS
//Pedimos el numero protagonista de la tabla
//Usamos parseInt porque las tablas de multiplicar se hacen con numeros enteros
let numero = parseInt(prompt('Ingrese un numero entero positivo para ver su tabla de multiplicar: '));

// 3 ENCABEZADO -- Mostramos un titulo antes de arrancar
console.log("Tabla de multiplicar del " + numero + ":");

// 4 PROCESO LOGICO (Ciclo for)
// Definimos cuantas multiplicaciones vamos a hacer
// A) let i = 1;       -> Creamos la variable 'i' y empezamos a multiplicar por 1
// B) i <= 10;        -> Mientras 'i' sea menor o igual a 10, el ciclo seguira ejecutandose hasta llegar a 10
// C) i++             -> Al final de cada vuelta del ciclo, aumentamos el valor de 'i' en 1 (equivalente a i = i + 1)
for (let i = 1; i <= 10; i++) {

    // 5 CALCULO DE LA MULTIPLICACION
    //Multiplicamos el numero ingresado por el usuario (numero, que siempre es fijo)
    // por el contador actual (i, que va cambiando en cada vuelta del ciclo)
    let resultado = numero * i;

    // 6 MOSTRAR EL RESULTADO
    // Mostramos el resultado de la multiplicacion en formato tabla
    //conectamos las partes con el operador +
    console.log(numero + " x " + i + " = " + resultado);
}