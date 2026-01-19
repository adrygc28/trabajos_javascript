let matriz = [];

let contador = 1;

for (let i = 0; i < 10; i++) {

    let fila = [];

    for (let j = 0; j < 10; j++) {
        fila.push(contador);
        contador++;
    }
    matriz.push(fila);
}

function sumarRojos(matriz) {
    let suma = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i === j) {
                suma += matriz[i][j];
            }
        }
    }
    return suma;
}

function sumaVerdes(matriz) {
    let suma = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i + j === matriz[i].length - 1) {
                suma += matriz[i][j];
            }
        }
    }
    return suma;
}
console.log("Suma diagonal roja generada: " + sumarRojos(matriz));
console.log("Suma diagonal verde generada: " + sumaVerdes(matriz));