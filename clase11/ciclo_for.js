//programa que simula un loro: repite lo que escucha (escribe) 5 veces

//1 - IMPORTACION DE LA LIBRERRIA
const prompt = require('prompt-sync')();

//2 - ENTRADA DE DATOS : INGRESAR LA FRASE
// Le pedimos al usuario la frase que el loro va escuchar para reperir
let textoEscuchado = prompt('Ingrese la frase que el loro debe repetir: ');

//3 - ESTRUCTURA DEL CICLO FOR
// El for es ideal para cuando sabemos de antemano cuantas veces queremos que se repita un bloque de codigo.
// tiene 3 partes separadas por punto y coma (;)
// 1 - inicializacion  (let i = 1) : Creamos un contador que empieza en 1
// 2 - condicion (i < 5) : el ciclo sigue mientras esta condicion sea verdadera, el ciclo seguira ejecutandose
// 3 - modificador incremento (i++) : despues de cada iteracion, se actualiza la variable de control (i) aumentando su valor en 1

for (let i = 1; i <= 5; i++) {
    //4 - SALIDA DE DATOS : MOSTRAR LA FRASE 5 VECES
    console.log(i + 'El loro dice:' + textoEscuchado);
    

}