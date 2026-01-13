// 1 IMPORTAR LIBRERIA
const prompt = require('prompt-sync')();

// 2 GENERACION DE NUMERO SECRETO (MAQUINA DE AZAR)
// Aqui usamos Math.random() para generar un numero aleatorio entre 0 y 1 (con decimales)
// Luego multiplicamos por 10 para escalar el rango a 0-100
// Finalmente usamos Math.floor() para redondear hacia abajo y obtener un entero
// Sumamos 1 para que el rango sea de 1 a 100 en lugar de 0 a 99
let numeroSecreto = Math.floor(Math.random() * 10) + 1; // Math.floor redondea hacia abajo y +1 para incluir el 10

console.log("He generado un numero secreto del 1 al 10!, tienes 3 intentos: " + numeroSecreto); 

// 3 BANDERA (FLAG) DE CONTROL
// Creamos una variable para llevar el control de si el usuario adivino o no
// Inicia en false, y si adivina se cambia a true
let adivino = false;

// 4 PROCESO LOGICO (Ciclo for)
// Usamos un ciclo for para dar al usuario 3 intentos
for (let intento = 1; intento <= 3; intento++) {
    // 5 ENTRADA DE DATOS
    // Pedimos al usuario que ingrese su intento
    let intentoUsuario = parseInt(prompt('Intento ' + intento + ': Ingrese su numero (1-10): '));
    // 6 VERIFICACION DEL INTENTO (Condicional if)
    if (intentoUsuario === numeroSecreto) {
        console.log("Felicidades! Adivinaste el numero secreto: " + numeroSecreto);
        adivino = true; // Cambiamos la bandera a true si adivina
        break; // Salimos del ciclo ya que adivino
    } else {
        console.log("Numero incorrecto. Intenta de nuevo.");
    }
}

if (!adivino) {
    console.log("Lo siento, no adivinaste el numero secreto. Era: " + numeroSecreto);
}