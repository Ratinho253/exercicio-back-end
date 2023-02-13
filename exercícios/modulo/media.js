/********************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 * Autor: João Victor Da Silva
 * Data: 10/02/2023
 * Versão: 1.0
 *********************************************************************************/



const mediaAluno = function ( nota1, nota2, nota3, nota4, ) {

    let n1 = Number(nota1)
    let n2 = Number(nota2)
    let n3 = Number(nota3)
    let n4 = Number(nota4)

    media = (parseFloat( n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4

    if ( n1 == '' || n2 == '' || n3 == '' || n4 == '') {
        console.log('Erro vc não digitou um valor')
    } else if (isNaN( n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        console.log('Erro: não pode utilizar texto')
    } else if ( n1 > 100 || n2 > 100 || n3 > 100 || n4 > 100) {
        console.log('Digite um valor menor ou igual a 100')
    } else if ( n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0) {
        console.log('Digite um valor maior que 0 ou igual a 0')
    } else if (media >= 70) {
        // console.log('aprovado')
        return media
    } else if (media >= 50 && media <= 69) {
        // console.log('exame');
        exame()
        return media
    } else if (media <= 50) {
        // console.log('reprovado')
        return media
    }
}

const exame = function (mediaAluno, notaExame) {

    let exame = (Number(mediaAluno) + Number(notaExame)) / 2

    if (exame == '') {
        console.log('ERRO: entrada está vazia');
    } else if (isNaN(exame)) {
        console.log('ERRO: Digite número válido e não letras');
    } else if (exame > 100) {
        console.log('ERRO: A nota não pode ser maior que 100');
    } else if (exame < 0) {
        console.log('ERRO: A nota não pode ser menor que 0');
    } else if (exame >= 69) {
        // console.log('aprovado')
        return exame
    } else if (exame <= 50) {
        // console.log('reprovado')
        return exame
    }
}


const sexoAluno = function (sexoAl) {
    let generoAl = sexoAl

    switch (generoAl) {

        case 'MASCULINO':
            generoAl = 'O aluno'
            break

        case 'FEMININO':
            generoAl = 'A aluna'
            break

    }
}

const sexoProfessor = function (sexoProf) {
    let generoProf = sexoProf

    switch (generoProf) {

        case 'MASCULINO':
            generoProf = 'O Professor'
            break

        case 'FEMININO':
            generoProf = 'A Professora'
            break

    }
}



mediaAluno(50, 50, 50, 60)
exame(53, 80)

module.exports = {
    mediaAluno,
    exame,
}

