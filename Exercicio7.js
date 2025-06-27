function obterNomesOrdenadosPorPreco(produtos){
 return[...produtos]
    .sort((a,b)=> a.preco - b.preco)
    .map(produto => produto.nome)
 
}