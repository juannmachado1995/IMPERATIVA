const prompt = require("prompt-sync")({ sigint: true });

//VARIABLES CON FUNCIONES 

function saludar (nombrePersona){
        console.log("hola como estas " + nombrePersona + " ?")};
saludar (prompt ("Nombre"))
//Con "prompt" tendremos que poner el "nombre" que deseemos en consola


//TIPOS DE FUNCIONES - "DECLARADAS" / "EXPRESADAS" / "ARROW"
//funcion DECLARADA

function suma (numA , numB){
    let resultado = numA+numB;
    return (resultado)
}
let resultadoSuma = suma (8,2);
console.log (resultadoSuma)

//funcion EXPRESADA

let sumarConExpresada = function (num1 , num2){
                        return num1+num2;
                                    }
let resultadoSumaExpresada = sumarConExpresada (15,5)
console.log (resultadoSumaExpresada)

// funcion ARROW

let sumarConArrow = (num1 , num2) => num1+num2;
let resultadoArrow = sumarConArrow (5,10)
console.log (resultadoArrow)


