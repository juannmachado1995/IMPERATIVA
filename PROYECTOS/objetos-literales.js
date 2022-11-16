//Crear Objetos
//Acceder a sus atributos (SON LOS DATOS DENTRO DEL OBJETO)
//Crear metodos de objetos e invocarlos(UN METODO ES UNA FUNCION QUE ESTA DENTRO DEL OBJETO)

//OBJETO LITERAL

let persona = {
    nombre : "Ayelen",
    edad : 26,
    saludar : function () {
        return "Hola, como estas?"
    }
}

//PARA INVOCAR ALGUN DATO DENTRO DEL OBJETO 
console.log(persona.nombre)

//PARA INVOCAR A LA FUNCION DENTRO DEL OBJETO LITERAL
//UN METODO DE UN OBJETO LITERAL, ES UNA FUNCION DENTRO DEL OBJETO LITERAL
console.log(persona.saludar())

//

//EJEMPLO 2 

let persona2 = {
    nombre: "Juan Pablo",
    edad: 29,
    esMayorDeEdad: true
}

//PARA MODIFICAR UN DATO
persona2.nombre = "Martin"
//PARA AGREGAR UN NUEVO DATO DENTRO DE UN OBJETO LITERAL
persona2.Profesion = "Programador"

console.log(persona2)

//EJERCICIO CON ARREGLOS Y OBJETOS

let arregloDeObjetos = function (numero){
    let arreglo = [];
    
    for (let i=1 ; i<=numero ; i++){

        let obj = {
            valor : i
        }

        arreglo.push(obj);
    }

    return arreglo;
    }

    console.log(arregloDeObjetos(5))
