/*---------------------------------------------------
Desarrollar una función que reciba un array e indique
si se encuentran ordenados de menor a mayor o no.

a. si están ordenados retornar true
b. caso contrario retorna false

ejemplos de arrays
[4,9,2,5,6,7,1,2] // false
[1,2,3,4,5,6,7,8] // true
---------------------------------------------------*/
let arr1 = [4,9,2,5,6,7,1,2] // false
let arr2 = [1,2,3,4,5,6,7,8] // true

function ordenados(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]){
            return false;
        }
    }
    return true;
}

console.log(ordenados(arr1));
console.log(ordenados(arr2));

/*---------------------------------------------------
Desarrollar una función que genere una matriz, deberá
recibir por parámetros la cantidad de filas y columnas
y retornar con valores secuenciales numéricos.
---------------------------------------------------*/
function constructorMatrices(cantFilas, cantCols){
    let matrizResultado = [];
    for(let i = 0; i < cantFilas; i++){
        let fila = [];
        for(let j = 0; j < cantCols; j++){
            fila.push(i + j + i*cantFilas);
        }
        matrizResultado.push(fila);
    }
    return matrizResultado;
}
console.log(constructorMatrices(5, 6));


/*---------------------------------------------------
- Desarrollar una función llamada orderAscLegajo que
  reciba por parámetro él array de personas y realice
  un ordenamiento de forma ascendente
- Desarrollar una función llamada orderDescLegajo que
  reciba por parámetro él array de personas y realice
  un ordenamiento de forma descendente
- Pensar de qué forma se puede realizar los dos ítems
  anteriores en una sola función
---------------------------------------------------*/
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

function orderAscLegajo(arr){
    for(let m = 0; m < arr.length; m++){
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i].legajo > arr[i + 1].legajo){
                let aux = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = aux;
            }
        }
    }
}

orderAscLegajo(personas);
console.log(personas);

function orderDescLegajo(arr){
    for(let m = 0; m < arr.length; m++){
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i].legajo < arr[i + 1].legajo){
                let aux = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = aux;
            }
        }
    }
}

orderDescLegajo(personas);
console.log(personas);

function orderLegajo(arr, tipoOrden){
    for(let m = 0; m < arr.length; m++){
        for(let i = 0; i < arr.length - 1; i++){
            if(tipoOrden === 'asc' && arr[i].legajo > arr[i + 1].legajo){
                let aux = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = aux;
            }
            else if(tipoOrden === 'desc' && arr[i].legajo < arr[i + 1].legajo){
                let aux = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = aux;
            }
        }
    }
}

orderLegajo(personas, 'asc');
console.log(personas);

orderLegajo(personas, 'desc');
console.log(personas);

/*---------------------------------------------------
Teniendo 3 arrays:
    fila1 = [4,9,2]
    fila2 = [3,5,7]
    fila3 = [8,1,6]
Realiza las siguientes tareas:
    - Crea una matriz con esta forma:
      [[4, 9, 2],[3, 5, 7],[8, 1, 6]]
Luego, a partir de esta matriz, desarrollar una función
que reciba la matriz por parámetro y retorne lo
solicitado:
    - Función que reciba por parámetro la fila y
      retornar la suma de la misma.
    - Función que retorne en un array la suma de las
      diagonales [15 , 15], sumando él centro las dos
      veces
    - Función que retorne en un array los elementos
      pares ejemplo [4, 2, 8, 6]
    - Función que retorne en un array los elementos
      mayores a 5
    - Función que retorne un objeto literal con dos
      propiedades

pares : [4, 2, 8, 6], // array de pares
impares : [9, 3, 5, 7, 1], // array de impare
---------------------------------------------------*/
fila1 = [4, 9, 2];
fila2 = [3, 5, 7];
fila3 = [8, 1, 6];

let matriz = [fila1, fila2, fila3];

//funcion suma
function sumaFila(matrix, numFila){
    let resultado = 0;
    for(let i = 0; i < matrix[numFila].length; i++){
        resultado += matrix[i][numFila];
    }
    return resultado;
}
console.log(sumaFila(matriz, 1));

//funcion para sumar las diagonales
function sumaDiagonales(matrix){
    let sumaDiagonal_1 = 0;
    let sumaDiagonal_2 = 0;
    for(let m = 0; m < matrix.length; m++){
        for(let i = 0; i < matrix[m].length; i++){
            if(i === m){
                sumaDiagonal_1 += matrix[m][i];
            }
            if(i === matrix[m].length - 1 - m){
                sumaDiagonal_2 += matrix[m][i];            }
        }
    }
    return [sumaDiagonal_1, sumaDiagonal_2];
}
console.log(sumaDiagonales(matriz));

//array de los elementos pares
function arrayDePares(matrix){
    let resultado = [];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] % 2 === 0){
                resultado.push(matrix[i][j]);
            }
        }
    }
    return resultado;
}
console.log(arrayDePares(matriz));

//elementos mayores a 5
function mayoresA5(matrix){
    let resultado = [];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] > 5){
                resultado.push(matrix[i][j]);
            }
        }
    }
    return resultado;
}
console.log(mayoresA5(matriz));

//funcion objeto liteal con pares e impares
function paresEImpares(matrix){
    let pares = [];
    let impares = [];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] % 2 === 0){
                pares.push(matrix[i][j]);
            }
            else if(matrix[i][j] % 2 !== 0){
                impares.push(matrix[i][j]);
            }
        }
    }
    return {pares, impares};
}
console.log(paresEImpares(matriz));