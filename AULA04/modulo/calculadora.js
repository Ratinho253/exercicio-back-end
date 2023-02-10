/********************************************************************************
 * Objetivo: Arquivo de funções para calculo matemáticos
 * Autor: João Victor Da Silva
 * Data: 03/02/2023
 * Versão: 1.0
 *********************************************************************************/

// função para realizar  calculos matemáticos (somar, subtrair, multiplicar e dividir)
// a entrada de dados sempre é nos parentes() que são chamados de argumentos

// forma 1 de ciar uma função (método mais tradicional)
//function calculadora(numero1, numero2, tipoCalculo) {

//let valor1 = Number(numero1)
//let valor2 = Number(numero2)
//let operacao = tipoCalculo.toUpperCase()
// let resultado
// let status = true

// if (operacao == 'SOMAR') {
//    resultado = valor1 + valor2

// } else if (operacao == 'SUBTRAIR') {
//   resultado = valor1 - valor2

//} else if (operacao == 'MULTIPLICAR') {
//   resultado = valor1 * valor2
//
//} else if (operacao == 'DIVIDIR') {
// if (valor2 == 0) {
//   console.log('Erro: não é possivel realizar a divisão por 0')
//  return false
//  } else {
//    resultado = valor1 / valor2
//   }
// } else {
//    console.log('Erro: a sua escolha de operação matemática foi invalida')
// finaliza o callback do objeto da entrada de dados
//    return false
// }
/** Validação para tratar quando o resultado váriavel resultado não for processada por algum problema */
//if (resultado == undefined || status == false) {
//   return false
//} else {
//   return resultado
//  }
//}

// forma 2 de como criar uma função ( metodo mais utilizados por programadores  em (JS))
const calculadora = function (numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado
    let status = true

    // if (operacao == 'SOMAR') {
    //     resultado = valor1 + valor2

    // } else if (operacao == 'SUBTRAIR') {
    //     resultado = valor1 - valor2

    // } else if (operacao == 'MULTIPLICAR') {
    //     resultado = valor1 * valor2

    // } else if (operacao == 'DIVIDIR') {
    //     if (valor2 == 0) {
    //         console.log('Erro: não é possivel realizar a divisão por 0')
    //         return false
    //     } else {
    //         resultado = valor1 / valor2
    //     }
    // } else {
    //     console.log('Erro: a sua escolha de operação matemática foi invalida')
    //     // finaliza o callback do objeto da entrada de dados
    //     return false
    // }

    switch (operacao) {

        case 'SOMAR':
            resultado = somar( valor1, valor2)
            break
        case 'SUBTRAIR':
            resultado = subtrair(valor1, valor2)
            break
        case 'MULTIPLICAR':
            resultado = multiplicar(valor1,valor2)
            break
        case 'DIVIDIR':
            if (valor2 == 0) {
                console.log('Erro: não é possivel realizar a divisão por 0')
                return false
            } else {
                resultado = dividir(valor1 / valor2)
            }
            break

            // permite entrar nesta opção, sempre que nenhum dos case for valido (como se fosse o ultimo else  de uma estrutura de if)
        default:
            console.log('Erro: a sua escolha de operação matemática foi invalida')
            status = false
    }



    /** Validação para tratar quando o resultado váriavel resultado não for processada por algum problema */
    if (resultado == undefined || status == false) {
        return false
    } else {
        return resultado.toFixed(2)
    }
}

// forma 2 de como criar uma função ( modelo chamado Arrow Function (JS))
const  somar = (valor1, valor2) => Number(valor1) + Number(valor2)
const  subtrair = (valor1, valor2) => Number(valor1) - Number(valor2)
const  multiplicar = (valor1, valor2) => Number(valor1) * Number(valor2)
const  dividir = (valor1, valor2) => Number(valor1) / Number(valor2)


/** Permite adicionar uma function no escopo global(public)
 *  AS function que não estiver aqui em exports serão tratadas como escopo local
 */
module.exports = {
    calculadora
}