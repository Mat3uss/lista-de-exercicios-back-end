var function calcImc = require('./modulo/calculoImc.js')

var readline = require ('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o peso em kg: ', function(pesoU){
    let peso = pesoU

    entradaDados.question('Digite a altura em m: ', function(alturaU){
        let altura = alturaU

        calcImc.calcularImc(peso, altura)

       

    })
    
})
entradaDados.close
