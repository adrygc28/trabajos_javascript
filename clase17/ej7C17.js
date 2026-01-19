
let entrada = "Rosa, Tulipán, Orquídea, Lirio";

function gestionarFloreria(entrada) {

    let flores = entrada.split(",")

    let floresLimpias = flores.map(flor => flor.trim())

    if (floresLimpias.includes("Margarita")) {

        floresLimpias.push("Azucena")
    }

    let floresReemplazadas = floresLimpias.map(flor => {
        if (flor === "Orquídea") {
            return "Clavel"
        } else {
            return flor
        }
    })

    let indiceGirasol = floresReemplazadas.indexOf("Girasol")

    if (indiceGirasol === -1) {

        floresReemplazadas.unshift("Girasol")
    }

    let floresOrdenadas = floresReemplazadas.sort().join(".")

    console.log("Flores finales:", floresOrdenadas)
}

gestionarFloreria(entrada)
// Resultado esperado:
// Flores finales: Azucena.Girasol.Clavel.Lirio.Rosa.Tulipán
