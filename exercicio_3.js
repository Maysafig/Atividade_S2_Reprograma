//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago

let vlr_jantar = 100    

const taxa = 0.10

let vlr_da_taxa = vlr_jantar * taxa

console.log(`O valor da taxa é de ${vlr_da_taxa}`) // O valor é de 10

let vlr_final = vlr_jantar + vlr_da_taxa

console.log(`O valor a ser pago é de ${vlr_final}`) //O valor é de 110