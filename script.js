function calculaAposta() {
  let precoTicket = document.getElementById('ticket').value
  let valorApostado = document.getElementById('valorApostado').value

  let ticketsGerados = geraTickets(precoTicket, valorApostado)
  
}

function geraTickets(precoTicket, valorApostado) {
  let qtdTickets = valorApostado / precoTicket
  
  let ticketsGerados = []
  for (i = 0; i < qtdTickets; i++) {
    ticketsGerados.push(Math.floor(Math.random() * (999999 - 1) + 1))
  }
  sorteio(qtdTickets, ticketsGerados)
}

function sorteio(qtdTickets, ticketsGerados) {
  let numeroSorteado = Math.floor(Math.random() * (999999 - 1) + 1)
  for (i = 0; i < qtdTickets; i++) {
    if (ticketsGerados[i] == numeroSorteado) {
      console.log(`Você foi sorteado com o número: ${ticketsGerados[i]}`)
    } else {
      console.log(`Você não foi sorteado.`)
    }
  }
}