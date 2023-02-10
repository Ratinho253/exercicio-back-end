/********************************************************************************
 * Objetivo: Fazer uma Calculadora
 * Autor: João Victor Da Silva
 * Data: 03/02/2023
 * Versão: 1.0
 *********************************************************************************/

// Import da biblioteca da calculadora
var matematica = require('./modulo/calculadora.js')

// Import da biblioteca de entrada de dados
var readline = require ('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Valor : \n', function(numero1){
    let valor1 = numero1.replace(",", '.')

    /** Alguns exmplos de metodos importante da classse String replace, substring, upercasse, lowercase, indexof, trim */
       
    entradaDados.question('Valor 2 : \n', function(numero2){
        let valor2 = numero2.replace(",", '.')

        entradaDados.question('Ecolha uma operação matématica: [Somar | Subtrair | Multiplicar | Dividir] \n', function(tipoCalculo){
            
            let operacao = tipoCalculo.toUpperCase()
            let resultado

            if(valor1 == '' || valor2 == '' || operacao == ''){
                console.log (' Não é possivel calcular sem vc colocar o valor')
            }else if (isNaN(valor1) || isNaN(valor2)){
                console.log('Erro: não é possivel calcular se os dados digitados não forem números.')
            }else{
                // touppercase - converte uma string em maiusculo
                // tolowercase - converte uma string em minusculo

                // chama a função para calcular os valores (função que nos criamos)
                resultado = matematica.calculadora(valor1, valor2, operacao)

                //if (resultado == false && typeof(resultado) == 'boolean'){
                if (resultado === false ){
                    entradaDados.close()
                }else{
                console.log(resultado)
                entradaDados.close()
                }
                

            } 
        })
    })
})

