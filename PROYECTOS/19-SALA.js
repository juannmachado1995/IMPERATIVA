//Ejercicios

/*
1. A partir de él siguiente array de edades nos solicitan realizar lo siguiente
a. Desarrollar una función que ordene internamente de forma ascendente las
edades, la misma deberá retornar él array ordenado , es decir deberíamos
obtener resultado como él siguiente.
[25, 27, 30, 33, 34, 34]*/

const edades = [33, 27, 34, 30, 34, 25];

function burbujaEdades (array){
    for (let i = 0 ; i < array.length ; i++){
        for (let k = 0 ; k < array.length - 1 ; k++){
            if (array[k] > array[k + 1]){
                let aux = array[k + 1]
                array[k + 1] = array [k]
                array[k] = aux
            }
        }
    }
    return array
}

//console.log (burbujaEdades(edades))

/*
b. Desarrollar una función que ordene internamente de forma descendente
las edades, la misma deberá retornar él array ordenado , es decir
deberíamos obtener resultado como él siguiente.
[34, 34, 33, 30, 27, 25]
*/

function burbujaEdadesDesc(array){
    for (let i = 0 ; i < array.length ; i++){
        for (let k = 0 ; k < array.length - 1 ; k++){
            if (array[k] < array[k + 1]){
                let aux = array[k + 1]
                array[k + 1] = array [k]
                array[k] = aux
            }
        }
    }
    return array
}

// console.log(burbujaEdadesDesc(edades))

/*
2. Dado un array de strings:
¿Cómo pudieras ordenar el array anterior, alfabéticamente?
*/
const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"]

function burbujaLetras (array){
    for (let i = 0 ; i < array.length ; i++){
        for (let k = 0 ; k < array.length -1 ; k++){
            if (array[k]>array[k+1]){
                let aux = array[k+1]
                array[k+1] = array[k]
                array[k] = aux
            }
        }
    }
    return array
}

//console.log(burbujaLetras(letras))

/*
3. A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:
*/

const arrayCuentas =
[
{
titular: "Arlene Barr",
estaHabilitada: false,
saldo: 3253.40,
edadTitular: 33,
tipoCuenta: "sueldo"
},
{
titular: "Roslyn Torres",
estaHabilitada: false,
saldo: 3229.45,
edadTitular: 27,
tipoCuenta: "sueldo"
},
{
titular: "Cleo Lopez",
estaHabilitada: true,
saldo: 1360.19,
edadTitular: 34,
tipoCuenta: "corriente"
},
{
titular: "Daniel Malone",
estaHabilitada: false,
saldo: 3627.12,
edadTitular: 30,
tipoCuenta: "sueldo"
},
{
titular: "Ethel Leon",
estaHabilitada: true,
saldo: 1616.52,
edadTitular: 34,
tipoCuenta: "sueldo"
},
{
titular: "Harding Mitchell",
estaHabilitada: true,
saldo: 1408.68,
edadTitular: 25,
tipoCuenta: "corriente"
}
]
/*
a. Desarrollar una función que ordene internamente de forma ascendente según él
saldo de cada cuenta, la misma deberá retornar él array ordenado .*/

function ordenandoObjetos (array){
    for (let i = 0 ; i < array.length ; i++){
        for (let k = 0 ; k < array.length - 1 ; k++){
            if (array[k].saldo > array[k+1].saldo){
                let aux = array[k+1]
                array[k+1] = array[k]
                array[k]=aux
            }
        }
    }
    return array
}

// console.log(ordenandoObjetos(arrayCuentas))

/*
b. Desarrollar una función que ordene internamente de forma ascendente según la
edad del titular de cada cuenta, la misma deberá retornar él array ordenado.
*/

function ordenandoObjetos (array){
    for (let i = 0 ; i < array.length ; i++){
        for (let k = 0 ; k < array.length - 1 ; k++){
            if (array[k].edadTitular > array[k+1].edadTitular){
                let aux = array[k+1]
                array[k+1] = array[k]
                array[k]=aux
            }
        }
    }
    return array
}

// Array con tres objetos con Nombre,edad,nota



//Funcion para ordenar objetos x edad de forma ascendente

function ordenar (Array) {
    for (let i = 0 ; i < Array.length ; i++){
        for(let k = 0 ; k < Array.length - 1 ; k++){
            if (Array[k].Edad < Array[k+1].Edad){

                let aux = Array[k]
                Array[k] = Array[k+1]
                Array[k+1] = aux
            }
        }
    }
    return Array
}


function bubbleSort (array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].Edad > array[j + 1].Edad) {

                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }   
        return array
    }
