let list = [
    {
        nombre : "Pepe",
        id : 15
    },
    {
        nombre : "Jose",
        id : 7
    },
    {
        nombre : "Sandra",
        id : 574
    }
];

//Busqueda lineal

function busquedaLineal(arreglo,num){

    for(let i=0 ; i < arreglo.length ; i++){

        if(arreglo[i] === num){

            return i;
        }
    }
    return "No se ha encontrado";
}

//console.log(busquedaLineal(list, 85));






//Busqueda binaria

function busquedaBinaria(arreglo, num){

    let indiceInicio = 0;

    let indiceFinal = arreglo.length - 1;

    while(indiceInicio <= indiceFinal){

        let indiceMitad = Math.round((indiceInicio+indiceFinal)/2);

        let elementoMitad = arreglo[indiceMitad].id;

        if(elementoMitad === num){
            return indiceMitad;
        }

        if(elementoMitad > num){
            indiceFinal = indiceMitad - 1;
        }
        else{
            indiceInicio = indiceMitad + 1;
        }
    }
    return "No se ha encontrado";
}



