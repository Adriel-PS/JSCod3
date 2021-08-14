let valor  // undefined - variavel nao inicilizada 
console.log(valor)

valor = null // valor null - ausencia de valor
console.log(valor)

const produto = {}
console.log(produto.preco) //valor indefinido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(produto)

produto.preco = null 
console.log

delete produto.preco
console.log(produto)