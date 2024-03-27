/*2. Escreva um script para ler o número total de eleitores de um município, 
o número de votos brancos, nulos e válidos. Calcular e escrever 
o percentual que cada um representa em relação ao total de eleitores. */

const prompt = require("prompt-sync")();

let eleitoresTotal = Number(prompt(console.log("INSIRA O NUMERO DE ELEITORES!")))
let votoBranco = Number(prompt(console.log("INSIRA O NUMERO DE VOTOS BRANCOS")))
let votoNulo = Number(prompt(console.log("INSIRA O NUMERO DE VOTOS NULOS")))
let votoValido =  eleitoresTotal - (votoBranco + votoNulo)  ; 

let percentualBranco = Math.floor(votoBranco/eleitoresTotal * 100) 
let percentualNulo = Math.floor(votoNulo/eleitoresTotal * 100) 
let percentualValido = Math.floor(votoValido/eleitoresTotal * 100) 

console.log(`Percetual de votos brancos equivalem a ${percentualBranco}% dos eleitores \n
Percetual de votos Nulo equivalem a ${percentualNulo}% dos eleitores \n
Percetual de votos validos equivalem a ${percentualValido}% dos eleitores \n`)