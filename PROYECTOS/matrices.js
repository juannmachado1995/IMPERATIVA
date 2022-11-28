let matriz = [
    [1,2,3,4,5],
    [3,5,2,4,3],
    [5,9,8,6,5],
    [4,3,2,2,8],
    [6,7,5,3,2]
];

let sumaTotal = 0;

for(let i=0; i<matriz.length; i++){
    for(let j=0;j<matriz[i].length;j++){
        sumaTotal += matriz[i][j];
    }
}

console.log(sumaTotal);

// Ejercicio 2

function crearMatriz(){
    let matrizAux = [];
    for(let i=0; i < 10; i++){
        let array = [];
        for(let j=0; j < 10; j++){
            array.push((j + 1) + i * 10);
        }
        matrizAux.push(array);
    }
    return matrizAux;
}

matriz = crearMatriz();
console.table(matriz);

// Ejercicio 3

function sumarDiagonal1(m){
    let suma = 0;
    for(let i = 0; i < m.length; i++){
        for(let j = 0; j < m[i].length; j++){
            if(i === j){
                suma += m[i][j];
            }
        }
    }
    return suma;
}

function sumarDiagonal2(m){
    let suma = 0;
    for(let i = 0; i < m.length; i++){
        for(let j = 0; j < m[i].length; j++){
            if(j === (m[i].length - 1) - i){
                suma += m[i][j];
            }
        }
    }
    return suma;
}

console.log("Resultado diagonal rojo:" + sumarDiagonal1(matriz));
console.log("Resultado diagonal verde:" + sumarDiagonal2(matriz));