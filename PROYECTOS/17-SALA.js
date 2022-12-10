/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

let matriz5x5 = []


/*
2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
números. La matriz debe verse así:
1 2 3 4 5 6 7 8 9 10
11 12 13 14 15 16 17 18 19 20
21 22 23 24 25 26 27 28 29 30
31 32 33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48 49 50
51 52 53 54 55 56 57 58 59 60
61 62 63 64 65 66 67 68 69 70
71 72 73 74 75 76 77 78 79 80
81 82 83 84 85 86 87 88 89 90
91 92 93 94 95 96 97 98 99 100
*/

let matriz10x10 = [];
let matrizfila = [];
let incrementador =  1;

for (let i = 0 ; i < 10 ; i++){

    for (let j = 0 ; j < 10 ; j++){

        matrizfila.push(incrementador);
        incrementador++; 
    }
    matriz10x10.push(matrizfila)    // introduce el resultado de la fila en la matriz final
    matrizfila = []                 //Reinicia la fila para seguir iterando
}

console.table (matriz10x10)
//  OTRA FORMA DE HACER LA MATRIZ 10x10

function mtrz100 (){
    let matriz = []

    for (let i = 0 ; i < 100 ; i += 10){
        let fila = [] ;

        for (let j = 1 ; j <= 10 ; j++){
            fila.push(i+j)
        }

        matriz.push(fila)

    }

    return matriz

}
console.table(mtrz100())

/*
3) Por último, vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único.
*/

function diagonalRoja (mtrz){
    //Identificar diagonal // Sumar diagonal
    let resultadoFinal = 0
    for(let i = 0 ; i < mtrz.length ; i++){
        for (let j = 0 ; j < mtrz[i].length ; j++)
        if ( i === j) {
            resultadoFinal += mtrz [i][j]
        }
    }
    return resultadoFinal
}

console.log (diagonalRoja(matriz10x10))

//console.log (diagonalRoja(matriz10x10))

function diagonalVerde (mtrz){
    //Identificar diagonal // Sumar diagonal
    let resultadoFinal = 0
    for(let i = 0 ; i < mtrz.length ; i ++){
        for (let j = 0 ; j < mtrz[i].length ; j++)
        if ( i + j === 9 ) {
            resultadoFinal += mtrz [i][j]
        }
    }
    return resultadoFinal
}
console.log(diagonalVerde(matriz10x10))

function sumaDiagonales (mtrz){
    //Identificar diagonal // Sumar diagonal
    let resultadoFinal = 0
    for(let i = 0 ; i < mtrz.length ; i++){
        for (let j = 0 ; j < mtrz[i].length ; j++)
        if ( i === j || i + j === 2) {
            resultadoFinal += mtrz [i][j]
        }
    }
    return resultadoFinal
}