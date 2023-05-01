let edad
 edad = Number(prompt('Ingrese la edad'))
if (edad < 10){
    alert('Es un niño')
} else if (edad >= 10 && edad < 15){
    alert('Es un preadolescente')
} else if (edad >= 15 && edad < 18){
    alert('Es un adolescente')
} else if (edad >= 18 && edad < 50){
    alert('Es un adulto')
} else if (edad >= 50){
    alert('Es un adulto mayor')
}