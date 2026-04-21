const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];

participantes.filter((participante) => {
    if (participante.idade >= 18) {
        console.log(`Acesso liberado para: ${participante.nome}`);
    }
});

const participantesAutoizados = participantes.map((participante) => {
    if (participante.idade >= 18) {
        return participante.nome;
    }
});

console.log("Lista de aprovados:" + participantesAutoizados);