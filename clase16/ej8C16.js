let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

let encontrado = nombres.find(function(nombre) {
    return nombre === 'Laura';
});

console.log(encontrado);
// Salida: Laura
// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
