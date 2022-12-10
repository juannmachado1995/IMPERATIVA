let numeros = [14, 5222, 333, 2, 4, 3, 8, 7];

function bubbleSort (array){
for (let i = 0; i < array.length; i++) {
	for (let j = 0; j < array.length - 1; j++) {
		if (array[j] > array[j + 1]) {
			let aux = array[j];
			array[j] = array[j + 1];
			array[j + 1] = aux;
		}
	}
}   
    return array
}

// COMO UTILIZAR BUBBLE SORT EN OBJETOS LITERALES 
// DEBEMOS PRIMERO EN EL ARRAY DECIRLE QUE TIENE QUE COMPARAR
// POR EJEMPLO SI QUEREMOS ORDENAR X EDAD HAY QUE AGREGARLE UN .EDAD EN EL CONDICIONAL 

let personas = [
    {
        nombre : "Raul",
        edad : 22
    } ,
    {
        nombre : "Laura",
        edad : 14
    }  ,
    {
        nombre : "Jose",
        edad : 35
    }  ,
    {
        nombre : "Cristian",
        edad : 32
    }
]

function bubbleSort (array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].edad > array[j + 1].edad) {

                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }   
        return array
    }

    console.log(bubbleSort(personas))
