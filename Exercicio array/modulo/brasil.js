/********************************************************************************
 * Objetivo: Arquivo para desenvolver  uma API
 * Autor: João Victor Da Silva
 * Data: 03/03/2023
 * Versão: 1.0
 *********************************************************************************/

var listaJson = require('../Json/estados_cidades.js')


function getListaEstado() {


    let ufListJson = {}

    let  ufListArray =[]


    ufListJson = ufListArray

    listaJson.estadosCidades.estados.forEach(function (uf) {
        ufListArray.push(uf.sigla);
    })

    return ufListJson

}
console.log(getListaEstado())







