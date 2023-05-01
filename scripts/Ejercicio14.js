let n1, n2, n3, n4, definitiva, notaC

n1 = Number(prompt('Ingrese la nota 1'))
n2 = Number(prompt('Ingrese la nota 2'))
n3 = Number(prompt('Ingrese la nota 3'))
n4 = Number(prompt('Ingrese la nota 4'))
 
definitiva=(n1+n2+n3+n4)/4
if (definitiva >= 4.5){
    notaC="E"
    alert('Su definitiva es de ' + definitiva + ' y su nota cualitativa es de ' + notaC)
} else if (definitiva >= 4.0 && definitiva <= 4.5){
    notaC="S"
    alert('Su definitiva es de ' + definitiva +  ' y su nota cualitativa es de ' + notaC)
} else if (definitiva >= 3.5 && definitiva < 4.0){
    notaC="B"
    alert('Su definitiva es de ' + definitiva +  ' y su nota cualitativa es de ' + notaC)
} else if (definitiva >= 3.0 && definitiva < 3.5){
    notaC="A"
    alert('Su definitiva es de ' + definitiva +  ' y su nota cualitativa es de ' + notaC)
} else if(definitiva >= 2.0 && definitiva < 3.0){
    notaC="D"
    alert('Su definitiva es de ' + definitiva +  ' y su nota cualitativa es de ' + notaC)
} else if (definitiva < 2.0){
    notaC="I"
    alert('Su definitiva es de ' + definitiva +  ' y su nota cualitativa es de ' + notaC)
}