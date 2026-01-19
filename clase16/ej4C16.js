
let numeros = [1, 2, 3, 4];

let sumaTotal = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
});

console.log(sumaTotal);
// Salida: 10
// El método reduce() ejecuta una función reductora sobre cada elemento del array, resultando en un único valor.
