let numeros = [1, 2, 3, 4, 5, 6];

let pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});

console.log(pares);
// Salida: [2, 4, 6]
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
