/*function menciona (texto,palabra){
    let frase = texto
    let frase1 = frase.indexOf(palabra)
    if (frase1 >=0){
        return true
    }
    else {return false}
 }
 console.log (menciona("Hola mundo","Hola"))
 console.log(menciona("Se dice de mi","mi"))
 console.log(menciona("Estoy programando","mundo"))
*/
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (horas){
        return "Energia " +(this.energia -= (horas*5)) +
        " Experiencia " + (this.experiencia += (horas*2))
    }
};


console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
console.log(deportista.entrenarHoras(5));
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);