let estudiante = {
    nombre: "Adriana",
    edad: 34,
    notas: [8, 10, 9, 7, 10]
}

function procesarEstudiante(estudiante) {
    
    estudiante.notas.push(9)

    estudiante.notas.shift()

    let suma = estudiante.notas.reduce((acum, nota) => acum + nota, 0)

    let promedio = suma / estudiante.notas.length

    let nombreMayusculas = estudiante.nombre.toUpperCase()

    return {
        nombre: nombreMayusculas,
        promedio: promedio
    }
}

console.log(procesarEstudiante(estudiante))
// Resultado esperado:
// {
//     nombre: "ADRIANA",
//     promedio: 9
// }
