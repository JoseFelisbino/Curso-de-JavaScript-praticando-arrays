const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];

const segundoItemLista = listaDeCompras[1];
const novoItemLista = "fruta";

listaDeCompras[listaDeCompras.length - 1] = novoItemLista

console.log(`Segundo item da lista: ${segundoItemLista}`);
console.log(`Lista após modificação: ${listaDeCompras}`);



