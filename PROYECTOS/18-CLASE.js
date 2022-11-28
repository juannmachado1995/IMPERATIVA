/*
Ejercicio
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos 
cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0,
 semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera. 
a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana,
 es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan
  siempre en posición 0. 
b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular,
 por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan
 en 0.
c) Por último, es necesario tener el total de gastos realizados en el mes.
Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
*/

let gastosMensuales = [
    [540,478,659,458,745,896,256], // SEMANA 1
    [458,569,987,741,456,365,214], // SEMANA 2 
    [412,256,523,369,587,412,258], // SEMANA 3 
    [452,120,325,698,784,410,258]  // SEMANA 4
]

//PUNTO A

function gastosSemanales (matriz,numSemana){
    let gastoSem = 0

    for (let i = 0 ; i < matriz[numSemana].length ; i++){
        gastoSem += matriz[numSemana][i]
    }
    return gastoSem
}

console.log (gastosSemanales(gastosMensuales,2))

// PUNTO B 
/*
b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular,
 por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan
 en 0.
 */

 function totalXdia (matriz,numColumna){
    let sumaDia = 0 

        for (let i = 0 ; i < matriz.length ; i++){
            sumaDia += matriz[i][numColumna - 1]
        }
        return sumaDia
 }
 console.log(totalXdia(gastosMensuales,5))

 // PUNTO C 

 function totalMES (matriz) {
    let sumatotal = 0 

    for (let i = 0 ; i < matriz.length ; i++ ){
        for (let j = 0 ; j < matriz[i].length ; j++){
            sumatotal += matriz[i][j]
        }
    }
    return sumatotal
 }
 console.log(totalMES(gastosMensuales))

 //EJERCICIO SALA TRABAJO
 //SUMA 
 let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

let resultado = 0;

for(let i = 0; i < numeros.length; i++){
    for(let j = 0; j < numeros[i].length; j++){
        if(numeros[i][j] >= 10 && numeros[i][j] < 1000){
            resultado += numeros[i][j];
        }
    }
}

console.log(resultado);