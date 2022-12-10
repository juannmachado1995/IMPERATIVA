// Array con tres objetos con Nombre,edad,nota

let alumnos = [
    {
        Nombre: "Juan",
        Edad: 25,
        Nota: 8
    }
    ,{
        Nombre: "Belen" ,
        Edad: 29,
        Nota: 9
    }
    ,{
        Nombre: "Lucrecia" ,
        Edad: 27,
        Nota: 7
    }
    ,{
        Nombre: "Ayelen" ,
        Edad: 30,
        Nota: 10
    }
    ,
]

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
//console.log(ordenar(alumnos))


// Matriz 3 * 4 

let MatrizDe3x4 = [
    [4,5,6,9],
    [8,6,7,3],
    [4,2,3,5]
]

console.table(MatrizDe3x4)

// funcion que sume valores pares de la matriz anterior

function SumaPares (Matriz){
    let sumatotal = 0 
    for (let i = 0 ; i < Matriz.length ; i++ ){
        for (let k = 0 ; k < Matriz[i].length ; k++){
            if (Matriz[i][k] %2 === 0 ){
                sumatotal += Matriz[i][k]
            }
        }
    }
    return sumatotal
}
console.log(SumaPares(MatrizDe3x4))

// Funcion que retorne multiplicacion de elementos fila 1 

function multiplicar (Matriz,fila){
    let total = 1
    for (let i = 0 ; i < Matriz[fila].length ; i++ ){
         total*= Matriz[fila][i]

    }
    return total
}
console.log(multiplicar(MatrizDe3x4,0))