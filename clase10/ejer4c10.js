// DECLARACION DE VARIABLES

let verdadero = true;   //tipo booleano
let texto = "Hola";    //tipo string (texto)
let numero = 10;       //tipo number (numero)
let nada = null;     //tipo null (valor nulo) ausencia intencional de valor

// OPERACIONES Y VALIDACIONES

// 1 Operacion matematica con 'numero'
// sumamos 5 a nuestra variable numero (10 + 5)
let resultadoMatematico = numero + 5; // resultadoMatematico ahora es 15
console.log("Resultado de la operacion matematica:", resultadoMatematico);

// 2 Concatenacion de texto con 'texto'
// agregamos una frase a nuestra variable texto
let mensajeTexto = texto + ", ¿cómo estás?"; // resultadoTexto ahora es "Hola, ¿cómo estás?"
console.log(mensajeTexto);

// 3 Verificacion de 'Verdadero'
if (verdadero === true) {
    console.log("La variable 'verdadero' es verdadera.");

}else {
    console.log("La variable 'verdadero' es falsa.");
}

// 4 Verificacion de 'Nada'
if (nada === null) {
    console.log("La variable 'nada' es nula.");
} else {
    console.log("La variable 'nada' no es nula.");
}
