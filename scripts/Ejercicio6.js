let nombre, tipo, fijo, temporal, salarioN
let horasF, costoH, deducciones, bonificaciones

nombre = prompt('Ingrese su nombre')
tipo = prompt('Ponga si es fijo o temporal')
horasF=Number(prompt('Ingrese el número de horas que trabajó'))
costoH=Number(prompt('Ingrese el costo de cada hora'))
deducciones=Number(prompt('Ponga sus deducciones'))
bonificaciones=Number(prompt('Ponga sus bonificaciones'))

salarioN = (horasF * costoH)+(bonificaciones)-(deducciones)

if (tipo){
    alert('el trabajador '  + nombre + 'tiene un salario de ' + salarioN)
} else if (tipo){
    alert('el trabajador '  + nombre + 'tiene un salario de ' + salarioN)
}