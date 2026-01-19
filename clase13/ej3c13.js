
let saludoGlobal = "Hola desde mi oficina";

function mostrarSaludo() {

    let saludoLocal = "Hola desde la oficina Local";

    console.log("Adentro de la función veo: " + saludoGlobal);
    console.log("Adentro de la función veo: " + saludoLocal);
}

console.log("EJERCICIO 3 : Scope de Variables");

mostrarSaludo();

console.log("Afuera de la función veo: " + saludoGlobal);
//console.log("Afuera de la función veo: " + saludoLocal); // Esto generará un error
// porque saludoLocal no está definido en este ámbito

// Nota: La última línea generará un error intencional para demostrar el scope de variables.