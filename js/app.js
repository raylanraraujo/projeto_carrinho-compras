//variável total criada fora da função para evitar que ela receba o valor de 0 toda vida que o botão adicionar seja clicado
let total;  

limpar(); //inicia a página chamando a função limpar


function adicionar() {
//recuperar valores: nome do produto; quantidade; valor
let produto = document.getElementById('produto').value; //usamos o value, para obter o valor escolhido
let quantidade = document.getElementById('quantidade').value;
let nomeProduto = produto.split('-')[0]; //recurso split separa strings em arrays do value de option. 
let valorUnit = produto.split('R$')[1]; //Separador nesse caso é o R$ da propriedade value
  
//validação para que só consiga adicionar produtos selecionados e uma quantidade válida
if (nomeProduto == 'Selecione seu produto'){
    alert('Selecione um produto antes de adicionar')
    return;
}
if (quantidade == '' || quantidade <= 0){
    alert('Adicione uma quantidade válida antes de adicionar')
    return;
}
   

// calcular o preço subtotal por produto
let subTotal = valorUnit * quantidade;

//adicionar ao carrinho
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML += `<section class="carrinho__produtos__produto"> <span class="texto-azul"> ${quantidade}x </span> ${nomeProduto} <span class="texto-azul">R$ ${valorUnit} </span> </section>`;



//atualizar o total 
total+=subTotal;
console.log(total)
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${total}`
document.getElementById('quantidade').value = '';
document.getElementById('produto').value = 'Selecione seu produto';
}


function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = `R$ ${0}`;
    total = 0;
}