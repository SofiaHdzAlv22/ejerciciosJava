let placa1, pasajeros1, pasaje1, precio1
let placa2, pasajeros2, pasaje2, precio2

placa1 = prompt('Ingrese la placa número 1')
pasajeros1 = Number(prompt('Ingrese el número de pasajeros del bus 1'))
pasaje1 = Number(prompt('Ingrese el valor del pasaje del bus 1'))

placa2 = prompt('Ingrese la placa número 2')
pasajeros2 = Number(prompt('Ingrese el número de pasajeros del bus 2'))
pasaje2 = Number(prompt('Ingrese el valor del pasaje del bus 2'))

precio1 = (pasajeros1*pasaje1)
precio2 = (pasajeros2*pasaje2)

if (precio1>precio2){
    alert('El bus con la placa número ' + placa1 + ' ha recogido más dinero, con un total de ' + precio1)
} else {
    alert('El bus con la placa número ' + placa2 + ' ha recogido más dinero, con un total de ' + precio2)
}