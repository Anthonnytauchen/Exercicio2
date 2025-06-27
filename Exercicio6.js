function memorize(fn){
let cache={}
return function(...args){
    const key =JSON.stringify(args)
    if(cache[key]){
        console.log(`Bucando por resultado do cache para os argumentos ${key}`)
        return cache[key]
    }else{
        console.log(`Executando o calculo pela primeira vez; ${key}`)

        const result = fn.apply(this,args)

        cache[key]= result
        return result
    }
}
}