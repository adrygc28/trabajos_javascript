
let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";

function gestionarAutos(entrada) {

    let autos = entrada.split(",")

    let autosLimpios = autos.map(auto => auto.trim())

    let existeTesla = autosLimpios.includes("Tesla")

    let autosReemplazados = autosLimpios.map(auto => {
        if (auto === "Ford") {
            return "BMW"
        } else {
            return auto
        }
    })

    let indiceChevrolet = autosReemplazados.indexOf("Chevrolet")

    let autosOrdenados = autosReemplazados.sort().join(".")

    console.log("¿Existe Tesla?:", existeTesla)
    console.log("Índice de Chevrolet:", indiceChevrolet)
    console.log("Autos finales:", autosOrdenados)
}

gestionarAutos(entrada)
// Resultado esperado:
// ¿Existe Tesla?: false
// Índice de Chevrolet: 3
// Autos finales: BMW.Chevrolet.Honda.Nissan.Toyota
