
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function busquedaBinaria(array, elemento) {

    let inicio = 0
    let fin = array.length - 1

    while (inicio <= fin) {

        let mitad = Math.floor((inicio + fin) / 2)

        if (array[mitad] === elemento) {
            return mitad 
        }

        if (array[mitad] < elemento) {

            inicio = mitad + 1
        } else {

            fin = mitad - 1
        }
    }

    return -1
}

console.log("Posición del 1:", busquedaBinaria(list, 1))
console.log("Posición del 5:", busquedaBinaria(list, 5))
console.log("Posición del 6:", busquedaBinaria(list, 6))
console.log("Posición del 9:", busquedaBinaria(list, 9))
console.log("Posición del 11:", busquedaBinaria(list, 11))
// Resultado esperado:
// Posición del 1: 0
// Posición del 5: 4
// Posición del 6: 5
// Posición del 9: 8
// Posición del 11: 10
