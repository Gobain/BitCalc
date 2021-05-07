function CalcProfit(){

  var valorAplicado = document.getElementById("BRL").value * 1.0
  var precoDoBTC = document.getElementById("BTCPrice").value * 1.0
  var lucro = document.getElementById("Profit").value * 1.0
  //window.alert(lucro)

  //valor descontando taxa da Bitpreço => 0.2%
  valorDescontado = valorAplicado - (valorAplicado * 0.2 / 100)
  //window.alert(valorDescontado)

  var btcRecebido = ((valorDescontado) / (precoDoBTC / 100_000_000.00)) / 100_000_000.00

  //Cálculo do novo preço de venda do Bitcoin
  var novoPrecoBTC = (valorAplicado + (valorAplicado * lucro / 100)) / btcRecebido
  //window.alert("novo preco BTC " + novoPrecoBTC)

  //Adição de 1 centavo para evitar erros
  novoPrecoBTC += 0.01

  document.write("<p>Você deve vender " + btcRecebido + " BTC " + "na Walltime por: " + novoPrecoBTC + " Reais </p>")
}