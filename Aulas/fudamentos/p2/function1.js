//FUNÇÃO SEM RETORNO
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(1,2)
imprimirSoma(35,14)

//FUNÇÂO COM RETORNO

function soma(a,b=2){
    return a+b
}

//informando os dados
const a = 16
const b = 25 
x = soma(a , b)
console.log(x)

//informando apenas um dado 
console.log(soma(2))