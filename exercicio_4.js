//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. 
//Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let km_percorrido = 300
let dias_locacao = 5
const km = 0.15
const carro = 60

totalKm = km_percorrido * km * dias_locacao

totalCarro = dias_locacao * carro 

vlrApagar = totalKm + totalCarro
console.log(`O preço é pagar é de ${vlrApagar}`) // O resultado é 525