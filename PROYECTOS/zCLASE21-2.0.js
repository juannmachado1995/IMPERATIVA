/*
1. Desarrollar una función que reciba un array e indique si se encuentran ordenados de
menor a mayor o no.
a. si están ordenados retornar true
b. caso contrario retorna false
ejemplos de arrays
*/
let numeros1 = [4,9,2,5,6,7,1,2] // false
let numeros2 = [1,2,3,4,5,6,7,8] // true

function ordenados(arr) {
    for(let k = 0 ; k < arr.length - 1 ; k++){
            if (arr[k] > arr [k+1]){
                return false
            }
        }
    return true
    }

// console.log (ordenados(numeros1))
// console.log(ordenados(numeros2))

/*
2. Desarrollar una función que genere una matriz, deberá recibir por parámetros la
cantidad de filas y columnas y retornar con valores secuenciales numéricos.
*/
function crearMatriz (numFila,numCol){
    let matrizFinal = []
    let incrementador = 0
    for(let i = 0 ; i < numCol ; i++){
        let filas = []
        for (let k = 0 ; k < numFila ; k++){
            filas.push(incrementador)
            incrementador++
        }
        matrizFinal.push(filas)
    }
    return matrizFinal
}
// console.table(crearMatriz(9,14))

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

function orderAscEdad (arr){
    for(let i = 0 ; i < arr.length ; i++){
        for(let k = 0 ; k < arr.length -1 ; k++){
            if(arr[k].edad > arr[k+1].edad){
                let aux = arr[k+1]
                arr[k+1]=arr[k]
                arr[k]=aux
            }
        }
    }
    return arr
}
// console.log(orderAscEdad(personas))

function orderDescEdad (arr){
    for(let i = 0 ; i < arr.length ; i ++){
        for(let k = 0 ; k < arr.length - 1; k ++){
            if (arr[k].edad < arr[k+1].edad){
                let aux = arr[k+1]
                arr[k+1]=arr[k]
                arr[k]=aux
            }
        }
    }
    return arr
}
// console.log(orderDescEdad(personas))

function orderEdad (arr,tipoOrden){
    if (tipoOrden === "ASC"){
        orderAscEdad(arr)
    }
    else if (tipoOrden === "DESC"){
        orderDescEdad(arr)
    }
    else {return "Palabra ingresada invalida \n  ASC = Para orden ASCENDENTE \n DESC = Para orden DESCENDENTE"}
    return arr
}
// console.log(orderEdad(personas,"DEsSC"))

/*
Teniendo 3 arrays:
fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,6]
Realiza las siguientes tareas:
- Crea una matriz con esta forma:
*/

fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,6]

function mtrz(arr,arr1,arr2){
    let matrix = []
    matrix.push(arr,arr1,arr2)
    return matrix
}
let mtz = mtrz(fila1,fila2,fila3)
// console.table(mtz)

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
impares : [9, 3, 5, 7, 1], // array de impares
*/

function sumaFila(mtrz,fila){
    let sumaFinal = 0
    for(let i = 0 ; i < mtrz[fila].length ; i++){
        sumaFinal += mtrz[fila][i]
    }
    return sumaFinal
}
// console.log(sumaFila(mtz,0))
// console.log(sumaFila(mtz,1))
// console.log(sumaFila(mtz,2))

function sumaDiagonales(mtrz){
    let sumaDiagonales = []
    let sumaTotal = 0 
    for (let i = 0 ; i < mtrz.length ; i++){
        for(let k = 0 ; k < mtrz[i].length ; k++){
            if (mtrz[i] === mtrz[k]){
                sumaTotal += mtrz[i][k]
            }
        }
    }
    sumaDiagonales.push(sumaTotal)
    sumaTotal = 0
    for (let i = 0 ; i < mtrz.length ; i++){
        for(let k = 0 ; k < mtrz[i].length ; k++){
            if (i + k === 2){
                sumaTotal += mtrz[i][k]
            }
        }
    }
    sumaDiagonales.push(sumaTotal)
    return sumaDiagonales
}
console.log(sumaDiagonales(mtz))

function parImpar (mtrz){
    let numPar = []
    let numImpar = []
    for (let i = 0 ; i < mtrz.length ; i ++){
        for (let k = 0 ; k < mtrz[i].length ; k++){
            if (mtrz[i][k] %2 ===0){
                numPar.push(mtrz[i][k])
            }
        }
    }
    for (let i = 0 ; i < mtrz.length ; i ++){
        for (let k = 0 ; k < mtrz[i].length ; k++){
            if (mtrz[i][k] %2 != 0 ){
                numImpar.push(mtrz[i][k])
            }
        }
    }
    return "Numeros pares " + numPar + "\n" + "Numeros Impares " + numImpar
}
console.log(parImpar(mtz))

//mayores a 5 
function mayorCinco (mtrz){
    let mayores = []
    for (let i = 0 ; i < mtrz.length ; i ++){
        for (let k = 0 ; k < mtrz[i].length ; k++){
            if (mtrz[i][k] > 5){
                mayores.push(mtrz[i][k])
            }
        }
    }
    return "Los numeros " + mayores + " son mayores a 5"
}
console.log(mayorCinco(mtz))

//Objeto literal con los pares e impares separados

function objetoDeNumeros (mtrz){
    let parImpar = {}
    let par = []
    let impar = []
    for(let i = 0 ; i < mtrz.length ; i++){
        for (let k = 0 ;k < mtrz[i].length ; k++){
            if (mtrz[i][k] %2 === 0){
                par.push(mtrz[i][k])
            }
        }
    }
    for(let i = 0 ; i < mtrz.length ; i++){
        for (let k = 0 ;k < mtrz[i].length ; k++){
            if (mtrz[i][k] %2 != 0){
                impar.push(mtrz[i][k])
            }
        }
    }
    parImpar.numerosPares = par
    parImpar.numerosImpares = impar
    return parImpar
}
console.log(objetoDeNumeros(mtz))
