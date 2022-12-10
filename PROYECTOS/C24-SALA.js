let personas = [
    {
        nombre : "Jose" ,
        apellido: "Fernandez" ,
        edad: 48 ,
        estadoCivil: "Casado" 
    }
    ,
    {
        nombre : "Martin",
        apellido: "Demichelis",
        edad: 35,
        estadoCivil: "Casado" 
    }
    ,
    {
        nombre : "Enzo",
        apellido: "Fernandez",
        edad: 21,
        estadoCivil: "Soltero" 
    }
    ,
    {
        nombre : "Luis" ,
        apellido: "Suarez",
        edad: 34,
        estadoCivil: "Soltero" 
    }
    ,
    {
        nombre : "Edinson",  
        apellido: "Cavani" ,
        edad: 37,
        estadoCivil: "Casado" 
    }
    ,
    {
        nombre : "Lisandro" ,
        apellido: "Martinez",
        edad: 25,
        estadoCivil: "Soltero" 
    }
]

function ordenarArray (array){
    for (let i = 0 ; i < array.length ; i++){
        for (let k = 0 ; k < array.length - 1 ; k++){
            if (array[k].apellido > array[k+1].apellido){
                let aux = array[k]
                array[k] = array[k+1]
                array[k+1]=aux
            }
        }
    }
    return array
}

function busqueda(array,apellido){
    array=ordenarArray(array)

    let indiceInicio = 0
    let indiceFinal = array.length -1 

    while (indiceInicio < indiceFinal){
        let indiceMedio = Math.round((indiceFinal+indiceInicio)/2)
        let objetoDelMedio = array[indiceMedio].apellido
        
        if (objetoDelMedio === apellido){
            return array[indiceMedio]
        }
        else if (apellido < objetoDelMedio){
            indiceFinal = indiceMedio -1
        }
        else if (apellido > objetoDelMedio){
            indiceInicio = indiceMedio + 1 
        }
    }
    return "No se encontro nada"
}

console.log(busqueda(personas,"Suarez"))

function estadoCivil (array,estado){
    let cantEstados = 0
    for (let i = 0 ; i < array.length ; i++){
            if (array[i].estadoCivil === estado){
                cantEstados += 1
            }
    }
    return "Tenemos " + cantEstados + " " + estado
}
console.log(estadoCivil(personas,"Casado"))
console.log(estadoCivil(personas,"Soltero"))