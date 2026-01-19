// DEFINICION DE LA MATRIZ (TABLA DE DATOS)

let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];

let sumaCondicional = 0;

for (let i = 0; i < matriz.length; i++) {   
    for (let j = 0; j < matriz[i].length; j++) {

        let valorActual = matriz[i][j];

        if (valorActual >= 10 && valorActual < 1000) {
            sumaCondicional += valorActual;
        }
    }
}
console.log("La suma de los elementos entre 10 y 1000 es: " + sumaCondicional);
