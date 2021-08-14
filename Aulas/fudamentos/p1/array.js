//declarando um array
var valores = [1,2,3,4,5,6,7,8,9,10]

//imprimindo um array 
console.log("os vetores sao "+valores)

//imprimindo um valor indexado do array
console.log("o numero é "+ valores[2])

//imprimindo um valor nao valido
console.log(valores[10])

//add um valor em um array por indice
valores[10]=20
console.log(valores) 

//verificando tamanho do array
console.log(valores.length)

// add um valor em array
valores.push("adriel")
console.log(valores)

//elimina o ultimo valor do array
valores.pop()
console.log(valores)

//delete - retira o valor selecionado no index
delete valores[0]
console.log(valores)

//verificando o tipo 
console.log(typeof valores)