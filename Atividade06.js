/*6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. 
Escrever um script que leia o número de carros por ele vendidos,
 o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido.
 Calcule e escreva o salário final do vendedor.*/ 
 
 const prompt = require("prompt-sync")()

 let numeroCarro = Number(prompt(console.log("Insira quantos carros você vendeu: ")))
 let valorComissao = Number(prompt(console.log("Insira o valor da comissão: ")))
 let valorTotalVendas = Number(prompt(console.log("Insira o valor total das suas vendas:")))
 let valorSalario = Number(prompt(console.log("Insira o valor do seu salario: ")))

 let cincoPorcento = (valorTotalVendas/100) * 5
 let totalComissao = valorComissao * numeroCarro;
 let salarioFinal = valorSalario + cincoPorcento + totalComissao;

console.log(`Salário final: R$${salarioFinal.toFixed(2)}`);