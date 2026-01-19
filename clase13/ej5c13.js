const prompt = requiere ('prompt-sync')();

const conectarNombres = function(nombre, apellido) {

    return nombre + " " + apellido;
}

console.log("EJERCICIO 5 : Conectar nombre y apellido");

let nombreUsuario = prompt("Ingrese su nombre: ");
let apellidoUsuario = prompt("Ingrese su apellido: ");

console.log("Su nombre completo es: " + conectarNombres(nombreUsuario, apellidoUsuario));

