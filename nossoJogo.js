/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    

    console.log(`Boas vindas ao jogo de BlackJack!`)

    const carta1 = comprarCarta()
    const carta2 = comprarCarta()
    const carta3 = comprarCarta()
    const carta4 = comprarCarta()
    
    
    

    if(confirm(`Quer iniciar uma nova rodada?`)){
   
      console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - ${carta1.valor + carta2.valor}`)
         
      console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} - ${carta3.valor + carta4.valor}`)
   {
   
   } if (carta1.valor + carta2.valor > carta3.valor + carta4.valor) 
      
   {
      console.log(`Usuario ganhou!`)
   
   } if (carta1.valor + carta2.valor < carta3.valor + carta4.valor) 
      
   {
      console.log(`Computador ganhou!`)
      
   } if (carta1.valor + carta2.valor === carta3.valor + carta4.valor)
   
   {
      console.log(`Empate!`)
   }
   
   } else {
      console.log(`O jogo acabou.`)
   }