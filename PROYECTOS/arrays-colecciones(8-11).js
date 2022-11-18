/*

let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])

let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
"Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
console.log(grupoDeAmigos[5])

let str = "un string cualquiera"

let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str ]
console.log(arrayAleatorio[arrayAleatorio.length - 1])

*/




let peliculas = ["star wars","totoro","pulp ficcion","la vida es bella"]
function mayusculas (peliculas){
for (let i=0 ; i < peliculas.length ; i++){
    peliculas[i] = peliculas[i].toUpperCase()    
}
}

let pelis2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function mezclar (peliculas,pelis2){
    for (let i = 0 ; i < pelis2.length ; i++){
       peliculas.push(pelis2[i])
    }
    return peliculas
}

mezclar(peliculas,pelis2)
mayusculas(peliculas)
console.log(peliculas)

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
/*
for (let i = 0 ; i < asiaScores.length ; i++){
    if(asiaScores[i] === euroScores[i]){
        console.log("Los scores de " + peliculas[i] + " son iguales")
    }
    else{
        console.log("Los scores de " + peliculas[i] +  " son distintos ")
    }
}
*/