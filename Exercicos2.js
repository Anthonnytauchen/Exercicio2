function ehDataValida(dia,mes,ano){
   dia = parseInt(dia)
   mes = parseInt(mes)
   ano = parseInt(ano)
    if(ano.toString().length ==! 4) return false
    if(mes > 12 || mes< 1) return false

    const validaDia = new Date(ano,mes, 0).getDate()
    if(dia< 1 || dia > validaDia) return false
   
   
    return true
}

console.log(ehDataValida(41,2,20246))