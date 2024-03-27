/*
8. Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
OBS: V = PI * Raio^2 * Altura */


const prompt = require('prompt-sync')();

let raio = Number(prompt(console.log(`Insira o raio:`)))
let altura = Number(prompt(console.log(`Insira o altura:`)))
let pi = Math.PI;
let volume = pi * raio**2*altura

console.log(`Volume = ${volume.toFixed(2)}`)