const despesas = [120, 80, 45.5, 200, 60];
let totalDespesas = 0;

for (let i =0; i < despesas.length; i++) {
    totalDespesas += despesas[i];
}

console.log(`Total de despesas: R$ ${totalDespesas}`)
