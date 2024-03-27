/*1. Faça um Programa que receba quatro notas de 
um aluno, calcule e imprima a média aritmética das notas e 
a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0. */
const prompt = require('prompt-sync')();
let nota1 = parseFloat(prompt("Digite a primeira nota:"))
let nota2 = parseFloat(prompt("Digite a segunda nota:"))
let nota3 = parseFloat(prompt("Digite a terceira nota:"))
let nota4 = parseFloat(prompt("Digite a quarta nota:"))

let soma = nota1 + nota2 + nota3 + nota4; 
let media = soma / 4; 

if(media >= 7){
console.log(`Sua media foi ${media} e você estar aprovado`)
  
}else{

  console.log( `Sua media foi ${media} e você estar reprovado`
  )
}