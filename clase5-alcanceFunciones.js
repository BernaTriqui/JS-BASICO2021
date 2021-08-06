var sacha = {
    nombre: 'Sacha',
    apellido: 'HKKGHggd',
    edad: 28
}
var dario = {
    nombre: 'dario',
    apellido: 'ramirez',
    edad: 33
}

var ejemplo1 = {
    nombre: 'berna',
    edad: 77
}

function imprimirNombreEnMayusculas({ nombre }){
    
    console.log(nombre.toUpperCase())
}

function saludo(persona){
    var { nombre, edad } = persona
    console.log(`Hola mi nombr es ${nombre} y tengo ${edad} años`);

}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({ nombre: 'jajsa'})
saludo(ejemplo1);

function cumpleanos(persona) {
    persona.edad += 1
}