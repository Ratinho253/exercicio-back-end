/**
 * Objetivo: Utilizar códigos e metodos de array
 * Data: 24/02/2023
 * Autor: João
 * Versão:1.0
 */

// [] - representa um objeto do tipo array
// {} - representa um objeto do tipo JSON

const listaNomes = ['jose', 'maria', 'luiz', 'antonio', 'ana', 'carlos']
const listaProdutos = ['teclado', 'mouse', 'monitor', 'gabinete', 'hd', 'memória']

/*************************
 * JSON é composto: por chave(atributo) e valor
 * 
    Chave   Valor     Chave     Valor        Chave     Valor
 *  {nome : 'José', celular : '11984029132', email : 'jose@gmail.com'}
 * 
 */

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
    listaProdutos.push('webCam', 'gabinete', 'fone')
    console.table(listaProdutos)

    //unshift - aiciona novos itens no inicio do array, re-organizando todos os elementos
    listaProdutos.unshift('hd', 'placa-Mãe', 'ssd')
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
    if (listaProdutos.indexOf('teclado') >= 0) {
        console.log('Item encontrado')
    } else {
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
    if (indice >= 0) {
        listaProdutos.splice(indice, 1)
        status = true
    } else {
        status = false
    }

    return status

}

//Fiz sozinho
const removerECriarUmaNovaLista = function (copiaList, novaLista) {
    let lista = novaLista
    let indice = listaProdutos.indexOf(lista)
    let status


    var copiaList = listaProdutos.slice()
    console.log(copiaList)

    if (indice >= 0) {
        copiaList.splice(indice, 1)
    } else {
        status = false
    }

    return status

}


//Fiz com o professor
const removerItem = function (array, nomeItem) {
    // Entrada
    let nome = nomeItem
    let novoArray = array.slice()
    let indice = novoArray.indexOf(nome)
    let status

    //Processamento da função
    if (indice >= 0) {
        novoArray.splice(indice, 1)
        status = true
    } else {
        status = false
    }

    //Saida 
    if (status) // mesma coisa que : status == true
        return novoArray
    else
        return false
}


