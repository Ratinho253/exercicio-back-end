/************************************************************************************************
 * Objetivo: Criar uma API para disponibilizar dados de Estados e Cidades
 * Autor: João Victor da Silva
 * Data: 10/03/2023
 * Versão: 1.0
 ************************************************************************************************/

/**
 * Express - dependencia para realizar requizições de API pelo HTTP
 *     npm install express --save
 * 
 * Cors - dependencia para gerenciar permissões de requisição da API
 *     npm install cors --save
 * 
 * Body-Parser - dependencia que gerencia o corpo das requisições
 *    npm install body-parser --save 
 */

// impot das dependencia do projeto
const express = require('express')
// dependencia para criar as requisições da API
const cors = require('cors')
// dependencia para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser')
// import do arquivo modulo (funções)
const estadosCidades = require('./modulo/brasil.js')


// Cria um objeto com as caracteristicas do express
const app = express()

app.use((request, response, next) => {
    //API publica - fica disponivel para utilização para qualquer aplicação
    //API privada - somente o IP informado poderá consumir dados da API
    // Define se a API srá publica ou privada
    response.header('Access-Control-Allow-Origin', '*')

    // Permite definir quais metodos poderão ser utilizados na requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Envia para o  Cors() as Regras de permissões
    app.use(cors())

    next()
})

//EndPoints
//aesync - estabelece um status de aguarde, assim que eu processar eu te devolvo os dados
//OBS: se não usar aesync a requisição é perdida, pois o front acha a API esta fora do ar


//EndPoint para listar todos os estados
app.get('/senai/estados', cors(), async function (request, response, next) {

    // chama a função que vai chamar todos os estados
    let estado = estadosCidades.getListaDeEstados()

    // tratamento para validar o sucesso da requisição
    if (estado) {
        response.status(200)
        response.json(estado)
    } else {
        response.status(500)
    }


})

//EndPoit lista os dados do estados filtrando pela sigla
app.get('/senai/estado/sigla/:uf', cors(), async function (request, response, next) {

    let statusCode
    let dadosEstados = {}

    // essa linha recebe a sigla do estado que será enviada pela url da requisição
    let siglaEstado = request.params.uf

    // tratamento para validação de entrata de dados incorreta
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosEstados.message = 'Não foi possivel processar pois os dados de entrada (uf) que foi enviado não corresponde, confira o valor,  pois não pode ser vazio, precisa ser caracteres e ter 2 digitos.'
    } else {

        // chama função para retornar os dados do estados
        let estado = estadosCidades.getDadosEstados(siglaEstado)

        if (estado) {
            statusCode = 200
            dadosEstados = estado
        } else {
            statusCode = 404
        }
    }
    // Retorna o codigo eo Json 
    response.status(statusCode)
    response.json(dadosEstados)
})

//EndPoit lista os dados das capitais dos estados
app.get('/senai/capitalestados/sigla/:uf', cors(), async function (request, response, next) {

    let statusCode
    let dadosCapitais = {}

    let siglaCapital = request.params.uf

    if (siglaCapital == '' || siglaCapital == undefined || siglaCapital.length != 2 || !isNaN(siglaCapital)) {
        statusCode = 400
        dadosCapitais.message = 'Não foi possivel processar pois os dados de entrada (sigla) que foi enviado não corresponde, confira o valor,  pois não pode ser vazio, precisa ser caracteres e ter 2 digitos.'
    } else {

        let capitais = estadosCidades.getCapitalEstado(siglaCapital)

        if (capitais) {
            statusCode = 200
            dadosCapitais = capitais
        } else {
            statusCode = 404
        }
    }

    // Retorna o codigo eo Json 
    response.status(statusCode)
    response.json(dadosCapitais)
})

//EndPoint listar estados por região
app.get('/senai/estadosregiao/regiao/:regiao', cors(), async function (request, response, next){
    let statusCode
    let dadosRegiao = {}

    let siglaRegiao = request.params.regiao

    if (siglaRegiao == '' || siglaRegiao == undefined || !isNaN(siglaRegiao)) {
        statusCode = 400
        dadosRegiao.message = 'Não foi possivel processar'
    }else {
        let regiao = estadosCidades.getEstadosRegiao(siglaRegiao)

        if (regiao){
            statusCode = 200
            dadosRegiao = regiao
        }else{
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosRegiao)
})

//EndPoint listar capital do pais eas que já foram
app.get('/senai/capitaispais', cors(), async function(request, response, next) {
       

    //Chama a função que vai listar todos os estados
    let capitaispais = estadosCidades.getCapitalPais();

    //Tratamento para validar o sucesso da requisição
    if (capitaispais) {
        response.status(200);
        response.json(capitaispais);
    } else {
        response.status(500);
    }

});

//EndPoint para listar a cidades de um estados
app.get('/v1/senai/cidades/:uf', cors(), async function(request, response, next) {
    let statusCode
    let cidades = {}

    let siglaEstado = request.params.uf

    if(siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)){
        statusCode = 400;
        cidades.message = 'Não foi possivel processar, pois os dados de entrada (uf) que foi enviado não corrensponde ao que foi exigido. Confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 dígitos.';
    } else {
        //Chama a função para retornar os dados do estado
        let cidadesEstado = estadosCidades.getCidades(siglaEstado)

        if(cidadesEstado){
            statusCode = 200
            cidades = cidadesEstado
        } else {
            statusCode = 404
        }
    }
    //Retorna o codigo e o JSON
    response.status(statusCode)
    response.json(cidades)
});


app.get('/v2/senai/cidades', cors(), async function(request, response, next){
    
    /** 
        Existem 2 opções para receber variaveis para filtro:
            -params - que premite receber a variavel na estrutura da URL
                criada no EndPoint (geralmente utilizado para ID (PK))

            -query - (Tambem conhecido como queryString) que permite uma ou 
                muitas variaveis para realizar filtros avançados
    */
   
    //Recebe uma variavel encaminhada via queryString 
    let siglaEstado = request.query.uf
    // let cepEstado = request.query.cep
    // let populacaoEstado = request.query.populacao


    let statusCode
    let dadosCidades = {}

    // essa linha recebe a sigla do estado que será enviada pela url da requisição
    

    // tratamento para validação de entrata de dados incorreta
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosCidades.message = 'Não foi possivel processar pois os dados de entrada (uf) que foi enviado não corresponde, confira o valor,  pois não pode ser vazio, precisa ser caracteres e ter 2 digitos.'
    } else {

        // chama função para retornar os dados do estados
        let cidades = estadosCidades.getCidades(siglaEstado)

        if (cidades) {
            statusCode = 200
            dadosCidades =  cidades
        } else {
            statusCode = 404
        }
    }
    // Retorna o codigo eo Json 
    response.status(statusCode)
    response.json(dadosCidades)

})

// roda o serviso da API para ficar aguardando requisições
app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080');
})

