/*let arrayDeNumeros = [1,2,3, 8, 9, 104, 5, 6, 7, 15];
arrayDeNumeros.invert
let bubbleSort = function(array,string){
    for(let i=0; i < array.length; i++){
        for(let j=0; j < array.length - 1; j++){
            if(string === 'ASC' && array[j] > array[j + 1]){
                    let aux = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = aux 
            }
            else if(string === 'DESC' && array[j] < array[j + 1]){
                    let aux = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = aux 
            }
            else {return 'esta mal escrito'}
        }
    }
    return array
}
function sumaFila (mat,fila) {
    
    let suma = 0

    for (let i = 0; i < mat[fila].length; i++) {          
            suma =+ mat[fila][i]   
            }
            return suma
        }
    console.table(matriz)
    console.log(sumaFila(matriz,1));
  
    */

    let paises = [
        {
          nombre: "Argentina",
          continente: "Sudamérica",
          poblacion: 40000000
        },
      {
          nombre: "Colombia",
          continente: "Sudamérica",
          poblacion: 50372000
        },
     
        {
          nombre: "Brasil",
          continente: "Sudamérica",
          poblacion: 300000000
        },
        {
          nombre: "Etiopía",
          continente: "Africa",
          poblacion: 15000000
        },
        {
          nombre: "Chile",
          continente: "Sudamérica",
          poblacion: 10000000
        }
      ];

    let paisXcontinente = function(array,nroPob){
        let newArray = [];
        for( let i=0; i < array.length; i++){
            if(array[i].poblacion == nroPob){
                newArray.push(array[i])
            }
            else { return newArray }
        }
        return newArray
    }
    console.log(paisXcontinente(paises,10000000))