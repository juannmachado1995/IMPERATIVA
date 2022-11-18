/*Loop de pares
Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 
mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número 
pasado por parámetro sea par, mostrará en la consola: “El número X es par”.*/

function loopDePares (numA){
        for (let i = 0 ; i <= 100 ; i++){
            console.log(i)
            if((i+numA) %2 === 0){
                console.log("El numero " + (i + numA) + " es par")
            }
        }
}
//loopDePares(37)

/*
Loop de impares con palabra
Deberás crear una función llamada loopDeImpares que reciba como parámetros un número y una palabra, y haga un 
loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de 
que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.*/

function loopDeImpares (numB,palabra){
    for (let i = 0 ; i <= 100 ; i++){
        console.log(i)
        if ((numB + i)%2 !== 0){
            console.log(palabra)
        }
    }
}
//loopDeImpares(4,"Impar")


/*
Sumatoria
Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de 
todos sus números anteriores, incluso ese mismo. Ejemplo:
sumatoria(3) debe retornar 6 porque hace (1+2+3)
sumatoria(8) debe retornar 36*/

function sumatoria (numC){
    let suma = 0 
    for(let i = 0 ; i <= numC ; i++){
        suma = suma += i 
    }
    return suma
}
//console.log(sumatoria(8))

/*
Nuevo arreglo
Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo
 con tantos elementos como el número que le hayas pasado. Ejemplo:
nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]*/

function nuevoArreglo (numD){
    let arr1 = []
    for(let i = 0 ; i <= numD ; i++){
        arr1.push(i)
    }
    return arr1
}
//console.log(nuevoArreglo(5))


/*
Similar String.split()
Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si 
no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”]*/

function split (str){
    let copiandoSplit = []
    for(let i = 0 ; i < str.length ; i++){
        copiandoSplit.push(str[i])
    }
    return copiandoSplit
}

/*
Manejando dos arreglos
Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en 
la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:
arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a
*/
function arrayHandler (arrA,arrB){
    for (let i = 0 ; i < arrA.length ; i++){
        console.log("soy " + arrA[i] + " y yo soy " + arrB[i])
    }
}
let arrA = [1,2,3,4,5,6,7]
console.log(arrayHandler(arrA,split("MACHADO")))



/*
Palíndromo
Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true” en 
caso de que lo sea, y “false” en caso de que no. Ejemplo:
palindromo(“anilina”) debe retornar true
palindromo(“Ana”) debe retornar true
palindromo(“Enrique”) debe retornar false*/

function palindromo (palabra1)
    for (let i = 0 ; i < palabra1.length ; i++){
        if (palabra1[i]){

        }
    }