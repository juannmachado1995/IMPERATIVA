const prompt = require("prompt-sync")({ sigint: true });

let temperatura = 20;

let estaLloviendo = true;

let numeroPiso = 3;

let horaActual = 16;

let horaApertura = 13;

let horaCierre = 19;

let cantidadQueso = 100;

let deudaMonica = 500;

console.log("Temperatura Actual = " + temperatura + "°C")
console.log("Llueve? = " + estaLloviendo)
console.log("En que piso estoy? Piso = " + numeroPiso)
console.log("Hora Actual = " + horaActual + "hs.")
console.log("Hora Apertura = " + horaApertura + "hs.") 
console.log("Hora de Cierre = " + horaCierre + "hs.")
console.log("Cantidad de queso = " + cantidadQueso + "grs.")
console.log("Le quede debiendo a Monica = " + deudaMonica + "pesos") 