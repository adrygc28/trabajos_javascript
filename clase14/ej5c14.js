
const prompt = require('prompt-sync')();


const verificarMarca = marca => {

    let marcaNormalizada = marca.toLowerCase();
    
    if (marcaNormalizada === "chevrolet" || marcaNormalizada === "ford" || marcaNormalizada === "fiat") {
        return "El auto es de origen Nacional";
    }
    return "El auto es Importado";
};

let marcaAuto = prompt("Ingresa la marca del auto: ");

console.log(verificarMarca(marcaAuto));