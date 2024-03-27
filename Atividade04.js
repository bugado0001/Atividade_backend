/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
 Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%,
 escrever um script para ler o custo de fábrica de um carro,
 calcular e escrever o custo final ao consumidor.*/

 const prompt = require("prompt-sync")()

 let custoFabrica = Number(prompt(console.log("Insira o custo da fabrica:")))
 let custoDistribuidora = custoFabrica/100 * 28;
 let custoImposto = custoFabrica/100 * 45;

 console.log (
`Custo da fabricação: R$${custoFabrica.toFixed(2)} \n
Custo dos impostos : R$${custoImposto.toFixed(2)} \n
Custo da distribuidora: R$${custoDistribuidora.toFixed(2)} \n

Custo final ao consumidor: R$${(custoFabrica + custoImposto + custoDistribuidora).toFixed(2)}

`


 )