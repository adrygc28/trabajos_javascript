let palabras = ['sol', 'luna', 'estrella'];

let totalLetras = palabras.reduce(function(acumulador, palabra) {
    return acumulador + palabra.length;
}, 0); 

console.log(totalLetras);
// Salida: 15
// El método reduce() ejecuta una función reductora sobre cada elemento del array, resultando en un único valor.
