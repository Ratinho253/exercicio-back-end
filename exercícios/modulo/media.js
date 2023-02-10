/********************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 * Autor: João Victor Da Silva
 * Data: 10/02/2023
 * Versão: 1.0
 *********************************************************************************/



const mediaAluno = function (nota1, nota2, nota3, nota4, media) {


    media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4

    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        console.log('Erro vc não digitou um valor')
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('Erro: não pode utilizar texto')
    } else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
        console.log('Digite um valor menor ou igual a 100')
    } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        console.log('Digite um valor maior que 0 ou igual a 0')
    } else if (media >= 70) {
        console.log('aprovado')
    }else if (media >= 50 && media <= 69) {
        exame()
        console.log('exame');
    }else if (media <= 50) {
        console.log('reprovadwwwwwwwwwwwo')
    }
}
const  exame = function (mediaAluno, notaExame){
    let exame = (mediaAluno + notaExame) /2

    if(exame >= 60){
        console.log('aprovado')
    }else if( exame <= 59) {
        console.log('reprovado')
    }
}

mediaAluno(50, 50, 50, 60)
exame(53, 80)

module.exports = {
    mediaAluno
}

