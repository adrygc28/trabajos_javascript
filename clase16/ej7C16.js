let nombres = ['Ana', 'Luis', 'Andrea', 'María'];

let nombresConA = nombres.filter(function(nombre) {
    return nombre[0] === 'A';
});

console.log(nombresConA);
// Salida: ['Ana', 'Andrea']
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
