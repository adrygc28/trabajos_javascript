let horaActual = 18;

function mostrarSaludo(){

    if (horaActual < 12) {

        console.log("Buenos días");

    } else if (horaActual < 18) {

        console.log("Buenas tardes");

    } else {

        console.log("Buenas noches");

    }

}

console.log("EJERCICIO 7 : Saludo según la hora del día");
console.log("Hora actual: " + horaActual);

mostrarSaludo();