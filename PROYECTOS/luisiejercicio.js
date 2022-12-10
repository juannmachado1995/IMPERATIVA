const prompt = require("prompt-sync")({ sigint: true });

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

function agregarId (array){
    let incremento = 1
    for(let i = 0 ; i < array.length ; i++){
        array[i].id = incremento
        incremento++
    }
    return array
}
// console.log(agregarId(estudiantes))

//4.Crear una función que reciba un string y luego imprimir la cantidad de vocales que se encuentran en dicha frase.

function fraseVocales(str){
    let vocales = 0
    for(let i = 0 ; i < str.length ; i++){
        if (str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u" 
        ){
            vocales += 1
        }
    }
    return "Cantidad de vocales " + vocales 
}
console.log(fraseVocales("Ponete las pilas luisina"))

