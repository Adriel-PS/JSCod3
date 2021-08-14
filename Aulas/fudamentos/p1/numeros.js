const peso1 = 1.0
const peso2 = Number('2.2')

console.log(peso1)
console.log(typeof peso1)
console.log(Number.isInteger(peso1))
console.log()

console.log(peso2)
console.log(typeof peso2)            //typeof verifica o tipo do dado 
console.log(Number.isInteger(peso2)) //isInteger verifica se o numero é inteiro 
console.log()

const avaliação1 = 9.871
const avaliação2 = 6.871

const total = avaliação1 * peso1 + avaliação2 * peso2
const media = total /(peso1+peso2)

console.log(media.toFixed(2))   //toFixed limita a quantidade de casas decimais que irao aparecer
console.log()
console.log(media.toString())   //toStrinfg transforma um numero em string
console.log(typeof media.toString())   