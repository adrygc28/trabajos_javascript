// 1 DECLARACION

let numeroA = 5;
let numeroB = 20;

// 2 LOGICA CON OPERADORES
//Pregunta es A mayor que 10? .. es B mayor que 10?
// Ambas partes deben seer verdaderas para que el resultado final sea verdadero
let resultadoComparacion = (numeroA > 10) && (numeroB > 10);

// 3 MOSTRAR RESULTADO
console.log("¿Ambos números son mayores que 10? " + resultadoComparacion);

// Extra: si quisieramos mostrar un mensaje mas lindo:

//if (resultadoComparacion) {
  //  console.log("Sí, ambos números (" + numeroA + " y " + numeroB + ") son mayores que 10.");
//} else {
  //  console.log("No, al menos uno de los números (" + numeroA + " y " + numeroB + ") no es mayor que 10.");
//}