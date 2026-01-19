let list = [12, 3, 5, 7, 1, 22, 47, 100];

function bubbleSort(array) {
    let n = array.length

    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - i - 1; j++) {

            if (array[j] > array[j + 1]) {

                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
 
    return array
}

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

let listaOrdenada = bubbleSort(list)
console.log("Lista ordenada:", listaOrdenada)

console.log("Posición del 12:", busquedaBinaria(listaOrdenada, 12))
console.log("Posición del 5:", busquedaBinaria(listaOrdenada, 5))
console.log("Posición del 22:", busquedaBinaria(listaOrdenada, 22))
console.log("Posición del 100:", busquedaBinaria(listaOrdenada, 100))
// Resultado esperado:
// Lista ordenada: [1, 3, 5, 7, 12, 22, 47, 100]
// Posición del 12: 4
// Posición del 5: 2
// Posición del 22: 5
// Posición del 100: 7
