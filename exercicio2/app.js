var calcNotas = require('./modulo/média.js')

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o nome do aluno: ', function (nomeA) {
    let nomeAluno = nomeA

    entradaDados.question('Digite o nome do professor: ', function (nomeP) {
        let nomeProfessor = nomeP

        entradaDados.question('Digite o sexo do aluno: ', function (sexoA) {
            let sexoAluno = sexoA

            entradaDados.question('Digite o sexo do professor: ', function (sexoP) {
                let sexoProfessor = sexoP

                entradaDados.question('Digite o nome do curso: ', function (nomeC) {
                    let nomeCurso = nomeC

                    entradaDados.question('Digite o nome da disciplina: ', function (nomeD) {
                        let nomeDisciplina = nomeD

                        entradaDados.question('Digite a primeira nota: ', function (n1) {
                            let nota1 = n1

                            entradaDados.question('Digite a segunda nota: ', function (n2) {
                                let nota2 = n2

                                entradaDados.question('Digite a terceira nota: ', function (n3) {
                                    let nota3 = n3

                                    entradaDados.question('Digite a quarta nota: ', function (n4) {
                                        let nota4 = n4

                                        entradaDados.question('Digite a nota do exame: ', function (nE) {
                                            let notaExame = nE



                                            calcNotas.calcularNotas(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, notaExame)

                                            entradaDados.close
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})