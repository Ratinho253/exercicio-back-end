/********************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 * Autor: João Victor Da Silva
 * Data: 10/02/2023
 * Versão: 1.0
 *********************************************************************************/

var readline = require('readline')

var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

entradaDados.question('Digite o nome de seu aluno: \n', function(nomeAluno){
           let nome1 = nomeAluno

    entradaDados.question('Qual sexo: [Masculino | Feminino] \n', function(tipoDeSexo){
        let tipoSexoAluno = tipoDeSexo
        let operacao = tipoDeSexo.toUpperCase()

       entradaDados.question('Digite o nome do Professor: \n', function(nomeProfessor){

        let nome2 = nomeProfessor

            entradaDados.question('Digite o seu sexo: [Masculino | Feminino] \n', function(sexoProfessor){
                let tipoSexoProfessor = tipoDeSexo
                let operacao = sexoProfessor.toUpperCase()

                entradaDados.question('Nome do curso : \n', function(cursoAluno){
                    let curso = cursoAluno

                   entradaDados.question('Nome da disciplina: \n', function(nomeDisciplina){
                       let disciplina = nomeDisciplina

                       entradaDados.question('Nota1 :')
                   })
                })
                
            })
        })

    })

      
})

