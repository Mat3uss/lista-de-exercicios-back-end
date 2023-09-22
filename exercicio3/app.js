/**********************************************************************************************************************************
* Objetivo: Arquivo de funções para calcular uma tabuada                                                                          *
* Data: 22/09/23                                                                                                                  *
* Autor: Matheus Zanoni                                                                                                           *
* Versão: 1.0                                                                                                                     * 
***********************************************************************************************************************************/

var calcTabuada = require('./modulo/tabuada.js')


var readline = require ('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o valor da primeira tabuada:', function(valorT1){
     let valorTabuada1 = valorT1


     entradaDados.question('Digite o valor da segunda tabuada:', function(valorT2){
        let valorTabuada2 = valorT2


        entradaDados.question('Digite o primeiro multiplicador:', function(valorm1){
            let multiplicador1 = valorm1


            entradaDados.question('Digite o segundo multiplicador:', function(valorm2){
                let multiplicador2 = valorm2


                calcTabuada.calculoTabuada(valorTabuada1, valorTabuada2, multiplicador1, multiplicador2)
                entradaDados.close
            })
        })
     })
})