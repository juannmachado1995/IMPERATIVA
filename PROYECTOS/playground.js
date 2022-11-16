/*function anterior (numero){
    return --numero
}
let numMenosUno = anterior (10)
console.log(numMenosUno)*/
/*
function tablaDeMultiplicar(numero) {
    let multiplicador = 1
    while (multiplicador <=10){
        numero * multiplicador
        multiplicador++
    }
    }
let ejercicio = tablaDeMultiplicar(4)
console.log (ejercicio)*/

// CLASE EN VIVO CON LUCRECIA 7-11-22

let arrayCorreosPendientes = [
    'iroman@digitalhouse.com','loki%digitalhouse.com','loki@digitalhouse.com', 'thanosdigitalhouse.com','thanos@digitalhouse.com'];
  
let arrayCorreosAdmitidos = [
       'thor@digitalhouse.com',
      'tucuMan@digitalhouse.com',
      'wanda@digitalhouse.com'
];

let arrayCorreosDescartados = [];

for (let i=0 ; i < arrayCorreosPendientes.length ; i++){
    if (arrayCorreosPendientes[i].indexOf("@")=== -1){
        arrayCorreosDescartados.push(arrayCorreosPendientes[i])
    }
    else {
        arrayCorreosAdmitidos.push(arrayCorreosPendientes[i])
    }
}

console.log(arrayCorreosAdmitidos)
console.log(arrayCorreosDescartados)