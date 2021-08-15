//armazenando uma função em uma varevel 
const imprimirSoma = function( a , b ){
    console.log(a+b)
}

imprimirSoma(2,3)

//armazendando uma funcao arrow em uma variavel
const soma = (a,b) =>{
    return a+b
}

console.log(soma(2,7))

//retorno implicito
const subtracao = (a,b) => a-b 
console.log(subtracao(14,16))


//linha unica
const imprimir = a => console.log(a)
imprimir("legal!!!")