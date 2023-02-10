//Comentário em linha
/*
    Comentário
      em 
    Bloco
*/    
//Permite exibir no terminal uma mensagem  

console.log('Testando o Node.JS');

//Import de biblioteca que permite entrada de dados via teclado
var readline = require('readline');

// Criamos um objeto que vai ser especialista na entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//CallBeck- uma funçao de callBack permite que na propria linha de programação seja variavel, um processamento, a chamada
//de um metodo possa acontecer um retorno de dados automaticamente, sem precisar sair deste processamento

//cria uma interação com o usuario para entrada de dados. Após o usuario digitar o conteudo , o objeto entraDados premite
//retornar o conteúdo digitalizado para ser utilizado. Isso acontece atravez de uma função de CallBack
entradaDados.question('Favor digitar seu nome: \n', function(nome){
    console.log('Bem vindo,'+ nome + ' ao servidor node.js !');
});