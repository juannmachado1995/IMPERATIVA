const prompt = require("prompt-sync")({ sigint: true });

// Ejecicio 2 - supermercado

let temperatura = 25;

let haceCalor = prompt("Hace Calor?");

let horaActual = prompt("Que Hora es?");

let horaApertura = 13;

let horaCierre = 19;

let cantidadQueso = prompt ("Cuando queso vas a comprar?");

let deudaMonica = 500;
console.log("====================================")
console.log("Temperatura Actual = " + temperatura)
console.log("Hace calor? = " + haceCalor)
console.log("Que hora es? = " + horaActual)
console.log("Hora Apertura = " + horaApertura) 
console.log("Hora de Cierre = " + horaCierre)
console.log("Cuanto queso queres comprar? = " + cantidadQueso)
console.log("Le quede debiendo a Monica = " + deudaMonica) 