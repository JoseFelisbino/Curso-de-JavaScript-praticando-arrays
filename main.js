const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

console.log("Relatório de produtos vendidos:\n");

for (const produto of produtos) {
    console.log(`Produto: ${produto.nome} | Preço: ${produto.preco} | Quantidade vendida: ${produto.quantidadeVendida}`);
}

console.log("\nProdutos com alto volume de vendas (> 100 unidades):");

produtos.filter((produto) => {
    if (produto.quantidadeVendida > 100) {
        console.log(produto.nome);
    }
});

console.log("\nTotal de vendas por produto:");

let maiorLucrativo = 0;


produtos.map((produto) => {
    let totalVendas = produto.preco * produto.quantidadeVendida;
    console.log(`${produto.nome}: R$ ${totalVendas}`);

   
});





