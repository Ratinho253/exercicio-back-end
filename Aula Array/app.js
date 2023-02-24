/**
 * Objetivo: Utilizar códigos e metodos de array
 * Data: 24/02/2023
 * Autor: João
 * Versão:1.0
 */

// [] - representa um objeto do tipo array
// {} - representa um objeto do tipo JSON

const listaNomes = ['jose', 'maria', 'luiz', 'antonio', 'ana', 'carlos']
const listaProdutos = ['teclado','mouse','monitor','gabinete','hd','memória']

const exibindoDados = function () {
    //verifica o tipo de dados do elemento listaNomes
    //console.log(taypeof(listaNomes)); 

    // verifica tipo de dados dos itens do array
    //console.log(taypeof(listaNomes[0])); 

    //exibindo um conteudo de um indice
    console.log(listaNomes[0])

    //exibindo todos os itens do array
    console.log(listaNomes)

    //table - permite visulizar o conteudo do array em formato de tabela
    console.table(listaNomes)

    console.log(' o nome do aluno é: ' + listaNomes[0])
    console.log(` o nome do aluno é:  + ${listaNomes[1]}`)

    //length - retorna a quantidade de itens de um array
    console.log(listaNomes.length)

    //percorrendo um array com while
    console.log('Exemplo com while')
    let cont = 0 // start
    let quantidadeItens = listaNomes.length // stop

    while (cont < quantidadeItens) {
        console.log(` o nome do aluno é:  + ${listaNomes[cont]}`)
        cont++
    }

    // percorrendp um array com for
    console.log('Exemplo com for')

    for (let cont = 0; cont < quantidadeItens; cont++)
        console.log(` o nome do aluno é:  + ${listaNomes[cont]}`)


    // percorrendp um array com forEach
    console.log('Exemplo com forEach')

    listaNomes.forEach(function (nome) {
        console.log(` o nome do aluno é:  + ${(nome)}`)
    })

    // percorrendp um array com forEach(Forma mais antiga)
    console.log('Exemplo com forEach(forma mais antiga)')

    for (item in listaNomes)
        console.log(` o nome do aluno é:  + ${listaNomes[item]}`)


}

const manipulandoDados = function () {
    //push - adiciona novos itens no final do array, preervando os elementos anteriores
    listaProdutos.push('memória')
    listaProdutos.push('webCam','gabinete','fone')
    console.table(listaProdutos)

    //unshift - aiciona novos itens no inicio do array, re-organizando todos os elementos
    listaProdutos.unshift('hd','placa-Mãe','ssd')
    console.table(listaProdutos)

    //pop - remove o ultimo item do array, preservando os elementos anteriores
    listaProdutos.pop()
    console.table(listaProdutos)

    //shift - Remove o primiro item do array, re-organizando todos os elemntos 
    listaProdutos.shift()
    console.table(listaProdutos)

    // slice - permite criar uma cópia de um array 
    const novosProdutos = listaProdutos.slice()
    console.log(novosProdutos)
    
    //indexOf - permite buscar dentro de um array um item 
        // Se o retorno for menos 1, o item não foi encontrado 
        // se o retorno for maior ou igual a 0, o item foi encontrado e ele retorna o índice
    console.log(listaProdutos.indexOf('mouse'))

    //exemplo de utilização do indexOf
    if(listaProdutos.indexOf('teclado') >= 0){
        console.log('Item encontrado')
    }else{
        console.log('Item não entrado');
    }
    
    

}

const removerProdutos = function (nomeProduto) {
    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome)
    let status

    //splice - permite apagar um item de um array atraves do indice 
        //se for encaminhando somente o indice ele irá apagar todos os itens
        //  para baixo
        // para  limitar a quantidade de itens a ser apagado , devemos informar como segundo para,etro 
    if(indice >= 0 ){
        listaProdutos.splice(indice, 1)
        status = true
    }else{
        status = false
    }

    return status

}

const removerECriarUmaNovaLista = function (copiaList, novaLista) {
    let lista = novaLista
    let indice = novaLista.indexOf(lista)
    let status


    const copiaList = listaProdutos.slice()
    console.log(copiaList)

    if(indice >= 0){
        copiaList.splice(indice, 1)
    }else {
        status  = false
    }

    return status

}

console.table(listaProdutos)
console.log(removerECriarUmaNovaLista('mouse'))
console.table(copiaList)


// console.table(listaProdutos)
// console.log(removerProdutos('mouse'))
// console.table(listaProdutos)


//manipulandoDados()
