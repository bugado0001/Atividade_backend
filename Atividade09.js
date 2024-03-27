/*9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número. */

const prompt = require('prompt-sync')();
let numeroUm = Number(prompt(console.log("Insira o primeiro numero:")))
let numeroDois = Number(prompt(console.log("Insira o segundo numero:")))
let soma = (numeroUm + numeroDois) * numeroUm;

console.log(`Resultado: ${soma}`)

