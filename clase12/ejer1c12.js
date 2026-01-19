const prompt = require('prompt-sync')();

//1. ACUMULADOR
// Arrancamos la variable suma en 0. Es donde iremos guardando el total.

let suma = 0;

// 2. VARIABLE DE CONTROL
// Inicializamos esta variable en 0 (o cualquier positivo) solo para que el while nos deje pasar la primera vez.
// si no le damos ub valor inicial, la condicion de abajo daria error o falso de entrada.

let numeroIngresado = 0;

// 3. BUCLE WHILE
// Mientras el numero ingresado sea mayor o igual a 0, seguimos pidiendo numeros.

while (numeroIngresado >= 0) {

    // 4. PEDIMOS UN NUMERO
    // Pedimos un numero al usuario 
    // Usamos parseFloat por si quiere sumar decimales (ej 10.50)
    numeroIngresado = parseFloat(prompt("Ingrese un número (negativo para salir): "));

    // 5. EL FILTRO DE SEGURIDAD

    if (numeroIngresado >= 0) {
        // Si el numero es positivo (o cero), lo sumamos al acumulador
        suma += numeroIngresado; // suma = suma + numeroIngresado
    }

    // Si el numero es negativo, no hacemos nada (no lo sumamos)
    // El while volvera a evaluar la condicion y saldra del bucle.  
}

// 6. MOSTRAMOS EL RESULTADO
console.log("La suma total de los números ingresados es: " + suma);