
// 1. Armá un array llamado estudiantes de 3 objetos, que cada uno de ellos tenga: nombre, 
//edad y notaFinal.

let estudiantes = [
    {
        nombre : "Eva",
        edad : 40,
        notaFinal : 9
    },
    {
        nombre : "Juan",
        edad : 25,
        notaFinal : 8
    },
    {
        nombre : "Lu",
        edad :31,
        notaFinal : 4
    }
];

// 2. Crear una funcion que ordene esos objetos por edad 

function ordenar(array, string){

    for(let m=0 ; m < array.length ; m++){

        for(let i=0 ; i < array.length - 1 ; i++){

            if(string === "ASC"){

                if(array[i].edad > array[i+1].edad){

                    let aux = array[i];
                    array[i] = array[i+1];
                    array[i+1] = aux;
    
                }
            }
            else if(string === "DESC"){

                if(array[i].edad < array[i+1].edad){

                    let aux = array[i];
                    array[i] = array[i+1];
                    array[i+1] = aux;
    
                }
            }
            else{
                return "Pasaste una palabra incorrecta;"
            }
        }
    }   
    return array;
}

//console.log(ordenar(estudiantes,"DESC"));

// 3. Crear una funcion que retorne un nuevo array. Este deberá contener solo los objetos 
//cuya notaFinal sean mayores o iguales a 7 

function filtrado(array){

    let nuevoArray = [];

    for(let i=0 ; i < array.length ; i++){

        if(array[i].notaFinal >= 7){

            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

//console.log(filtrado(estudiantes))

// 4. Agregar un atributo id a cada objeto que inicie en 1 y sea secuencial


function agregarId (array){
    let incremento = 1
    for(let i = 0 ; i < array.length ; i++){
        array[i].id = incremento
        incremento++
    }
    return array
}
console.log(agregarId(estudiantes))

// Matrices:
// 1. Crear una matriz de 3 x 4 

let matriz = [
    [4,5,6,9],
    [5,1,2,3],
    [6,4,8,7]
]

console.table(matriz)

// 2. Crear una funcion que suma todos los valores de la matriz que sean pares


function sumarPares(matrix){

    let suma = 0;

    for(let i=0 ; i < matrix.length ; i++){
        for(let j=0 ; j < matrix[i].length ; j++){

            if(matrix[i][j] % 2 === 0){

                suma += matrix[i][j];
            }
        }
    }
    return suma;
}

//console.log(sumarPares(matriz));

// 3. Crear una funcion que cambie todos los valores de la matriz que sean multiplos de 5 por 
// un numero 1

function multiplos (matrix){
    for(let i=0 ; i < matrix.length ; i++){
        for(let j=0 ; j < matrix[i].length ; j++){
            if (matrix[i][j] %5 === 0){
                matrix[i][j] = 1
            }
        }
    }
    return matrix
}
console.table(multiplos(matriz))

// 4. Crear una funcion que genere un nuevo array donde se guarden todos los numeros impares de 
// la matriz

function arrayDeImpares (matrix){
    let arrayDeImpares = []
    for(let i=0 ; i < matrix.length ; i++){
        for(let j=0 ; j < matrix[i].length ; j++){
            if (matrix[i][j] %2 != 0){
                arrayDeImpares.push(matrix[i][j])
            }
        }
    }
    return "Array de impares " + arrayDeImpares
}
console.log(arrayDeImpares(matriz))

// 5. Crear una funcion que retorne la multiplicacion de todos los elementos de la fila 1


function ejercicio5(matrix){

    let resultado = 1;

    for(let j = 0 ; j < matrix[1].length ; j++){

        resultado *= matrix[1][j];
        
    }

    return resultado;
}

console.log(ejercicio5(matriz));




