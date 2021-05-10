var valorAplicado
var wallBTC
var bitBTC
var profit
var showResult
var btcRecebido

function start() {

  valorAplicado = document.getElementById("BRL").value * 1.0
  //wallBTC = document.getElementById("WallBTC").value * 1.0
  bitBTC = document.getElementById("BitBTC").value * 1.0
  profit = document.getElementById("Profit").value * 1.0


  if (wallBTC && bitBTC != null) {
   calcProfit()
  }
  else if (valorAplicado && bitBTC && profit != null) {
    calcWallBTC()
  }

}

function calcWallBTC() {

  //valor descontando taxa da Bitpreço => 0.2%
  valorDescontado = valorAplicado - (valorAplicado * 0.2 / 100)


  btcRecebido = ((valorDescontado) / (bitBTC / 100_000_000.00)) / 100_000_000.00

  //Cálculo do novo preço de venda do Bitcoin
  wallBTC = (valorAplicado + (valorAplicado * profit / 100)) / btcRecebido

  //Adição de 1 centavo e 1 satoshi para evitar erros
  wallBTC += 0.01
  btcRecebido += 0.00000001

  //document.getElementById('WallBTC').value = wallBTC.toFixed(2)
  showResult = document.getElementById('QuantBTC')
  showResult.innerHTML = "Voce dever vender: " + "<output id=\"receivedBTC\">" + btcRecebido.toFixed(8) + " BTC "  + "Na Walltime por: R$" + wallBTC.toFixed(2)

  //document.getElementById('QuantBTC').appendChild(btcRecebido.toFixed(8))
}

function calcProfit() {

  showResult = ((wallBTC - bitBTC) * 100) / bitBTC
  document.getElementById('Profit').value = showResult.toFixed(2) + "%"
}

function copyBTC(){
  document.getElementById('receivedBTC').select()

}
