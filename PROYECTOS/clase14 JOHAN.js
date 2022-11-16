// Obtener en un nuevo array las edades menores a 18.
// Obtener en un nuevo array las edades mayor o igual a 18.
// Obtener en un nuevo array las edades igual a 18.
// Obtener el menor.
// Obtener el mayor. 
// Obtener el promedio de edades.
// Incrementar en 1 todas las edades.

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

let edadesMenores = [];

for (let i = 0; i < edades.length; i++) {
    if(edades[i] < 18){
        edadesMenores.push(edades[i]);
    }
}
// console.log(edadesMenores);

let edadesMayores = [];

for (let i = 0; i < edades.length; i++) {
    if(edades[i] >= 18){
        edadesMayores.push(edades[i]);
    }
}
// console.log(edadesMayores);

let edadesIguales = [];

for (let i = 0; i < edades.length; i++) {
    if(edades[i] === 18){
        edadesIguales.push(edades[i]);
    }
}
// console.log(edadesIguales);

let menor1 = edades[0];
for (let i = 0; i < edades.length; i++) {
    if(edades[i] < menor1){
        menor1 = edades[i];
    }
}
console.log(menor1);

let mayor1 = edades[0];
for (let i = 0; i < edades.length; i++) {
    if(edades[i] > mayor1){
        mayor1 = edades[i];
    }
}
console.log(mayor1);
//[11, 12, 15, 18, 25, 22, 10, 33, 18, 5]

let promedio = 0;
for (let i = 0; i < edades.length; i++) {
    promedio = promedio + edades[i];
}
promedio = promedio / edades.length;
console.log(promedio);

for (let i = 0; i < edades.length; i++) {
    edades[i] += 1;
}
console.log(edades);

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
// Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
// Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
// Obtener la cuenta con el titular de la misma más joven.
// Obtener un array con las cuentas habilitadas.
// Obtener un array con las cuentas deshabilitadas.
// Obtener la cuenta con el menor saldo.
// Obtener la cuenta con el mayor saldo.

let menores = [];
for (let i = 0; i < arrayCuentas.length; i++) {
    if(arrayCuentas[i].edadTitular < 30){
        menores.push(arrayCuentas[i]);
    }
}

let mayores = [];
for (let i = 0; i < arrayCuentas.length; i++) {
    if(arrayCuentas[i].edadTitular >= 30){
        mayores.push(arrayCuentas[i]);
    }
}

let menoresOIguales = [];
for (let i = 0; i < arrayCuentas.length; i++) {
    if(arrayCuentas[i].edadTitular <= 30){
        menoresOIguales.push(arrayCuentas[i]);
    }
}

let menor = arrayCuentas[0];
for (let i = 0; i < arrayCuentas.length; i++) {
    if(arrayCuentas[i].edadTitular < menor.edadTitular){
        menor = arrayCuentas[i];
    }
}
// console.log(menor);

let mayor = arrayCuentas[0];
for (let i = 0; i < arrayCuentas.length; i++) {
    if(arrayCuentas[i].edadTitular >= mayor.edadTitular){
        mayor = arrayCuentas[i];
    }
}
// console.log(mayor);

let cuentasHabilitadas = [];
for (let i = 0; i < arrayCuentas.length; i++) {
    if(arrayCuentas[i].estaHabilitada === true){
        cuentasHabilitadas.push(arrayCuentas[i]);
    }
}
// console.log(cuentasHabilitadas);

let cuentasDeshabilitadas = [];
for (let i = 0; i < arrayCuentas.length; i++) {
    if(arrayCuentas[i].estaHabilitada === false){
        cuentasDeshabilitadas.push(arrayCuentas[i]);
    }
}
// console.log(cuentasDeshabilitadas);

let saldoMenor = arrayCuentas[0];
for (let i = 0; i < arrayCuentas.length; i++) {
    if(arrayCuentas[i].saldo < saldoMenor.saldo){
        saldoMenor = arrayCuentas[i];
    }
}
console.log(saldoMenor);

let saldoMayor = arrayCuentas[0];
for (let i = 0; i < arrayCuentas.length; i++) {
    if(arrayCuentas[i].saldo >= saldoMayor.saldo){
        saldoMayor = arrayCuentas[i];
    }
}
console.log(saldoMayor);


  



