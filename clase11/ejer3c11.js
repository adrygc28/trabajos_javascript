//1 IMPORTAR LIBRERIA
const prompt = require('prompt-sync')();

//2 ENTRADA DE DATOS
// le pedimos al usuario el numero hasta el cual vamos a contar
// Usamos parseInt (Entero) porque los conteos son siempre numeros enteros
let limite = parseInt(prompt('Ingrese un numero entero positivo hasta el cual contar: '));

//3 PROCESO LOGICO (Ciclo for)
// El ciclo for tiene tres partes importantes:
// a. Inicializacion: let i = 1;  -> Creamos la variable 'i' y le damos el valor inicial de 1
// b. Condicion: i <= limite;     -> Mientras 'i' sea menor o igual al 'limite' ingresado por el usuario, el ciclo seguira ejecutandose
// c. Incremento: i++             -> Al final de cada vuelta del ciclo, aumentamos el valor de 'i' en 1 (equivalente a i = i + 1)
for (let i = 1; i <= limite; i++) {
    // 4 CODIGO A REPETIR
    // Todo lo que escribams dentro de las llaves {} se va ejecutar una y otra vez hasta que la condicion deje de cumplirse
    // en cada vuelta del ciclo, 'i' tomara un valor diferente (1, luego 2, luego 3, etc hasta llegar al limite)
    // Dentro del ciclo, mostramos el valor actual de 'i'
    console.log("Contando: " + i);
}