const listagemProdutos = function () {

    // Forma numero 1 de criar um JSON e já atribuir chaves e valore
    // let listProdutosJSON = {produtos : listaProdutos, clientes : listaNomes}
    // let listProdutosJSON = {}

    //Forma numero 2 de criar um JSON, onde as chaves e valores são atribuidas no decorrer do projetos
    //  listProdutosJSON.produtos = listaProdutos
    //  listProdutosJSON.clientes = listaNomes

    // extraindo valores de um JSON e ARRAY    
    // console.log(listProdutosJSON)
    // console.log(listProdutosJSON.produtos[1])
    // console.log(listProdutosJSON.clientes[5])


    let listProdutosJSON = {}
    let listProdutosArray = [
        {
            nome: 'Monitor',
            quantidade: 300,
            marca: 'DELL',
            valor: 1000,
            codigo: 1
        },
        {
            nome: 'Monitor',
            quantidade: 280,
            marca: 'LG',
            valor: 1300,
            codigo: 2
        },
        {
            nome: 'Teclado',
            quantidade: 800,
            marca: 'DELL',
            valor: 200,
            codigo: 3
        },
        {
            nome: 'Teclado',
            quantidade: 360,
            marca: 'LG',
            valor: 230,
            codigo: 4
        },
        {
            nome: 'Teclado',
            quantidade: 80,
            marca: 'Logitech',
            valor: 120,
            codigo: 5
        },
        {
            nome: 'Teclado',
            quantidade: 100,
            marca: 'Razer',
            valor: 1230,
            codigo: 6
        },
        {
            nome: 'Mouse',
            quantidade: 790,
            marca: 'DELL',
            valor: 115,
            codigo: 7
        },
        {
            nome: 'Mouse',
            quantidade: 25,
            marca: 'Razer',
            valor: 800,
            codigo: 8
        }
    ]

    //Array para cores
    let listCoresDellArray = ['Preto', 'Cinza', 'Branco']
    let lisCoresLgArray = ['Preto', 'Cinza']
    let lisCoresTecladoArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul']
    let listCoresMouseArray = ['Preto', 'Branco', 'Cinza', 'Azul', 'Verde', 'Rosa', 'Amarelo', 'Vermelho', 'Roxo']

    //Arrays para modelos
    let listModelosMonitor = ['LCD', 'LED', 'OLED', '4K', 'IPS']
    let listModelosTeclado = ['Mecânico', 'Semi-Mecânico', 'Membrana', 'óptico']

    // Adiciona o Array de produtos dentro de um JSON
    listProdutosJSON.produtos = listProdutosArray

    // Adicionar as cores ao monitor Dell
    listProdutosJSON.produtos[0].cores = listCoresDellArray

    // Adicionar as cores ao monitor Lg
    listProdutosJSON.produtos[1].cores = lisCoresLgArray

    // Adicionar as cores no teclados
    listProdutosJSON.produtos[2].cores = listCoresDellArray
    listProdutosJSON.produtos[3].cores = lisCoresTecladoArray
    listProdutosJSON.produtos[4].cores = lisCoresTecladoArray
    listProdutosJSON.produtos[5].cores = lisCoresTecladoArray

    // Adicionar as core no mouse
    listProdutosJSON.produtos[6].cores = listCoresDellArray
    listProdutosJSON.produtos[7].cores = listCoresMouseArray

    // Adicionar modelos ao Monitores 
    listProdutosJSON.produtos[0].modelos = listModelosMonitor
    listProdutosJSON.produtos[1].modelos = listModelosMonitor

    // Adicionar modelos aos Teclados
    listProdutosJSON.produtos[2].modelos = listModelosTeclado
    listProdutosJSON.produtos[3].modelos = listModelosTeclado
    listProdutosJSON.produtos[4].modelos = listModelosTeclado
    listProdutosJSON.produtos[5].modelos = listModelosTeclado



    // console.log(listProdutosJSON.produtos[0]);
    // console.log(listProdutosJSON.produtos[1]);
    // console.log(listProdutosJSON.produtos[2]);
    // console.log(listProdutosJSON.produtos[3]);
    // console.log(listProdutosJSON.produtos[4]);
    // console.log(listProdutosJSON.produtos[5]);
    // console.log(listProdutosJSON.produtos[6]);
    // console.log(listProdutosJSON.produtos[7]);

    // Maneira Certa
    // Percorre o array de produtos para listar os itens
    listProdutosJSON.produtos.forEach(function (itemProduto) {
        console.log('Nome:' + itemProduto.nome);
        console.log('Marca:' + itemProduto.marca);
        console.log('Valor:' + itemProduto.valor);

        //Tratamento de erro para quando não existir array de cor
        if (itemProduto.cores != undefined) {
            // Percorre o array de cores que está dentro do array de produtos (item)
            itemProduto.cores.forEach(function (itemCor) {
                console.log('Cores:' + itemCor);
            })
        }

        // Tratamento de erro para quando não existir  array de modelos
        if (itemProduto.modelos != undefined) {
            // Percorre o array de modelos que está dentro do array de produtos (ItemProdutos)
            itemProduto.modelos.forEach(function (itemModelo) {
                console.log('Modelos:' + itemModelo);
            })
        }
        console.log('**************************************************************************');


    })

    
    for( let contProdutos = 0; contProdutos < listProdutosJSON.produtos.length; contProdutos++){
        console.log('Marca:' + listProdutosJSON.produtos[contProdutos].nome);
        console.log('Marca:' + listProdutosJSON.produtos[contProdutos].marca);

        for(let contCores = 0; contCores < listProdutosJSON.produtos[contProdutos].cores.length; contCores++){
            console.log('Cores:' + listProdutosJSON.produtos[contProdutos].cores[contCores]);
        }
    }

    // console.log('Marca:' + listProdutosJSON.produtos[1].marca);
    // console.log('Valor:' + listProdutosJSON.produtos[1].valor);

    // Maneira errada
    // console.log('Nome:' + listProdutosJSON.produtos[1].nome);
    // console.log('Marca:' + listProdutosJSON.produtos[1].marca);
    // console.log('Valor:' + listProdutosJSON.produtos[1].valor);
    // console.log('Cor:' + listProdutosJSON.produtos[1].cores[1]);
    // console.log('Modelo:' + listProdutosJSON.produtos[1].modelos[1]);




}

listagemProdutos()

// console.table(listaProdutos)
// console.log(removerECriarUmaNovaLista('mouse'))
// console.table(copiaList)


// console.table(listaProdutos)
// console.log(removerProdutos('mouse'))
// console.table(listaProdutos)


//manipulandoDados()
