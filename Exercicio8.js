const totaisPorCliente = vendas.reduce((acumulador, vendas)=>{
    const {cliente,total} = venda
     if(acumulador[cliente]){
        acumulador[cliente]+= total
     }else{
        acumulador[cliente]=total
     }
     return acumulador
},{})