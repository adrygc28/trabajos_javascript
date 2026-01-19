
let frases = [
    "El clima es MALO hoy",
    "Este libro es muy MALO",
    "El servicio aquí es MALO"
];

function procesarFrases(frases) {

    let frasesModificadas = frases.map(frase => {

        let fraseMinuscula = frase.toLowerCase()

        let palabras = fraseMinuscula.split(" ")

        let palabrasNuevas = palabras.map(palabra => {

            if (palabra === "malo") {
 
                return "bueno"

            } else {

                return palabra
            }
        })

        return palabrasNuevas.join(" ")
    })

    return frasesModificadas
}

console.log(procesarFrases(frases))
// Resultado esperado:
// [
//     "el clima es bueno hoy",
//     "este libro es muy bueno",
//     "el servicio aquí es bueno"
// ]
