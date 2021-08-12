var numeros = []

validacao = true

while(validacao){
    x = numeros.length
    numeros.push(x)
    console.log("numero " + x +" adcionado")
    if(numeros.length > 30){
        validacao = false
    }
}

console.log(numeros)
console.log(validacao)