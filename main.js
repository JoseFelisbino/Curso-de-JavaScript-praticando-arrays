const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];

tarefas.push('Pagar boletos');
console.log("lista após adicionar: ", tarefas);


const IndexUltimaTarefa = (tarefas.length) - 1;

tarefas.splice(IndexUltimaTarefa);
console.log("Lista após remover a última tarefa: ", tarefas);

