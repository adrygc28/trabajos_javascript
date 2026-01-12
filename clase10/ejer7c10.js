// Intercambiar el contenido de dos variables
let a = 5;
let b = 10;

console.log('Antes del intercambio: a = ' + a + ', b = ' + b);

// LOGICA DEL INTERCAMBIO (metodo con variable temporal)
let temp = a; // guardamos el valor de 'a' en una variable temporal
a = b;        // asignamos el valor de 'b' a 'a'
b = temp;     // asignamos el valor guardado en 'temp' a 'b'

// MOSTRAR RESULTADO

console.log('Después del intercambio: a = ' + a + ', b = ' + b);