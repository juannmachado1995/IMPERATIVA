function mayor (arreglo){
    let elementoMayor = arreglo[0]
  for (let i = 0 ; i < arreglo.length ; i++){
    if (arreglo[i] > elementoMayor) {
      elementoMayor = arreglo[i]
    }
  }return elementoMayor
}

let arr = [0 , 2 , 4 , 8 , 9]

function mayorConMath (arreglo){
  let elementoMayor = arreglo[0];
for (let i = 0 ; i < arreglo.length ; i++){
  elementoMayor = Math.max (elementoMayor,arreglo[i])
  }
  return elementoMayor
}
//console.log(mayorConMath(arr))

function otraFuncionConMath (arreglo){
  return Math.max(...arreglo)
}
//console.log(otraFuncionConMath(arr))

// SALA TRABAJO 16s

/*
1) Escribir un programa que muestre en pantalla los 
números del 1 al 100,
sustituyendo los múltiplos de 3 por la palabra “fizz”,
 los múltiplos de 5 por
“buzz” y los múltiplos de ambos, es decir, los múltiplos
 de 3 y 5 —o de 15—,
por la palabra “fizzbuzz”. Visiten este sandbox
https://codesandbox.io/s/fizzbuzz-3e9uc?file=/src/index.js 
para realizar
el ejercicio ahí. Recuerden desplegar la consola para ver
 sus resultados, y
utilicen la función console.log para mostrar datos en la
misma.
*/

function fizzbuzz (num){
  for (let i = 0 ; i <= 100 ; i++){
    if (i %3 === 0 && i%5 ===0){
      console.log ("fizzbuzz")
    }
    else if (i %3 === 0) {
      console.log("fizz") 
    }
    else if (i %5 === 0){
      console.log("buzz")
    }
    else {console.log(i)}
  }
}
fizzbuzz()


/*
2) Escriban una función que reciba dos parámetros: un array
 y un índice. 
La función deberá de mostrar por consola el valor del 
elemento según el índice dado. Por ejemplo, dada la 
siguiente array e índice, 
la función imprimirá '6'. let array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
var index = 1;
Visiten este sandbox para escribir su código.
https://codesandbox.io/s/busqueda-en-array-025me?file=/src/index.js
*/

let array = [3,6,67,6,23,11,100,8,93,0,17,24,	7,1,33,
	45,28,33,23,12,99,10];
let indice = 10

function numIndice (arreglo,indice){
  console.log (arreglo[indice])

}
numIndice (array , indice)

/*
3) Escribir una función que, dado un número de mes, 
devuelva la cantidad de días de ese mes
 —suponiendo que no es un año bisiesto—.
https://codesandbox.io/s/dias-del-mes-jb0f2?file=/src/index.js
*/
function diasDelMes(numMes){
     if (numMes === 01 || numMes === 03 || numMes === 05
      || numMes === 07 || numMes === 08 || numMes === 08
      || numMes === 10 || numMes === 12){
        console.log("Este mes tiene " + 31 + " dias")
      }
      else if (numMes === 02){
        console.log ("Este mes tiene " + 28 + " dias")
      }
      else if (numMes === 04 || numMes === 06 || numMes === 09 || numMes === 11){
        console.log ("Este mes tiene " + 30 + " dias")
      }
      else{console.log("NUMERO INGRESADO NO VALIDO: EL MES DE DEBE REPRENSETARSE EN DOS POSISIONES, TENIENDO EN CUENTA QUE VA DESDE EL 01 PARA ENERO HASTA EL 12 PARA DICIEMBRE")}
}
diasDelMes(2)
/*
1 - 31
2 - 28 
3 - 31
4 - 30 
5 - 31
6 - 30 
7 - 31
8 - 31
9 - 30 
10 - 31 
11 - 30
12 - 31
*/

/*
4) Escribir una función de JavaScript que invierta
un número. Por ejemplo,
si x = 32443, la salida debería ser 34423.
https://codesandbox.io/s/inverter-jfwm7?file=/src/index.js
*/

function revertirNumero (numA){
  console.log(numA.toString().split("").reverse().join(""))
}
revertirNumero (65)


/*
5) Escribir una función que reciba una array y solo imprima los valores que
se repiten. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6,23,33,100'. let array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
https://codesandbox.io/s/impresora-repitientes-qtz0e?file=/src/index.js
*/
let arregloValores = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]

function valoresRepetidos (arreglo){
    let unicos = []
    for (let i = 0 ; i < arreglo.length ; i++){
        if (unicos.indexOf(arreglo[i]) < 0 ){
          unicos.push(arreglo[i])
        }
    }
    return unicos
}
console.log(valoresRepetidos(arregloValores))