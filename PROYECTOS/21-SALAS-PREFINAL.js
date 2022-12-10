/*1. Desarrollar una función que reciba un array e indique si se encuentran ordenados de
menor a mayor o no.
a. si están ordenados retornar true
b. caso contrario retorna false
ejemplos de arrays */

let num1 = [4,9,2,5,6,7,1,2] // false
let num2 = [1,2,3,4,5,6,7,8] // true

function ord (array) {
    for (let i = 0 ; i < array.length -1 ; i++){
        if (array[i] > array [i+1]){
            return false
        }
    }
    return true
}
// console.log(ord(num1))
// console.log(ord(num2))

/*2. Desarrollar una función que genere una matriz, deberá recibir por parámetros la
cantidad de filas y columnas y retornar con valores secuenciales numéricos.*/

function crearMatriz (fila,columna){
    let matrizFinal = []
    let contador = 0

    for (let i = 0 ; i < fila ; i++){

        let matrizfila = []

        for (let k = 0 ; k < columna ; k++){

            matrizfila.push(contador)
            contador++
        }
        matrizFinal.push(matrizfila)
    }

return matrizFinal
}
// console.log(crearMatriz(6,6))

/*
3. Dado él siguiente array de personas

- Desarrollar una función llamada orderAscLegajo que reciba por parámetro él
array de personas y realice un ordenamiento de forma ascendente
- Desarrollar una función llamada orderDescLegajo que reciba por parámetro
él array de personas y realice un ordenamiento de forma descendente
- Pensar de qué forma se puede realizar los dos ítems anteriores en una sola
función
*/

const personas =
[
{
nombre: "Arlene Barr",
legajo: 3955,
edad: 33,
},
{
nombre: "Roslyn Torres",
legajo: 3925,
edad: 27,
},
{
nombre: "Cleo Lopez",
legajo: 1965,
edad: 34,
},
{
nombre: "Daniel Malone",
legajo: 3925,
edad: 30,
},
{
nombre: "Ethel Leon",
legajo: 1915,
edad: 34,
},
{
nombre: "Harding Mitchell",
legajo: 1905,
edad: 25,
}
]
//ORDENAMIENTO ASCENDENTE
function orderAscLegajo (array){
    for(let i = 0 ; i < array.length ;i++)
    for (let j = 0; j < array.length - 1; j++){
        if (array[j].legajo > array[j + 1].legajo) {
            let aux = array[j];
            array[j] = array[j + 1];
            array[j + 1] = aux;
        }
    }
    return array
}
// console.log(orderAscLegajo(personas))

//ORDENAMIENTO DESCENDENTE
function orderAscLegajo (array){
    for(let i = 0 ; i < array.length ;i++)
    for (let j = 0; j < array.length - 1; j++){
        if (array[j].legajo < array[j + 1].legajo) {
            let aux = array[j];
            array[j] = array[j + 1];
            array[j + 1] = aux;
        }
    }
    return array
}
//console.log(orderAscLegajo(personas))

//ASCENDENTE Y DESCENDENTE EN LA MISMA FUNCION

function orderAscLegajo2 (array,orden){
    for(let i = 0 ; i < array.length ;i++)
     for (let j = 0; j < array.length - 1; j++){
    
            if (orden === 'ASC' && array[j].legajo > array[j + 1].legajo) {
                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
                }
            else if (orden === 'DESC' && array[j].legajo < array[j + 1].legajo) {
                        let aux = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = aux;
                    }
        else {return "INGRESE UN ORDEN VALIDO"}
        }
    return array
}
orderAscLegajo2(personas,'DESC')
//console.log(personas)

orderAscLegajo2(personas,'ASC')
//console.log(personas)



/*
Luego, a partir de esta matriz, desarrollar una función que reciba la matriz por
parámetro y retorne lo solicitado:
- Función que reciba por parámetro la fila y retornar la suma de la misma.
- Función que retorne en un array la suma de las diagonales [15 , 15], sumando él
centro las dos veces
- Función que retorne en un array los elementos pares ejemplo [4, 2, 8, 6]
- Función que retorne en un array los elementos mayores a 5
- Función que retorne un objeto literal con dos propiedades
pares : [4, 2, 8, 6], // array de pares
impares : [9, 3, 5, 7, 1], // array de impares */