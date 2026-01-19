let numeros = [5, 8, 12, 20, 3];

let mayorA10 = numeros.find(function(numero) {
    return numero > 10;
});

console.log(mayorA10);
// Salida: 12
// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
