let palabras = ['hola', 'mundo', 'javascript'];

let frases = palabras.map(function(palabra) {
    return '¡' + palabra + '!';
});

console.log(frases);
// Salida: ['¡hola!', '¡mundo!', '¡javascript!']
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
