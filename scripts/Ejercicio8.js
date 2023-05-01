let nombre, n1, n2, n3, n4, total

nombre = prompt('Ingrese el nombre del estudiante')
n1=Number(prompt('Ponga la nota 1'))
n2=Number(prompt('Ponga la nota 2'))
n3=Number(prompt('Ponga la nota 3'))
n4=Number(prompt('Ponga la nota 4'))

total=(n1+n2+n3+n4)/4

if(total <= 2.9){
    alert('El estudiante pierde con una nota de ' + total)
} else if (total >= 3.0){
    alert('El estudiante gana con una nota de ' + total)
}