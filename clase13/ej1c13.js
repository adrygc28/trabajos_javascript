const prompt = require('prompt-sync')();

function calcularAreaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
}

console.log("EJERCICIO 1 : Cálculo del área de un triángulo");

let baseUsuario = parseFloat(prompt("Ingrese la base del triángulo: "));
let alturaUsuario = parseFloat(prompt("Ingrese la altura del triángulo: "));    

let resultado = calcularAreaTriangulo(baseUsuario, alturaUsuario);
console.log(`El área del triángulo es: ${resultado}`);

