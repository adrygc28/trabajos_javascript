// 1 IMPORTAR LIBRERIA
const prompt = require('prompt-sync')();

// 2 MENSAJE INICIAL
console.log("Iniciamos secuencia de despegue...");

// 3 PROCESO LOGICO (Ciclo for) inverso
// A diferencia de los ejercicios anteriores, aqui vamos marcha atras..
// A) let i = 10; INICIO comenzamos con el contador en el numero mas alto
// B) i >= 0;     CONDICION el ciclo sigue vivo mientras sea mayor o igual que 0
// C) i--;        DECREMENTO en cada vuelta vamos a restar 1 al contador.
for(let i = 10; i >= 0; i--){

    // 4 ACCION REPETIDA
    // Mostramos cuanto falta
    console.log("T-minus: " + i);
}

//5 FINAL DEL CICLO
// esta linea esta fuera de las llaves
// solo se ejecuta cuando el ciclo termina (cuando i llega a -1)
console.log("DESPEGUEEEE!!!!!");
