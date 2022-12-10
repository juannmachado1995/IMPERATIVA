let temasMusciales = [
    {
       nombre : "La cucharita se me perdió",
       cantDeVotos :  500
    },
    {
       nombre : "Para no olvidar",
       cantDeVotos :  1350
    },
    {
       nombre : "Tatuajes",
       cantDeVotos :  350
    },
    {
       nombre : "Aguardiente pal chofer",
       cantDeVotos :  5550
    },
    {
       nombre : "Mariposa traicionera",
       cantDeVotos :  3450
    },
];


//Busqueda lineal

function votacion(cancionABuscar, array){

    for(let i=0 ; i < array.length ; i++){

        if(array[i].nombre === cancionABuscar){
            return array[i].cantDeVotos;
        }
    }

    return "La cancion no se ha encontrado";
}

//console.log(votacion("QUEDATEEEEEE", temasMusciales));


//Busqueda binaria

//Paso 1 - bubble sort

function bubbleSort(arreglo1){

    for(let i=0 ; i < arreglo1.length ; i++){

        for(let j=0 ; j < arreglo1.length - 1 ; j++){

            if(arreglo1[j].nombre > arreglo1[j+1].nombre){

                let aux = arreglo1[j];
                arreglo1[j] = arreglo1[j+1];
                arreglo1[j+1] = aux;
            }
        }
    }
    return arreglo1;
}

//Paso 2 - hacer la busqueda binaria

let numeros = [1,2,3,4,5,6,7,8,9];
//             0               8

function busquedaBinaria(arreglo2,cancion){

    arreglo2 = bubbleSort(arreglo2);

    let indiceInicio = 0;

    let indiceFinal = arreglo2.length - 1;

    while(indiceInicio <= indiceFinal){

        let indiceMitad = Math.round((indiceInicio+indiceFinal)/2);

        let elementoMitad = arreglo2[indiceMitad].nombre;

        if(elementoMitad === cancion){
            return arreglo2[indiceMitad].cantDeVotos;
        }

        if(elementoMitad > cancion){
            indiceFinal = indiceMitad - 1;
        }
        else{
            indiceInicio = indiceMitad + 1;
        }
    }

    return "La cancion no se ha encontrado";
}


