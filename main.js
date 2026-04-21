const precos = [100, 80, 50, 120];

const precosComDesconto = precos.map((preco) => {
    const desconto = 10/100;
    return preco - (preco * desconto);
})

console.log(`Preços com desconto: ${precosComDesconto}`)