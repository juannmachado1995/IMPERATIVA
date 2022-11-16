/*Desarrollar una función para cada uno de las siguientes apartados: 
-Que reciba por parámetro un número entero y retorne su triple. 
-Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne 
la división de ambos.
*/   
/*-Que reciba por parámetro dos números enteros y si ambos son pares retorne la multiplicación 
de ambos, de lo contrario que retorne su suma.*/

function elTriple (numero) {
    return numero *3
}

function distintos (numA , numB) {
    if (numA !== 0 && numB !==0){
        return numA / numB
    }
}

function multiplicación (numC, numD){
    if (numC %2 === 0 && numD %2 === 0){
        return numC * numD
    }
    else {return numC + numD}
}

/*Realizar una función que reciba por parámetro dos valores numéricos. Si el primer número es 
mayor al segundo y distinto de 0, entonces se deberá retornar true. En cambio, si el primer 
número es menor al segundo y múltiplo de 5 entonces se deberá retornar false. Si el primer y 
el segundo número son iguales, deberemos retornar un string que diga “los números recibidos 
son los mismos”. Para cualquier otra situación, retornar -1. */

function func3 (numF,numG){
    if (numF > numG && numF !== 0){
        return true
    }
    else if (numF < numG && numF %5 === 0) {return false}
    else if (numF === numG){return "los numeros recibidos son los mismos"}
    else {return -1}
}



/* Dado el siguiente array de objetos:*/

let personas = [
    {
        nombre : "Lucia",
        oficio : "Medica",
        edad : 37
    },
    {
        nombre : "Tiziano",
        oficio : "Programador",
        edad : 15
    },
    {
        nombre : "Julian",
        oficio : "Chofer",
        edad : 45
    },
    {
        nombre : "Adriana",
        oficio : "Chef",
        edad : 24
    },

]

/*Realizar una función que reciba un array como parámetro, y lo recorra para filtrar 
las personas cuya edad sea mayor a 24. La función deberá retornar un nuevo arreglo con 
las personas que cumplan con la condición antes mencionada*/

function practicaArr (arreglo1){

    let arreglo2 = [];

    for (let i = 0 ; i < arreglo1.length ; i++){

        if (arreglo1[i].edad > 24){
            arreglo2.push(arreglo1[i]);
        } 
    }
    return arreglo2
}
console.log(practicaArr(personas))