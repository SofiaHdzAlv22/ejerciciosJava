let codigo, articulos, valor, descuento,total

codigo = Number (prompt('Ingrese el código del artículo'))
articulos = Number (prompt('Ingrese el número de artículos'))
valor = Number (prompt('Ingrese el valor total'))

total = (valor - descuento)

if (articulos >= 50){
    descuento = valor * 0.10
    alert('Su descuento es de ' + descuento + ' Y su total a pagar es de ' + total )
} else if (articulos <= 49){
    descuento = 0
    alert('Su total a pagar es de ' + valor)
}
