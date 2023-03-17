/********************************************************************************
 * Objetivo: Arquivo para desenvolver  uma API
 * Autor: João Victor Da Silva
 * Data: 03/03/2023
 * Versão: 1.0
 *********************************************************************************/

var listaJson = require('./estados_cidades.js')
 


function getListaDeEstados() {


    let ufListJson = {}

    let ufListArray = []


    ufListJson.uf = ufListArray

    listaJson.estadosCidades.estados.forEach(function (uf) {
        ufListArray.push(uf.sigla);
        ufListJson.quantidade = ufListArray.length
    })

    return ufListJson

}


function getDadosEstados(filtro) {

    let estadosUf = {}

    let local = filtro

    let status = true

    listaJson.estadosCidades.estados.forEach( function (uf) {

        if (local == uf.sigla) {
            estadosUf.uf = uf.sigla
            estadosUf.descricao = uf.nome
            estadosUf.capital = uf.capital
            estadosUf.regiao = uf.regiao

            status = true
        }
    });
         
    if(status == true) {
        return estadosUf
    } else {
        return false
    }

}



function getCapitalEstado(sigla) {

    let estados = {}

    let local = sigla

    listaJson.estadosCidades.estados.forEach(function (uf) {

        if (local == uf.sigla) {
            estados.uf = uf.sigla
            estados.descricao = uf.nome
            estados.capital = uf.capital
        }
    });

    return estados

}



function getEstadosRegiao(regiao) {

    let ufFiltro = {}
    let ufEstados = []
    let status

    listaJson.estadosCidades.estados.forEach(function (estado) {

        if (estado.regiao == regiao) {
            ufEstados.push({ uf: estado.sigla, descricao: estado.nome })
            status = true
        } else if (undefined) {
            status = false
        }

        ufFiltro.regiao = regiao
        ufFiltro.estados = ufEstados
    })
    if (status == false) {
        return false
    } else {
        return ufFiltro
    }

}


function getCapitalPais(capital) {

    let filtro = {}
    let capitais = []

    listaJson.estadosCidades.estados.forEach(function (estado) {

        if (estado.hasOwnProperty('capital_pais')) {
            capitais.push({
                capital_atual: estado.capital_pais.capital,
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao,
                capital_pais_ano_inicio: estado.capital_pais.ano_inicio,
                capital_pais_ano_termino: estado.capital_pais.ano_fim
            })
        }

        filtro.capitais = capitais

    })

    return filtro

}

function getCidades(uf) {
    let cidadeJson = {}
    let cidadesArray = []
    let status

    listaJson.estadosCidades.estados.forEach(function (estado) {

        if (uf == estado.sigla) {
            cidadeJson.uf = estado.sigla
            cidadeJson.descricao = estado.nome
            cidadeJson.quantidade_cidades = estado.cidades.length

            estado.cidades.forEach(function (cidade) {
                cidadesArray.push(cidade.nome)
            })

        status = true

        } else if (undefined){
            status = false
        }
    })
    cidadeJson.cidades = cidadesArray

    if (status == false) {
        return false
    } else {
        return cidadeJson
    }

}
// console.log(getListaEstado())

module.exports = {
    getListaDeEstados,
    getDadosEstados,
    getCidades,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais
}







