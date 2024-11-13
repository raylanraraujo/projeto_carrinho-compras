// let quantidade = parseInt(document.getElementById('quantidade').value);

// function adicionar() {
//     console.log(quantidade);
// }

// function adicionar() {
//     let quantidadeElement = document.getElementById('quantidade');
//     let quantidadeString = quantidadeElement.value;
  
//     if (quantidadeString === '') {
//       console.error('O campo quantidade está vazio.');
//     } else {
//       let quantidade = parseInt(quantidadeString);
//       if (isNaN(quantidade)) {
//         console.error('O valor informado não é um número válido.');
//       } else if (quantidade == 0){
//         alert('É preciso inserir uma quantidade válida');
//       } else {
//         console.log(`A quantidade escolhida foi: ${quantidade}`);
//       }
//     }
//   }


function adicionar() {
//recuperar valores: nome do produto; quantidade; valor

let produto = document.getElementById('produto').value; //usamos o value, para obter o valor escolhido
let quantidade = document.getElementById('quantidade');
let nomeProduto = produto.split('-')[0]; //recurso split separa strings em arrays. Separador nesse caso é o hífen
let valorUnit = produto.split('R$')[1]; 

alert(nomeProduto);
alert(valorUnit);
alert(produto); 
alert(quantidade.value); //usamos o value, para obter o valor escolhido


}


function limpar() {
    
}