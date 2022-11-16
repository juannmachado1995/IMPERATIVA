// https://docs.google.com/document/d/1CMSkSv0D7DNNnk-oEVqdTERP8F8gDJwS/edit# 

//loop de pares
function loopDePares(num){
    for(let i = 0; i <= 100; i++){
        console.log(i);
        if((num + i) % 2 === 0){
            console.log(`El numero ${num + i} es par`);
        }
    }
}
loopDePares(30);

//loop de impares
function loopDeImpares(num, str){
    for(let i = 0; i <= 100; i++){
        console.log(i);
        if((num + i) % 2 !== 0){
            console.log(str);
        }
    }
}
loopDeImpares(40, 'hola');

//sumatoria
function sumatoria(num){
    let resultado = 0;
    for(let i = 0; i <= num; i++){
        resultado += i;
    }
    return resultado;
}
console.log(sumatoria(3));
console.log(sumatoria(8));

//nuevo arreglo
function nuevoArreglo(num){
    let resultado = [];
    for(let i = 1; i <= num; i++){
        resultado.push(i);
    }
    return resultado;
}
console.log(nuevoArreglo(5));
console.log(nuevoArreglo(10));

//string.split()
function split(str){
    let resultado = [];
    for(let i = 0; i < str.length; i++){
        resultado.push(str[i]);
    }
    return resultado;
}
console.log(split('hola'));
console.log(split('chau'));

//manejando dos arreglos
function arrayHandler(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        console.log(`Soy ${arr1[i]} y yo soy ${arr2[i]}`);
    }
}
arrayHandler([1, 2, 3, 4], split('hola'));

//palindromo
function palindromo(str){
    let strArr = str.toLowerCase().split('');
    let arrInvertido = str.toLowerCase().split('').reverse();
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] !== arrInvertido[i]){
            return false;
        }
    }
    return true;
}
console.log(palindromo('hola'));
console.log(palindromo('anilina'));
console.log(palindromo('Ana'));