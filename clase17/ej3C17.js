
let productos = [
    { nombre: "Leche", precio: 40 },
    { nombre: "Pan", precio: 35 },
    { nombre: "Yogur", precio: 55 },
    { nombre: "Queso", precio: 70 }
]

function gestionarProductos(productos) {

    productos.push({ nombre: "Huevos", precio: 60 })

    productos.pop()

    let indicePan = productos.findIndex(producto => producto.nombre === "Pan")

    let existePrecioMayor50 = productos.some(producto => producto.precio > 50)

    let nombresProductos = productos.map(producto => producto.nombre).join(", ")

    console.log("Índice del Pan:", indicePan)
    console.log("¿Hay precio mayor a 50?:", existePrecioMayor50)
    console.log("Lista de productos:", nombresProductos)
}

gestionarProductos(productos)
// Resultado esperado:
// Índice del Pan: 1
// ¿Hay precio mayor a 50?: true
// Lista de productos: Leche, Pan, Yogur, Queso, Huevos