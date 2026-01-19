
const prompt = require('prompt-sync')();


const clasificarEdad = edad => {
    
    
    if (edad < 13) return " Es Niño";
        
    if (edad < 18) return "Es Adolescente";
    
    if (edad < 60) return "Es Adulto";
    
    return "Es Adulto Mayor";
};


let edadUsuario = parseInt(prompt("Ingresa tu edad: "));


console.log("Eres : " + clasificarEdad(edadUsuario));