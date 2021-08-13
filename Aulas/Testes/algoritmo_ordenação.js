//declarando as veriaveis 
var ordem = [6,7,5,4,8,3]
var val = true
var contador = 0
var num = 0

console.log("fora de ordem : " + ordem)

while(val){
    
    //ordenando 
    if(ordem[num+1] < ordem[num] ){
        var aux = ordem[num] 
        ordem[num] = ordem[num+1]
        ordem[num+1] = aux
    }
    
    //reiniando o ciclo
    num = num + 1
    if(contador % 6 == 0){
        num = 0        
    }
    if(contador == 60){
        break
    }
    contador = contador+1
}
console.log("processando...")
console.log("em ordem : "+ordem)