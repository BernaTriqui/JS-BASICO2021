var sacha = {
    nombre: 'Sacha',
    apellido: 'ramirez',
    edad: 8,
    ingenierio: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirEdad(persona){
    console.log(`${persona.nombre} es: `)
    if (persona.edad >= 18) {
        console.log('Mayor de edad')
        
    }else{
        console.log('Menor de edad')
    }
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)

    if (persona.ingenierio) {
        console.log('Ingeniero')
        
    }

    if (persona.cocinero) {
        console.log('Cocinero')
        
    }
    if (persona.cantante) {
        console.log('Cantante')
        
    }

    if (persona.dj) {
        console.log('Dj')
        
    }

    if (persona.guitarrista) {
        console.log('Guitarrista')
        
    }

    if (persona.drone) {
        console.log('Copiloto de Drone')
        
    }

    
    
}
imprimirProfesiones(sacha)
imprimirEdad(sacha)