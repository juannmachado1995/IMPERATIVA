function frase(str){
    return console.log(str) 
}
frase ("Hola!")

//

let saludo = function (nombreUsuario){
    return "hola!" + " " + nombreUsuario
}
console.log(saludo("Pedro"))

//

function sumaNumeros (numA , numB) {
    return numA + numB
}
console.log(sumaNumeros(77,63))

//

function edadPersona (anioNacimiento){
    return "Tienes " + (2022 - anioNacimiento) + " años!" 
}
console.log (edadPersona(1972))

//
//Math.floor = aproxima numeros hacia abajo
//Math.random() = Nos tira numeros random de 0 a 0.9
function adivinanza (numA){
    const numAdivinar = Math.floor(Math.random()*10)
    return numA === numAdivinar ? "Felicitaciones, ese era!" : "Lo siento, intenta nuevamente"
}
console.log(adivinanza(4))
console.log(adivinanza(2))
console.log(adivinanza(7))

//


function numerosPares () {
    for (let numA = 0 ; numA <= 100 ; numA++){
        if (numA % 2 === 0){console.log(numA)}
    }
}
numerosPares()

//

function nombres (){
    const nombres = ["Pedro", "Pablo","Maria","Juan","Diana"]
    for (let i = 0 ; i<nombres.length ; i++){
        console.log(nombres [i])
    }
}
nombres()

//

function nombresMejorado (){
    const nombres = ["Pedro", "Pablo","Maria","Juan","Diana"]
    for(names of nombres){console.log(names)}
}
nombresMejorado()

//

function pseudocodigo (num1){
    if (num1 > 500){return num1 * 0.18}
    return ""
}
console.log(pseudocodigo(450))
console.log(pseudocodigo(456))
console.log(pseudocodigo(12375))
console.log(pseudocodigo(1234))
console.log(pseudocodigo(4587))

//

function elemento (arreglo){
    return arreglo [2]
}
console.log(elemento(["Pedro", "Pablo","Maria","Juan","Diana"]))