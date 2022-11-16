const prompt = require("prompt-sync")({ sigint: true });

let horaActual = () => {
    let fecha = new date ();
    return fecha.getHours () + ":" + fecha.getMinutes(); 
}

console.log(horaActual(12))