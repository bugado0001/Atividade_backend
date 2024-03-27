/*3. Escreva um script para ler o salário mensal atual 
de um funcionário e o percentual de reajuste.
 Calcular e escrever o valor do novo salário. */


const prompt = require("prompt-sync")()

let salario = Number(prompt(console.log("Insira o seu salario: ")))
let percentual = Number(prompt(console.log("Insira o percetual de reajuste: ")))
let reajuste = (salario/100) * percentual ;
let salarioFinal = salario + reajuste;

console.log(`Você agora tem o salario de R$${salarioFinal} \n Você estar recebendo R$${reajuste} a mais`)