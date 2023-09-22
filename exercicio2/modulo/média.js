const calcularNotas = function  (alunoN, professorN, alunoS, professorS, cursoN, disciplinaN, n1, n2, n3, n4, nE) {

    let nomeAluno = alunoN
    let nomeProfessor = professorN
    let sexoAluno = alunoS
    let sexoProfessor = professorS
    let nomeCurso = cursoN
    let nomeDisciplina = disciplinaN
    let nota1 = n1
    let nota2 = n2
    let nota3 = n3
    let nota4 = n4
    let status = false
    let exame = nE
    var situacao
    String(situacao)
    var aluno
    String(aluno)
    var professor
    String(professor)


    if (nomeAluno == ' ' || nomeProfessor == ' ' || sexoAluno == ' ' || sexoProfessor == ' ' || nomeCurso == ' ' || nomeDisciplina == ' ' || nota1 == ' ' || nota2 == ' ' || nota3 == ' ' || nota4 == ' ') {
        console.log('ERRO: Todos os campos devem ser preenchidos')
    }
    else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('ERRO: Todas as notas devem ser preenchidas com números')
    }
    else if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
        console.log('ERRO: Todas as notas devem estar entre 0 e 100')
    }
    else {
        let media = (nota1 + nota2 + nota3 + nota4) / 4

        if (sexoAluno == "feminino" || sexoAluno == "Feminino") {
            aluno = "a aluna"
         }
        else {
            aluno = "o aluno"
        }
        if (sexoProfessor == "feminino" || sexoProfessor == "Feminino") {
            professor = "Professora:"

        } else {
            professor = "Professor:"
        }

        if (media < 50) {
            if (sexoAluno == "feminino" || sexoAluno == "Feminino") {
                situacao = "reprovada"
            } else
                situacao = "reprovado"

            console.log('\n' + 'RELATÓRIO DO ALUNO:')
            console.log('\n' + aluno + ' ' + nomeAluno + ' foi ' + situacao + ' na disciplina ' + nomeDisciplina + '.')
            console.log('Curso:' + nomeCurso)
            console.log(professor + nomeProfessor)
            console.log('Notas d' + aluno + ': ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4)
            console.log('Média final:' + media)
        }
        else if (media >= 50 && media <= 69) {
            situacao = "exame"

            if (exame > 60) {
                if (sexoAluno == "feminino" || sexoAluno == "Feminino") {
                    situacao = "aprovada"
                } else
                    situacao = "aprovado"
            }
            else if (exame <= 60) {
                if (sexoAluno == "feminino" || sexoAluno == "Feminino") {
                    situacao = "reprovada"
                }
                situacao = "reprovado"
            }
            console.log('\n' + 'RELATÓRIO DO ALUNO:')
            console.log('\n' + aluno + ' ' + nomeAluno + ' foi ' + situacao + ' na disciplina ' + nomeDisciplina + '.')
            console.log('Curso:' + nomeCurso)
            console.log(professor + nomeProfessor)
            console.log('Notas d' + aluno + ': ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4)
            console.log('Média final:' + media)
            console.log('Média final do exame:' + exame)
        }
        else {
            if (sexoAluno == "feminino" || sexoAluno == "Feminino") {
                aluno = "a aluna"
                situacao = "aprovada"

            }
            else {
                aluno = "o aluno"
                situacao = "aprovado"
            }
            if (sexoProfessor == "feminino" || sexoProfessor == "Feminino") {
                professor = "Professora:"

            } else {
                professor = "Professor:"
            }

            console.log('\n' + 'RELATÓRIO DO ALUNO:')
            console.log('\n' + aluno + ' ' + nomeAluno + ' foi ' + situacao + ' na disciplina ' + nomeDisciplina + '.')
            console.log('Curso:' + nomeCurso)
            console.log(professor + nomeProfessor)
            console.log('Notas d' + aluno + ': ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4)
            console.log('Média final:' + media)
            status = true





        }
        return status
    }
    module.exports = {
        calcularNotas
    }

}