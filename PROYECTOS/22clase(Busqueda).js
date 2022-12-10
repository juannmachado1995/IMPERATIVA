let lista = [1,15,52,63,27,31,4,56,68,71,80,98,14,99,44,24];


// Busqueda lineal

function busquedaLineal(array,numero){

    for (let i = 0 ; i < array.length ; i++){

        if (array[i] === numero){

            return "El elemento " + numero + " esta en posicion: " + i

        }
    }
}
console.log(busquedaLineal(lista,44))

//Busqueda Binaria

function busquedaBinaria (array,numero){
    let indiceInicio = 0
    let indiceFinal = array.length - 1 

    while (indiceInicio <= indiceFinal){
        let indiceMitad = Math.round((indiceInicio + indiceFinal)/2)
        let elementoDeLaMitad = array[indiceMitad]
            if (elementoDeLaMitad === numero){
                return "El elemento que buscamos esta en la posicion: " + indiceMitad
            }
            else if (elementoDeLaMitad > numero){
                indiceFinal = indiceMitad - 1
            }
            else {indiceInicio = indiceMitad + 1}
    }
    return "No se encuentra"

}
console.log(busquedaBinaria(lista,44))
