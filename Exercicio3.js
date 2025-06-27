function extrairPalavrasUnicas(frase) {
    let palavras = frase.toLowerCase().split(" ")
    let arrayDePalavras=[]
   
    for (const palavra of palavras) {
      if(!arrayDePalavras.includes(palavra)){
        arrayDePalavras.push(palavra)
      }
    }
    return arrayDePalavras
}
let minhasPalavras= "Ola galeria do youtube"
let verificar= extrairPalavrasUnicas(minhasPalavras)
console.log(verificar)