const prompt = require('prompt-sync')();

const CONTRASENA_CORRECTA = "adry1234";

let passwordUsuario;

do {
    passwordUsuario = prompt("Ingrese la contraseña: ");

    if (passwordUsuario !== CONTRASENA_CORRECTA) {
        console.log("Contraseña incorrecta. Intente nuevamente.");
    }
} while (passwordUsuario !== CONTRASENA_CORRECTA);

console.log("¡Contraseña correcta! Acceso concedido.");