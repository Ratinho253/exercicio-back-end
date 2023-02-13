/********************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 * Autor: João Victor Da Silva
 * Data: 10/02/2023
 * Versão: 1.0
 *********************************************************************************/

var calcularMedia = require('./modulo/media.js')

var readline = require('readline')

var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

entradaDados.question('Digite o nome de seu aluno: \n', function(nomeAluno){
           let nome1 = nomeAluno

    entradaDados.question('Qual sexo: [Masculino | Feminino] \n', function(tipoDeSexo){
        let tipoSexoAluno = tipoDeSexo
        // let operacao = tipoDeSexo.toUpperCase()

       entradaDados.question('Digite o nome do Professor: \n', function(nomeProfessor){

        let nome2 = nomeProfessor

            entradaDados.question('Digite o seu sexo: [Masculino | Feminino] \n', function(sexoProfessor){
                let tipoSexoProfessor = tipoDeSexo
                // let operacao = sexoProfessor.toUpperCase()

                entradaDados.question('Nome do curso : \n', function(cursoAluno){
                    let curso = cursoAluno

                   entradaDados.question('Nome da disciplina: \n', function(nomeDisciplina){
                       let disciplina = nomeDisciplina

                       entradaDados.question('Nota1 : \n', function(nota1){
                            let valor1 = nota1.replace(',' , '.')

                            entradaDados.question('Nota2 : \n', function(nota2){
                                let valor2 = nota2.replace(',' , '.')

                                entradaDados.question('Nota3 : \n', function(nota3){
                                    let valor3 = nota3.replace(',' , '.')

                                    entradaDados.question('Nota4 : \n', function(nota4){
                                        let valor4 = nota4.replace(',' , '.')
                                        let media 

                                        mediaAluno = calcularMedia.mediaAluno(valor1, valor2, valor3, valor4)

                                        if ( mediaAluno >= 50 && mediaAluno <= 69){
                                            console.log('O aluno precia fazer um exame :')
                                            entradaDados.question('Digite uma nota do exame : \n', function(notaExame){
                                               
                                                
                                                
                                            })
                                        }
                                        
                                        

                                        

                                        
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

