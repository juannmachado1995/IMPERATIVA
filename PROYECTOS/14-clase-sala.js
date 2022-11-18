/*Ejercicios
A partir de el siguiente array de edades nos solicitan realizar lo siguiente:*/

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

/* Obtener en un nuevo array las edades menores a 18.*/
function menores(arreglo) {
  let menos18 = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] < 18) {
      menos18.push(arreglo[i]);
    }
  }
  return menos18;
}

//Obtener en un nuevo array las edades mayor o igual a 18.
function mayor(arreglo) {
  let mayores = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] >= 18) {
      mayores.push(arreglo[i]);
    }
  }
  return mayores;
}

//Obtener en un nuevo array las edades igual a 18.
function igual(arreglo) {
  let iguales = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === 18) {
      iguales.push(arreglo[i]);
    }
  }
  return iguales;
}

//Obtener el menor.
let menor = edades[0];
for (let i = 0; i < edades.length; i++) {
  if (menor > edades[i]) {
    menor = edades[i];
  }
}

//Obtener el mayor.
let mayores18 = edades[0];
for (let i = 0; i < edades.length; i++) {
  if (mayores18 < edades[i]) {
    mayores18 = edades[i];
  }
}

//Obtener el promedio de edades.

let promedio = 0;
for (let i = 0; i < edades.length; i++) {
  promedio = promedio += edades[i] / edades.length;
}

//Incrementar en 1 todas las edades.
let edadMas1 = [];
for (let i = 0; i < edades.length; i++) {
  edadMas1.push(edades[i] + 1);
}

/*const edadesGrupo1 = [21, 12, 15, 18, 25];
const edadesGrupo2 = [2, 11, 54, 63, 24];

 Observamos que es un array por su sintaxis que comienza y termina con corchetes []
   y sus elementos tienen la sintaxis de objetos literales {}
   Entonces, podemos decir que tenemos una array de objetos literales, 
   o una colección de objetos literales

const arrayDeObjetosLiterales =
[
    {},
    {},
    {},
    {}
];

Tenemos como base un array de cuentas bancarias, donde a cada una la representamos con un objeto literal.
A partir de este array trabajaremos sobre los siguientes enunciados, resolviendo de la forma que nos parezca
más adecuada
*/

const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: 3253.40,
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: 3229.45,
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1360.19,
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: true,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: 1616.52,
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: 1408.68,
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]
/*
Obtener un nuevo array de cuentas cuyas edades sean menores a 30.*/

let cuentaMenor30 = []
for (let i = 0 ; i < arrayCuentas.length ; i++ ){
    if (arrayCuentas[i].edadTitular < 30) {
        cuentaMenor30.push(arrayCuentas[i])
    }
}

/*
Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.*/
let cuentaMayor30 = []
for (let i = 0 ; i < arrayCuentas.length ; i++ ){
    if (arrayCuentas[i].edadTitular >= 30) {
        cuentaMayor30.push(arrayCuentas[i])
    }
}

/*
Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.*/




/*
Obtener la cuenta con el titular de la misma más joven.*/

let cuentaMasJoven = arrayCuentas[0];

for (let i = 0 ; i < arrayCuentas.length ; i++ ){
  if (arrayCuentas[i].edadTitular < cuentaMasJoven.edadTitular ){
  cuentaMasJoven = arrayCuentas[i]}
}

/*
Obtener un array con las cuentas habilitadas.*/

let cuentaHabilitada = []
for (let i = 0 ; i < arrayCuentas.length ; i++ ){
  if (arrayCuentas[i].estaHabilitada === true){
    cuentaHabilitada.push(arrayCuentas[i])
  }
}

/*
Obtener un array con las cuentas deshabilitadas.*/
let cuentaDesHabilitada = []
for (let i = 0 ; i < arrayCuentas.length ; i++ ){
  if (arrayCuentas[i].estaHabilitada === false){
    cuentaDesHabilitada.push(arrayCuentas[i])
  }
}

/*
Obtener la cuenta con el menor saldo.
Obtener la cuenta con el mayor saldo.*/

let mayorSaldo = arrayCuentas[0]
for (let i = 0 ; i < arrayCuentas.length ; i++ ){
  if (arrayCuentas[i].saldo > mayorSaldo.saldo){
    mayorSaldo = arrayCuentas[i]
  }
}

let menorSaldo = arrayCuentas[0]
for (let i = 0 ; i < arrayCuentas.length ; i++ ){
  if (arrayCuentas[i].saldo < menorSaldo.saldo){
    menorSaldo = arrayCuentas[i]
  }
}

/*
Extras:

Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento
 (objeto literal) una propiedad llamada id con un valor Numérico*/

 function generarID(arrayCuentas){
  for (let i = 0 ; i < arrayCuentas.length ; i++){
      arrayCuentas[i].id = i+5*5
  }
  return arrayCuentas
}

generarID(arrayCuentas)

arrayCuentas
/*
Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de 
encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null*/

function buscarPorId (arrayCuentas,numId){
    for(let i = 0 ; i < arrayCuentas.length ; i++){

      if( arrayCuentas[i].indexof(numId) >=0 ){
         return arrayCuentas[i]
      }
      else {return null}
      }

    }
console.log(arrayCuentas[0].id)

/*
Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), 
deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro*/

function filtrarPorSaldos (arrayCuentas,saldofiltrado){
  let saldofiltra2 = []  
  for(let i = 0 ; i < arrayCuentas.length ; i++){
      if (arrayCuentas[i].saldo < saldofiltrado){
        saldofiltra2.push(arrayCuentas[i])
      }
    }
    return saldofiltra2
}

/*
Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo,
deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined 
Reutilizando la función  buscarPorId.*/

/*function incrementarSaldo (arrayCuentas,id,saldo){
  for (let i = 0 ; i < arrayCuentas.length ; i++){

  }
}*/
