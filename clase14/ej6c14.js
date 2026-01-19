let deportista = {
    
    nombre: "Cristiano",   
    energia: 150,         
    experiencia: 8,      

    entrenarHoras: function(horas) {
       
        this.energia -= horas * 5;
        
        this.experiencia += horas * 2;
    }
};

console.log("Energía inicial: " + deportista.energia);
console.log("Experiencia inicial: " + deportista.experiencia);

deportista.entrenarHoras(2);

console.log("--- Después de entrenar 2 horas ---");

console.log("Energía final: " + deportista.energia);  
console.log("Experiencia final: " + deportista.experiencia);