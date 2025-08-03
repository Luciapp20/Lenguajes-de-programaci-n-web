// Variable que almacena el nombre completo
// Variable que almacena la edad
// Variable que almacena si le gusta programar
let primeravariable = 'Lucía Pardo Pérez';
let segundavariable = 20;
let terceravariable = true;


let persona = {
    nombre: primeravariable,
    edad: segundavariable,
    gustaprogramar: terceravariable,
};

let intereses= ['programación', 'música', 'deportes'];
persona.intereses = intereses;

function mostrarInfo(persona){
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Edad: ${persona.edad}`);
    console.log(`Le gusta programar: ${persona.gustaprogramar}`);
    console.log(`Intereses: ${persona.intereses.join(', ')}`);
}

mostrarInfo(persona);