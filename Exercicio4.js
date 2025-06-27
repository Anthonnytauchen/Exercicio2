function fatorial(num){
    if(num<0){
       return "nao e possivel calcular fatorial"
    }
    if(num ===0 || num === 1){
        return 1
    }

return num * fatorial(num - 1)
}