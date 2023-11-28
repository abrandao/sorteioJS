# SORTEIO JS
Sorteio JS é um projeto desenvolvido com propósitos estudantis. Seu principal objetivo é simular quais as chances temos de vencer em sorteios. 

## Modelo 1 em 1 milhão
Neste primeiro modelo a ser testado, o participante vai informar qual o valor que tem para apostar, no total. 
Em seguida o valor do ticket.
Tickets serão gerados baseados no valor a participar dividido pelo preço do ticket, atribuindo-lhes códigos aleatórios.

Exemplo:
  - Valor a participar: R$10,00
  - Preço do ticket: R$2,00
  - Tickets gerados: 967443, 218538, 034276, 441187,713944

Em seguida é realizado um sorteio onde um código é gerado e comparado com o código dos tickets. Caso não seja comtemplado, outro sorteio é realizado e assim sucessivamente até que um dos tickets seja contemplado.
Em seguida é informado quantas tentativas foram necessárias até que um ddos tickets fosse contemplado e quanto dinheiro foi gasto até que isso acontecesse.