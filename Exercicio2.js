function gerarNumeroAleatorio(min, max) {
  min = Math.ceil(min);   
  max = Math.floor(max);  
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jogoAdivinha() {
    let randomInt = gerarNumeroAleatorio(1,100)
    let contadorTentativas = 0;
    let number;
    alert("Bem vindo ao jogo de adivinhação, tente adivinhar o número gerado de 1 a 100")

    while(number != randomInt){
        number =parseInt(prompt("Digite seu chute"))
        if (number===null){
          alert(`numero e null digite novamente`)
          jogoAdivinha()
        }
   if (number>randomInt) {
          alert(`chute maior q o numero`)
          contadorTentativas++                       
         }
    if(number<randomInt){
          alert(`Numero menor `)
          contadorTentativas++
         }
        }
        alert(`Voce acertou o numero ${number} com ${contadorTentativas}`)
}
jogoAdivinha()