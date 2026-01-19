let numeros = [2, 4, 6, 8];

let cuadrados = numeros.map(function(numero) {
    return numero * numero;
});

console.log(cuadrados);
// Salida: [4, 16, 36, 64]
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
