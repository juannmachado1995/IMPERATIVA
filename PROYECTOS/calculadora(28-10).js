const prompt = require("prompt-sync")({ sigint: true });

function sumar(num1 , num2){
    return num1 + num2
}
let resultadoSuma = sumar (5,9)

function restar (numA , numB){
    return numA - numB
}
let resultadoResta = restar (8,4)

function multiplicar (numC , numD){
    return numC * numD
}
let resultadoMultiplicacion = multiplicar (4,5)

function dividir (numE , numF){
    return numE / numF
}
let resultadoDivicion = dividir (25,5)
let divicionCero = dividir (51,0)

function cuadradoDeUnNumero (numCuadrado){
    return numCuadrado*numCuadrado
}
let resultadoAlCuadrado = cuadradoDeUnNumero (4)

function promedioDeTres (numQ , numW , numE){
    return (numQ + numW + numE) / 3
}
let resultadoPromedio = promedioDeTres (resultadoSuma,resultadoResta,resultadoMultiplicacion)

function porcentaje (numT , numU){
    return (numU/100)*numT
}
let ResultadoPorcentaje = porcentaje (resultadoMultiplicacion,resultadoResta) 

function porcentajeAlReves (numP , numI){
    return (numP/100)*numI
}
let resultadoPorcentajeAlReves = porcentajeAlReves (resultadoResta,resultadoSuma)

let separacion = "separacion de funciones y resultados"
console.log(separacion)
console.log("Divicion"+ " " + resultadoDivicion)
console.log("multiplicacion"+ " " + resultadoMultiplicacion)
console.log("resta"+ " " + resultadoResta)
console.log("suma" + " " + resultadoSuma)
console.log("resultadoCero" + " " + divicionCero)
console.log("Este es un numero al cuadrado" + " " + resultadoAlCuadrado)
console.log("Promedio De Tres" + " " + resultadoPromedio)
console.log("Porcentaje" + " " + ResultadoPorcentaje)
console.log("porcentaje al reves" + " " + resultadoPorcentajeAlReves)