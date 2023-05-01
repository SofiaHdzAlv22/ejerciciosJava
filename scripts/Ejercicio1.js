let edadh1, edadh2, nombreh1, nombreh2;

edadh1 = Number(prompt('Ingrese el edad del hermano número 1'))
edadh2 = Number(prompt('Ingrese la edad del hermano número 2'))
nombreh1 = prompt('Ingrese el nombre del hermano número 1')
nombreh2 = prompt('Ingrese el nombre del hermano número 2')

if (edadh1 > edadh2) {
    alert('El hermano mayor es: '+ nombreh1)
}else {
    alert('El hermano mayor es: ' + nombreh2)
}