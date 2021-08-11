const escola = "Cod3r"

//seleciona a letra no indece escolhido dentro dos parenteses 
console.log(escola.charAt(4))

//caso nao encontre nao retonar erro
console.log(escola.charAt(9))

//apresenta o numero selecionado na tabela unicode
console.log(escola.charCodeAt(3))

//retonar o index do valor escolhido 
console.log(escola.indexOf("o"))

//retorna os valores apartir do index selecionado 
console.log(escola.substring(1))

//retonar do index selecionado ao segundo index selecionado eliminado o ultimo index
console.log(escola.substring(0,3))

//concat , concatena os valores selecionados 
console.log("esola".concat(escola.concat("!")))

//subistui o valor selecionado pelo segundo valor
console.log(escola.replace(3,"e"))

//converte uma variavel com virgula para um array
console.log("ana,maria,pedro".split(","))

