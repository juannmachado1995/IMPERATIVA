let personas = [
    {
        nombre : "Lucas",
        edad : 45
    },
    {
        nombre : "Martin",
        edad : 9
    },
    {
        nombre : "Mina",
        edad : 7
    },
    {
        nombre : "Marta",
        edad : 15
    },
    {
        nombre : "Jorge",
        edad : 32
    },
    {
        nombre : "Luciano",
        edad : 26
    },
    {
        nombre : "Lucrecia",
        edad : 75
    },
]

//EJERCICIO 1
/*Realizar una función que reciba por parámetro dicho arreglo  y retorne un nuevo array cargado con los objetos 
cuya edad sea mayor o igual a 26.*/

function mayores (array){
    let mayores = []
    for (let i = 0; i < array.length; i++) {
        if(array[i].edad >= 26){
            mayores.push(array[i])
        }
    }
    return mayores
}
console.log(mayores(personas))


//Ejercicio 2
/*
Crear una función que reciba por parámetro el arreglo del ejercicio 1 y ordene los objetos de forma alfabética
 (desde la A hasta la Z) según su atributo nombre mediante el algoritmo de ordenación bubbleSort
 */
function ordenarXnombre (array){
 for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < array.length -1 ; k++) {
        if (array[k].nombre > array[k+1].nombre){
            let aux = array[k]
            array[k] = array[k + 1]
            array[k + 1] = aux 
        }
    }  
 }
 return array
 }


console.log(ordenarXnombre(personas))

//EJERCICIO 3 

let matriz = [
    [5, 2, 2], // 0
    [2, 5, 2], // 1
    [4, 4, 5]  // 2
];

// A - Crear una función que reciba la matriz por parámetro y  retorne la suma de todos los valores de la columna 0

function suma (mtrz,columna) {
    let sumaColumna = 0
    for(let i = 0; i < mtrz.length; i++){
        sumaColumna += mtrz[i][columna]
    }
    return "La suma de la columna "+ columna + " es igual a " + sumaColumna
}
console.table(matriz)
console.log(suma(matriz,0))
console.log(suma(matriz,1))
console.log(suma(matriz,2))

// B - Crear una función que reciba la matriz por parámetro y retorne un nuevo array con todos los valores impares de la matriz.

function impares (mtrz){
    let impares = []
    for (let i = 0; i < mtrz.length; i++) {
       for (let k = 0; k < mtrz[i].length; k++) {
        if(mtrz[i][k] %2 != 0){
            impares.push(mtrz[i][k])
        }
       }
    }
    return "Numeros impares de la matriz: " + impares
}
console.log(impares(matriz))