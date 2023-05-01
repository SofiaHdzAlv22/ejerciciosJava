let n1, n2, n3
n1= Number(prompt('Ingrese el número 1'))
n2= Number(prompt('Ingrese el número 2'))
n3= Number(prompt('Ingrese el número 3'))

if (n1>n2 && n1>n3){
    alert('El ' + n1 + ' es mayor que el ' + n2 + ' y el ' + n3)
} else if (n2>n1 && n2>n3){
    alert('El ' + n2 + ' es mayor que el ' + n1 + ' y el ' + n3)
} else if (n3>n1 && n3>n2){
    alert('El ' + n3 + ' es mayor que el ' + n1 + ' y el ' + n2)
}